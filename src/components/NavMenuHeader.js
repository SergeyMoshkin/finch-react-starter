import React, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import img_back from '../assets/ic_arrow_back_white_24dp_2x.png'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class NavMenuHeader extends StyledComponent {
  render() {
    let backButton = <TouchableHighlight
      underlayColor="transparent"
      onPress={() => this.props.navigator.pop()}>
      <Image
        element="icon"
        source={img_back}
      />
    </TouchableHighlight>;

    return (
      <View>
        {this.props.leftElement ? this.props.leftElement : backButton}
        <Text element="messageText">{this.props.message}</Text>
      </View>
    );
  }

  static styles = T => [
    {
      main: {
        backgroundColor: '#da4237',
        flexDirection: 'row',
        padding: 15,
      },
      messageText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
        marginLeft: 16,
        paddingTop: 2,
      },
      icon: {
        width: 24,
        height: 24,
      }
    }
  ];
}
