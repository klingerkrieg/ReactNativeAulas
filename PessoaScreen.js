
import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PessoaModel from './PessoaModel'


const styles = StyleSheet.create({
	line:{
        fontSize:18, 
        padding:10, 
        borderBottomWidth: 1, 
        borderBottomColor:"#ccc"
	}
});

class PessoaScreen extends Component {
    static navigationOptions = {
		title: 'Cadastro de pessoas',
	};

    state = {nome:"",fone:"", lista:[]}

    pessoaModel = new PessoaModel()

    componentDidMount(){
        this.listar()
    }


    listar(){
        var func = async () => {
            var pessoas = await this.pessoaModel.getAll();
            console.log(pessoas);
            this.setState({lista:pessoas})
        }
        func()
    }

    salvar(){
        var func = async () => {
            var pessoa = {nome:this.state.nome, fone:this.state.fone}
            if (pessoa.nome != "" && pessoa.fone != ""){
                this.pessoaModel.save(pessoa)
            } else {
                Alert.alert("Preencha o nome e o telefone.");
            }
            this.listar()
        }
        func()
    }

    deletar(id){
        Alert.alert(
			'Confirmação', 'Deseja realmente excluir esse item?',
			[
			  {text: 'Sim', onPress: () => {
				  	//deleta o item
                      this.pessoaModel.delete(id)
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
                onChangeText={text => this.setState({fone:text})}/>

            <Button title="Salvar"
                    onPress={this.salvar.bind(this)}/>
            
            <ScrollView>
            {this.state.lista.map((p, i) => 
                <TouchableOpacity key={i} 
                                  onPress={ () => this.deletar(i)}>
                    <Text style={styles.line}>{p.nome} - {p.fone}</Text>
                </TouchableOpacity>
            )}
            </ScrollView>
            
        </View>
    }
}


export default PessoaScreen;