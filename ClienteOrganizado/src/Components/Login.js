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
import { server, showError } from '../Config'
import axios from 'axios'
export default class Login extends Component {

    state = {
        cadastrar: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            })

            axios.defaults.headers.common['Authorization']
                = `bearer ${res.data.token}`

            this.props.navigation.navigate('Menu')
        } catch (err) {
            Alert.alert('Erro', 'Falha no Login!')
            // showError(err)
        }
    }

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })

            Alert.alert('Sucesso!', 'Usuário cadastrado :)')
            this.setState({ stageNew: false })
        } catch (err) {
            showError(err)
        }
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    render() {

        const validations = []

        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim())
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)
        }

        const validForm = validations.reduce((all, v) => all && v)

        return (
            <ImageBackground style={styles.background} source={background}>
                <View style={{ marginBottom: 120 }}>
                    <Text style={styles.title}>Bem Vindo!</Text>
                    <Text style={styles.subTitle}>Cliente Organizado</Text>
                </View>

                <View style={styles.bgForm}>
                    <Text style={{ fontWeight: 'bold', color: '#FFF', fontSize: 20, marginBottom: 10 }}>
                        {this.state.cadastrar ? 'Crie a sua conta' : 'Informe seus dados'}</Text>

                    {this.state.cadastrar &&
                        <Input placeholder='nome' icon='user'
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })} />}


                    <Input placeholder='email' icon='at'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />

                    <Input placeholder='password' icon='lock' secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />

                    {this.state.cadastrar && 
                        <Input placeholder='comfirmar password' icon='lock' secureTextEntry={true}
                        value={this.state.confirmPassword}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })} />}

                    <TouchableOpacity disabled={!validForm}
                        onPress={this.signinOrSignup}>
                        <View style={[styles.button, !validForm ? { backgroundColor: '#AAA' } : {}]}>
                            <Text style={styles.buttonText}>
                                {this.state.cadastrar ? 'Cadastrar' : 'Entrar'}</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10 }}
                        onPress={() => this.setState({
                            cadastrar: !this.state.cadastrar
                        })}>
                        <Text style={styles.buttonText}>
                            {!this.state.cadastrar ? 'Ainda não possui conta' : 'Já tenho conta!'}</Text>
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