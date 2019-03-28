import { Alert } from 'react-native'

const server = 'http://192.168.1.104:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }