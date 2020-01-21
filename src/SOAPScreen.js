
import React, {Component} from 'react';
import {Button, View, Text, TextInput} from 'react-native';


class SOAPScreen extends Component {
  static navigationOptions = {
		title: 'Webservice SOAP',
  };
  
  state = {intA:0,intB:0}

  chamarSOAP(){
		var soap = require('soap-everywhere');
		var url = 'http://www.dneonline.com/calculator.asmx?wsdl';
		var args = {intA: this.state.intA, intB: this.state.intB};
		var tela = this
		soap.createClient(url, function(err, client) {
			client.Multiply(args, function(err, result) {
				console.log(result);
				console.log(args);
				tela.setState({resultado:result.MultiplyResult});
			});
		});
	}

  render(){
    return <View>
        
          	<TextInput 
				placeholder="Digite o primeiro número"
				onChangeText={text => this.setState({intA:text})}
				keyboardType="numeric"/>

			<TextInput 
				placeholder="Digite o segundo número"
				onChangeText={text => this.setState({intB:text})}
				keyboardType="numeric"/>

			{this.state.resultado != null &&
				<Text>Resultado:{this.state.resultado}</Text>
			}

			<Button onPress={this.chamarSOAP.bind(this)}
					title="Multiplicar"/>
        </View>
  }
}


export default SOAPScreen;