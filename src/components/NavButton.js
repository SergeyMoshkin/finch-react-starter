import React, {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;
export default class NavButton extends StyledComponent {
  render() {
    return (
      <TouchableHighlight
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text element="buttonText">{this.props.text}</Text>
      </TouchableHighlight>
    );
  }

  static styles = T => [
    {
      main: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
      },
      buttonText: {
        fontSize: 17,
        fontWeight: '500',
      },
    }
  ];
}
