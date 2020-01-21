/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//Simple Storage
//import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorage} from 'react-native';

class PessoaModel {

    itemName = "pessoas"
    static lista = [];

    /**
     * Procura exatamente 1 item
     * @param {*} id 
     */
    get(id){
        if (PessoaModel.lista.length > 0){
            this.getAll();
        }
        for (var i = 0; i < PessoaModel.lista.length; i++){
            if (PessoaModel.lista[i].id == id){
                return PessoaModel.lista[i];
            }
        }
    }

    /**
     * Trás todos os itens
     */
    async getAll(){
        if (PessoaModel.lista.length > 0){
            return PessoaModel.lista;
        }
        
        try {
            PessoaModel.lista = await AsyncStorage.getItem(this.itemName);
            
            if (PessoaModel.lista == null){
                //nao existe nada salvo
                PessoaModel.lista = [];
            } else {
                //converte para json
                PessoaModel.lista = JSON.parse(PessoaModel.lista);
            }
        } catch (error) {
            console.log(error);
        }
        
        return PessoaModel.lista;
        
    }

    _save(){
        //salva permanentemente
        var func = async () => {
            try {
                await AsyncStorage.setItem(this.itemName, JSON.stringify(PessoaModel.lista));
            } catch (error) {
                console.log(error);
            }
        }
        func();
    }

    /**
     * Salva o item
     * @param {} elemento 
     */
    save(elemento, id){

        if (Array.isArray(elemento)){
            PessoaModel.lista = elemento;
            //armazena a lista inteira
            this._save();
        } else {

        //verifica se o elemento ja esta na lista
        var update = false;
        if (id != null){//se foi enviada uma id, é atualização
            for(var i = 0; i < PessoaModel.lista.length; i++){
                if (id == i){
                    //se estiver é uma atualizacao
                    PessoaModel.lista[i] = elemento;
                    update = true;
                }
            }
        }
        
        //se nao for uma atualizacao
        if (!update){
            PessoaModel.lista.push(elemento);
        }
        //armazena
        this._save();
        
        }
    }

    /**
     * Deleta o item
     * @param {*} id 
     */
    delete(id){
        //remove
        PessoaModel.lista.splice(id,1);
        //armazena
        this._save();
    }

}

export default PessoaModel;
