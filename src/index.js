import 'babel-polyfill';
import './themes';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  Platform
} from 'react-native';
import FinchReactCore from 'finch-react-core';
let { StyledComponent } = FinchReactCore;

class FinchReactExample extends StyledComponent {
  render() {
    return (
      <View>
        <Text element="welcome">
          Welcome to React Native!
        </Text>
        <Text element="instructions">
          To get started, edit index.ios.js
        </Text>
        <Text element="instructions">
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  static styles = {
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  };
}

AppRegistry.registerComponent('FinchReactExample', () => FinchReactExample);

if (Platform.OS == 'web') {
  AppRegistry.runApplication('FinchReactExample', {});
}
