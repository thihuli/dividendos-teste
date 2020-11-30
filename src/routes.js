import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Notification from './pages/Notification';

import ContextProvider from './Context/ContextProvider';
import AppContext from './Context/AppContext';



const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export function Routes()  {
  const { token } = useContext(AppContext);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // if (token != null) {
  //   setIsSignedIn(true);
  // }


  const AuthScreen = () => {
    return (
      <AuthStack.Navigator sscreenOptions={{ headerShown: false }}>
        <AuthStack.Screen name='Login' component={Login} />
      </AuthStack.Navigator>
    )
  }

  const MainScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name='Dashboard' component={Dashboard} />
        <MainStack.Screen name='Notification' component={Notification}/>
      </MainStack.Navigator>
    )
  }


  return (
    <NavigationContainer>
      { token != null ? <MainScreen/> : <AuthScreen/> }
    </NavigationContainer>
  );
};