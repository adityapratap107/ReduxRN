import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WebViewComp from '../components/FAQ';
import CartScreen from '../components/myCart';
import ProductScreen from '../components/products';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="FAQ" component={WebViewComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
