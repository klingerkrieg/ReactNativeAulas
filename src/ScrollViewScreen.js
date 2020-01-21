
import React, {Component} from 'react';
import {Button, View, Text, TextInput, ScrollView, Alert, TouchableOpacity} from 'react-native';


class ScrollViewScreen extends Component {
	static navigationOptions = {
			title: 'Scroll View',
	};
  
	state = {items:[]}

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


  	render(){
    return <View>

		<ScrollView>
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
		</ScrollView>

	</View>
 	}
}


export default ScrollViewScreen;