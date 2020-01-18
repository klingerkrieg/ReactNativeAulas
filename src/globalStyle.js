import {StyleSheet} from 'react-native';

//Tudo que voce quiser acessar externamente 
// tem que ter o export
//Separamos as cores, para o caso de 
//precisarmos usá-la em outro local
export const TEXT_COLOR = "#4d4d4d";
export const TITLE_BG_COLOR = "green";

export const styles = StyleSheet.create({
	title:{
		fontSize:20,
        textAlign:'center',
        backgroundColor:TITLE_BG_COLOR,
	},

	texto:{
		color:TEXT_COLOR
	}
});