
import React, {Component} from 'react';
import {View, Image} from 'react-native';


//Imagens
const rick = require("./images/rick.jpg")

class ImagensScreen extends Component {
  static navigationOptions = {
		title: 'Imagens',
  };
  

  render(){
    return <View>
        
			<Image style={{width: 140, height: 140}}
          			source={rick} 
				/>
			<Image style={{width: 50, height: 50}}
          		   source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
         		/>

        </View>
  }
}


export default ImagensScreen;