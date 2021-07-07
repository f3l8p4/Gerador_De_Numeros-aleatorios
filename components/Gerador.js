import React from 'react'
import {View,Text, TextInput,Button, TouchableOpacity} from 'react-native'
import estilo from './estiloGerador'
export default class Gerador extends React.Component{
    state = {
        qtdenum:this.props.qtdenum,
        numerosGerados: []
    }
     alterarqtdenum = (qtde) =>{
        this.setState({qtdenum:qtde})
    }
    GerarNumeroNaoContido = (nums) =>{
        const novo = parseInt(Math.random() * 60 ) + 1 
        return nums.includes(novo) ? this.GerarNumeroNaoContido(nums) : novo
    }
    GerarNumeros = () => {
        const {qtdenum} = this.state
        const numeros = []
        for(i=0;i<qtdenum; i++){
            numeros.push(this.GerarNumeroNaoContido(numeros))
        }
        numeros.sort((a,b)=> a-b)
        this.setState({numeros})
    }
    render(){
        return(
            <React.Fragment>
            <Text style={estilo.Pfont}>Gerador de Numeros</Text>
            <TextInput style={estilo.Input} placeholder='Digite a quantidade numero a ser gerada'
            onChangeText={this.alterarqtdenum}
            keyboardType={'numeric'}
            />
            <TouchableOpacity style={estilo.botao}>
            <Button title='Gerar' onPress={this.GerarNumeros}/>
            </TouchableOpacity>
            <View style={estilo.result}>
                <Text style={estilo.fonts}>{`${(this.state.numeros)}`}</Text>
            </View>
            </React.Fragment>
        )
    }
}