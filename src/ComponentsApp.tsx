import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './core/nav/Navigator';

class ComponentsApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}

export default ComponentsApp;
