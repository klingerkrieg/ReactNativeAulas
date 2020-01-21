
import React, {Component} from 'react';
import {Button, View, Alert} from 'react-native';
import {AsyncStorage} from 'react-native'


class SalvandoDadosScreen extends Component {
  static navigationOptions = {
		title: 'Salvando dados',
  };
  
  state = {nome:"Betina"}

  testeSalvar(){
		var func = async () => {
			try {
				await AsyncStorage.setItem("nome", "João");
			} catch (error) {
				console.log(error);
			}
		}
		func();
	}

	testeRecuperar(){
		var func = async () => {
			try {
				var nomeSalvo = await AsyncStorage.getItem("nome");
				Alert.alert(nomeSalvo)
			} catch (error) {
				console.log(error);
			}
		}
		func();
	}

  render(){
    return <View>
                          
          <Button onPress={this.testeSalvar.bind(this)} 
            title="Teste salvar"/>

          <Button onPress={this.testeRecuperar.bind(this)} 
              title="Teste recuperar"/>
        </View>
  }
}


export default SalvandoDadosScreen;