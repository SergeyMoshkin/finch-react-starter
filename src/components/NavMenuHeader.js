import React, {
  StyleSheet,
  Platform,
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
    console.log(Platform);
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
        {
          (Platform.OS === "ios")
            ? <View element="topIOSTab"></View>
            : null
        }
        <View element="header">
          {this.props.leftElement ? this.props.leftElement : backButton}
          <Text element="messageText">{this.props.message}</Text>
        </View>
      </View>
    );
  }

  static styles = T => [
    {
      header: {
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
      topIOSTab: {
        flex: 1,
        height: 20,
        backgroundColor: '#B5342A'
      },
      icon: {
        width: 24,
        height: 24,
      }
    }
  ];
}
