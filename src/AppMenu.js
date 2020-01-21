import React, {Component} from 'react';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/AntDesign';

class AppMenu extends Component{
    
    _menu = null;

    setMenuRef= ref => {
        this._menu = ref;
    };
    hideMenu = () => {
        this._menu.hide();
    };
    showMenu = () => {
        this._menu.show();
    };
    verPerfil = () => {
        this._menu.hide();
        const {navigate} = this.props.navigation;
        navigate("Perfil", {nome:"João Maria"});
    };

    render(){
        return (<Menu ref={this.setMenuRef}
            button={<Icon   onPress={this.showMenu}
                            name="ellipsis1"
                            style={{marginRight:20}}
                            size={35} />} >
        <MenuItem onPress={this.verPerfil}>Ver perfil</MenuItem>
        <MenuItem disabled>Configurações</MenuItem>
        <MenuItem disabled>Sobre o App</MenuItem>
        </Menu>)
    }
}

export default AppMenu;