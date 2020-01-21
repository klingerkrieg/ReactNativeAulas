
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';


class RestFulScreen extends Component {
  static navigationOptions = {
		title: 'Webservice Restful',
  };
  
  state = {}

  buscaCep(cep){
		if (cep.length == 8){
			
			//com await
			/*var func = async () => {
				var resp = await fetch('http://ws.matheuscastiglioni.com.br/ws/cep/find/'+cep+'/json/', {
					method: 'GET',
					headers: {
						Accept: 'application/json, text/plain',
								'Content-Type': 'application/json',
					}
				}).catch((error) => {
					console.error(error);
				});
				resp = await resp.json();
				this.setState({endereco:resp})
				console.log(resp);
			}
			func();*/
			

			//com callback
			fetch('http://ws.matheuscastiglioni.com.br/ws/cep/find/'+cep+'/json/', {
				method: 'GET',
				headers: {
					Accept: 'application/json, text/plain',
							'Content-Type': 'application/json',
				}
			})
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({endereco:responseJson})
			})
			.catch((error) => {
				console.error(error);
			});
		}

}

  render(){
    return <View>
        
			<TextInput 
					placeholder="Digite seu CEP"
					onChangeText={text => this.buscaCep(text)}
					keyboardType="numeric" />

			   {this.state.endereco != undefined &&
			   	<View> 
					<Text>Logradouro:{this.state.endereco.logradouro}</Text>
					<Text>Bairro:{this.state.endereco.bairro}</Text>
					<Text>Cidade:{this.state.endereco.cidade}</Text>
					<Text>UF:{this.state.endereco.estado}</Text>
				</View>
			   }
        </View>
  }
}


export default RestFulScreen;