import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;
export default class NavButton extends StyledComponent {
  render() {
    return (
      <TouchableOpacity
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text element="buttonText">{this.props.text}</Text>
      </TouchableOpacity>
    );
  }

  static styles = T => [
    {
      main: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 26,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
      },
      buttonText: {
        fontSize: 17,
      },
    }
  ];
}
