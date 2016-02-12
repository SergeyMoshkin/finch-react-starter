import React, {
  PropTypes,
  Component,
  View,
  Text,
  Navigator,
} from 'react-native';

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default
class NavigationScene extends StyledComponent {

  render() {
    return (
      <View>
        <Text element="text" attach="onClick, onPress">Back</Text>
      </View>
    );
  }

  text_onClick(){
  }
  text_onPress(){
    this.props.navigator.pop();
  }

  static styles = T => [
    {
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      }
    }
  ];
}

