
import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Realm = require('realm');


class Pessoa {}
Pessoa.schema = {
    name: 'Pessoa',
    primaryKey: 'id',
    properties: {
        id : 'int',
        nome: 'string',
        fone: 'int',
    },
};

const realm = new Realm({schema: [Pessoa]});


const styles = StyleSheet.create({
	line:{
        fontSize:18, 
        padding:10, 
        borderBottomWidth: 1, 
        borderBottomColor:"#ccc"
	}
});

class PessoaScreenRealm extends Component {
    static navigationOptions = {
		title: 'Cadastro de pessoas',
	};

    state = {nome:"",fone:"", lista:[]}

    componentDidMount(){
        this.listar()
    }


    listar(){
        let pessoas = realm.objects('Pessoa').sorted("nome");
        this.setState({lista:pessoas})
    }

    salvar(){
        //captura a ultima id
        var lastId = realm.objects('Pessoa').sorted("nome",false)[0]
        if (lastId == undefined){
            lastId = 0
        } else {
            lastId = lastId.id
        }
        //salva
        realm.write(() => {
            var savedPerson = realm.create('Pessoa', {
                id: lastId + 1,
                nome: this.state.nome,
                fone: parseInt(this.state.fone),
            });
            this.listar();
        });
    }

    deletar(id){
        Alert.alert(
			'Confirmação', 'Deseja realmente excluir esse item?',
			[
			  {text: 'Sim', onPress: () => {
                    //deleta o item
                    realm.write(() => {
                        let pessoa = realm.objects('Pessoa').filtered("id = $0", id)[0];
                        realm.delete(pessoa)
                    })
                    this.listar()
				}
			  },
			  {text: 'Cancel',style: 'cancel',}
			],
			{cancelable: false},
		  );
    }

    render(){
        return <View>  
            
            <TextInput 
                placeholder="Nome"
                onChangeText={text => this.setState({nome:text})}/>

            <TextInput 
                placeholder="Telefone"
                keyboardType="numeric"
                onChangeText={text => this.setState({fone:text})}/>

            <Button title="Salvar"
                    onPress={this.salvar.bind(this)}/>
            
            <ScrollView>
            {this.state.lista.map((p, i) => 
                <TouchableOpacity key={i} 
                                  onPress={ () => this.deletar(p.id)}>
                    <Text style={styles.line}>{p.nome} - {p.fone}</Text>
                </TouchableOpacity>
            )}
            </ScrollView>
            
        </View>
    }
}


export default PessoaScreenRealm;