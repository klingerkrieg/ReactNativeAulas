
import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';


const styles = StyleSheet.create({
  title:{
      fontSize:20,
      textAlign:'center',
  },

  texto:{
      color:"#4d4d4d"
  }
});


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


class CriandoComponentScreen extends Component {
    static navigationOptions = {
		title: 'Criando Componentes',
	};

    render(){
        return <View onLayout={(evt) =>console.log('O Layout está pronto.')}>
                <Title hasButton={true}>Título</Title>
            </View>
    }
}


export default CriandoComponentScreen;