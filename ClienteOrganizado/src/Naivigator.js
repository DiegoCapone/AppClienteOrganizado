import React from 'react';
import { createSwitchNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Login from './Components/Login'
import ListaCliente from './Components/ListaClientes'
import CadastrarCliente from './Components/CadastrarCliente'



const Routes = createDrawerNavigator({
    Home: {
      screen: ListaCliente,
    },
    Notifications: {
      screen: CadastrarCliente,
    },
  });

const menu =  createAppContainer(Routes); 


const Autenticacao = createSwitchNavigator(
{    
    Entrar: Login,
    Registrar: menu,
})
   
  
export default createAppContainer(Autenticacao);