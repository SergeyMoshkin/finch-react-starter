import React, {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import img_ava from '../assets/ava.png'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;
export default class NavButton extends StyledComponent {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.onPress}>
        <Image
          element="buttonIcon"
          source={img_ava}
        />
        <Text element="buttonText">{this.props.text}</Text>
      </TouchableOpacity>
    );
  }

  static styles = T => [
    {
      main: {
        backgroundColor: 'white',
        padding: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      buttonText: {
        flex: 1,
        fontSize: 17,
        marginLeft: 16,
      },
      buttonIcon: {
        borderRadius: 20,
        width: 40,
        height: 40
      }
    }
  ];
}
