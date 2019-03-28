import React, { Component } from 'react'
import {
    TextInput,
    Text,
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity

} from 'react-native'
import background from '../../assets/bg.jpg'
import Input from './Input'
import { bold } from 'ansi-colors';

export default class Login extends Component {

    state = {
        cadastrar: false
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={background}>
                <View style={{ marginBottom: 120 }}>
                    <Text style={styles.title}>Bem Vindo!</Text>
                    <Text style={styles.subTitle}>Cliente Organizado</Text>
                </View>

                <View style={styles.bgForm}>
                    <Text style={{ fontWeight: 'bold', color: '#FFF', fontSize: 20, marginBottom: 10 }}>
                        {this.state.cadastrar ? 'Crie a sua conta' : 'Informe seus dados'}</Text>
                    {this.state.cadastrar && <Input placeholder='nome' icon='user' />}
                    <Input placeholder='email' icon='at' />
                    <Input placeholder='password' icon='lock' />
                    {this.state.cadastrar && <Input placeholder='comfirmar password' icon='lock' />}

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>{this.state.cadastrar ? 'Cadastrar' : 'Entrar'}</Text>
                        </View>
                    </TouchableOpacity>

                    
                        <TouchableOpacity style={{paddingTop:10, paddingBottom:10}}
                        onPress={() => this.setState({ 
                            cadastrar: !this.state.cadastrar})}>
                            <Text style={styles.buttonText}>
                            {this.state.cadastrar ? 'Ainda não possui conta' : 'Já tenho conta!' }</Text>
                        </TouchableOpacity>
                       
                    

                </View>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgForm: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Arial',
        color: '#FFF',
        fontSize: 14
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    subTitle: {
        fontSize: 18,
        fontFamily: 'Arial',
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
})