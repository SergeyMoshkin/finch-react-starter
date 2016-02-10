import 'babel-polyfill';
import './themes';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  Platform
} from 'react-native';
import App from './components/App'
import FinchReactCore from 'finch-react-core';
let { StyledComponent } = FinchReactCore;

AppRegistry.registerComponent('FinchReactExample', () => App);

if (Platform.OS == 'web') {
  AppRegistry.runApplication('FinchReactExample', {});
}
