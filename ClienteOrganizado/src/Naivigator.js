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

const Menu =  createAppContainer(Routes); 


const MainRoutes = {
  
  Login: {
      name: 'Login',
      screen: Login
  },
  Menu: {
      name: 'Menu',
      screen: Menu
  }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
  initialRouteName: 'Login'
})
   
  
export default createAppContainer(MainNavigator);