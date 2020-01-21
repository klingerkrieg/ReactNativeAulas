/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, ScrollView,} from 'react-native';

//Criando componentes
import CriandoComponentScreen from './src/CriandoComponenteScreen'

//Eventos
import InputsScreen from './src/InputsScreen'
import ScrollViewScreen from './src/ScrollViewScreen'

//Navegacao
import PerfilScreen from './src/PerfilScreen'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Menu
import AppMenu from './src/AppMenu'

//Estilo
import * as globalStyle from "./src/globalStyle";
const styles = globalStyle.styles;

//Persistência Simples
import SalvandoDadosScreen from './src/SalvandoDadosScreen';

//Persistencia;
import PessoaScreen from './src/PessoaScreen'
import PessoaScreenRealm from './src/PessoaScreenRealm'

//Imagens
import ImagensScreen from './src/ImagensScreen'

//Camera
import CameraScreen from './src/CameraScreen'
import AlbumScreen from './src/AlbumScreen'

//Splash screen
import SplashScreen from 'react-native-splash-screen';

//Webservices
import SOAPScreen from './src/SOAPScreen'
import RestFulScreen from './src/ResfFulScreen'

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

	componentDidMount(){
		SplashScreen.hide();
	}

	
	render(){
		const { navigate } = this.props.navigation;		
		return <ScrollView>

			
			<Button onPress={() => navigate("CriandoComponente") } 
					title="Criando componente"/>

			<Button onPress={() => navigate("Inputs") } 
					title="Inputs"/>

			<Button onPress={() => navigate("ScrollView") } 
					title="Scroll View"/>

			<Button onPress={() => navigate("Perfil", {nome:"João"}) } 
					title="Passando parâmetros para outra tela"/>

			<Button onPress={() => navigate("SalvandoDados") } 
					title="Salvando dados"/>

			<Button onPress={() => navigate("SOAP") } 
					title="WebService SOAP"/>

			<Button onPress={() => navigate("RestFul") } 
					title="WebService RestFul"/>

			<Button onPress={() => navigate("Pessoas") } 
					title="Cadastro de pessoas"/>

			<Button onPress={() => navigate("PessoasRealm") } 
					title="Cadastro de pessoas Realm"/>

			<Button onPress={() => navigate("Imagens") } 
					title="Imagens"/>

			<Button onPress={() => navigate("Camera") } 
					title="Câmera"/>

			<Button onPress={() => navigate("Album") } 
					title="Album"/>


			
			<View style={{
					marginTop:30,
				  	flexWrap:'wrap',
					height: 200,
					flexDirection: 'row',
					backgroundColor:'#ccc',
				}}>
					<View style={{width: 150, height: 50, backgroundColor: 'powderblue'}} />
					<View style={{width: 150, height: 50, backgroundColor: 'skyblue'}} />
					<View style={{width: 150, height: 50, backgroundColor: 'steelblue'}} />
			</View>


            </ScrollView>
  	}
}

//No final do arquivo
const MainNavigator = createStackNavigator({
	Home: {screen: HomeScreen},
	CriandoComponente: {screen: CriandoComponentScreen},
	Inputs: {screen: InputsScreen},
	ScrollView: {screen: ScrollViewScreen},
	SalvandoDados: {screen: SalvandoDadosScreen},
	Perfil: {screen: PerfilScreen},
	Pessoas: {screen: PessoaScreen},
	PessoasRealm: {screen: PessoaScreenRealm},
	Imagens: {screen:ImagensScreen},
	Camera: {screen: CameraScreen},
	Album: {screen: AlbumScreen},
	SOAP: {screen: SOAPScreen},
	RestFul: {screen: RestFulScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
