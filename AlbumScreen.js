
import React, {Component} from 'react';
import { ScrollView, Image} from 'react-native';
var fs = require('react-native-fs');

class AlbumScreen extends Component  {
    static navigationOptions = {
		  title: 'Album',
    };

    state = {lista:[]}

    componentDidMount(){
      this.listar();
    }
    
    listar(){
      var fotos = []
      ret = fs.readDir(fs.CachesDirectoryPath+"/Camera").then((result) => {
        for (var i = 0; i < result.length; i++){
          //console.log(result[i].path)
          fotos.push("file:///"+result[i].path)
        }
        this.setState({lista:fotos})
        console.log(this.state.lista)
      })
    }

    render(){
        return <ScrollView >
            {this.state.lista.map((item, i) => (
              <Image style={{width: 360, height: 200, marginBottom:10}}
                     source={{uri:item}} />
            ))}
            </ScrollView>
    }
}


export default AlbumScreen;