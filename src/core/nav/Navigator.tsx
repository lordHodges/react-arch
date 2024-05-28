import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen.tsx';

const Stack = createStackNavigator();

class Navigator extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home View" component={HomeScreen} />
      </Stack.Navigator>
    );
  }
}

export default Navigator;
