import React from 'react';
import Home from './src/screens/Home';
import ProductScreen from './src/screens/ProductScreen';
import {StatusBar} from 'react-native';import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#E4C083'} />
      <Stack.Navigator screenOptions={()=>({headerShown:false})}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
         </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
