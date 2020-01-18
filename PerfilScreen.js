
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';


class PerfilScreen extends Component {
    static navigationOptions = {
		title: 'Tela de perfil',
	};

    voltar(){
        this.props.navigation.goBack();
    }

    render(){
        var nome = this.props.navigation.getParam("nome");
        return <View>  
                    <Text>{nome}</Text>
                    <Button onPress={this.voltar.bind(this)} title="Voltar"/>
                </View>
    }
}


export default PerfilScreen;