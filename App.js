/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Alert, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

//Navegacao
import PerfilScreen from './PerfilScreen'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Menu
import AppMenu from './AppMenu'

//Estilo
import * as globalStyle from "./src/globalStyle";
const styles = globalStyle.styles;

class Title extends Component {
  
  acaoBotao(){
    console.log("debug console");
    Alert.alert('Ação do botão');
  }

  render (){
    return <View>
            <Text style={[styles.title, {backgroundColor:this.props.bg}]}>
            {this.props.children}
            </Text>
            {this.props.hasButton == true &&
              <Button title="Ok" onPress={this.acaoBotao.bind(this)} />
            }
            </View>
  }
}

Title.defaultProps = {
  hasButton: false,
  bg:"green",
};


class HomeScreen extends Component {

	/*static navigationOptions = {
		title: 'Tela inicial',
	};*/
	static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: () => <Text style={{fontSize:20, marginLeft:20}}>Tela inicial</Text>,
          headerRight: () => <AppMenu navigation={navigation} />
        };
      };
	
	state = {items:[]}
	//state = {nome:"Betina"}

	componentDidMount(){
		var items = []
		for (var i = 0; i < 20; i++){
			items.push("Item "+i)
		}
		this.setState({items:items});
	}

	cliqueComum(key){
		Alert.alert(this.state.items[key]);
	}

	cliqueLongo(key){
		Alert.alert(
			'Confirmação', 'Deseja realmente excluir esse item?',
			[
			  {text: 'Sim', onPress: () => {
				  	//deleta o item
					var items = this.state.items
					items.splice(key,1);
					this.setState({items:items});
				}
			  },
			  {text: 'Cancel',style: 'cancel',}
			],
			{cancelable: false},
		  );
	}

	enviar(){
		console.log(this.state.nome);
	}


  	/*render(){
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
	  }*/
	
	render(){
		const { navigate } = this.props.navigation;

		return <View onLayout={(evt) =>console.log('O Layout está pronto.')}>
              <Title hasButton={true}>Título</Title>




			  <Button color='red'
			  		onPress={() => navigate("Perfil", {nome:"João"}) } 
					title="Ir para outra tela"/>
			  
			  
			  
			  {/*<ScrollView>
			  	{this.state.items.map((item, i) => (
					<TouchableOpacity
						onPress={() => this.cliqueComum(i)}
						onLongPress={() => this.cliqueLongo(i)}
						key={i}
					>
					  <Text style={{fontSize:18, 
									borderBottomWidth:1, 
									borderBottomColor:"#b8b8b8",
									padding:10}}>{item}</Text>
					</TouchableOpacity>
				))}
					  </ScrollView>*/}

			  


			  {/*<View style={{
				  	flexWrap:'wrap',
					height: 200,
					flexDirection: 'row',
					backgroundColor:'gray',
				}}>
					<View style={{width: 150, height: 50, backgroundColor: 'powderblue'}} />
					<View style={{width: 150, height: 50, backgroundColor: 'skyblue'}} />
					<View style={{width: 150, height: 50, backgroundColor: 'steelblue'}} />
			</View>*/}

				
            </View>
  	}
}

//No final do arquivo
const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Perfil: {screen: PerfilScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
