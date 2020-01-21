
import React, {Component} from 'react';
import {Button, View, Text, TextInput} from 'react-native';


class InputsScreen extends Component {
	static navigationOptions = {
			title: 'Inputs',
	};
  
	state = {nome:"Betina"}


	enviar(){
		console.log(this.state.nome);
	}

  	render(){
    return <View>

		<Text>{this.state.nome}</Text>

		<TextInput placeholder="Digite seu nome"
			autoFocus={true}
			onChangeText={text => this.setState({nome:text})}
			keyboardType="numeric"
			value={this.state.nome}
			/>
		<Button onPress={this.enviar.bind(this)}
				title="Enviar"/>


	</View>
 	}
}


export default InputsScreen;