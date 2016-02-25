import React, {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import img_back from '../assets/ic_arrow_back_white_24dp_2x.png'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class NavMenuHeader extends StyledComponent {
  render() {
    let backButton = (Platform.OS !== 'android')
      ? <TouchableHighlight
          element="leftButton"
          activeOpacity={0.7}
          underlayColor="#DC6A62"
          onPress={() => this.props.navigator.pop()}>
          <Image
            element="icon"
            source={img_back}
          />
      </TouchableHighlight>
      : <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.5)', true)}
          onPress={() => this.props.navigator.pop()}>
          <View element="leftButton">
            <Image
              element="icon"
              source={img_back}
            />
          </View>
      </TouchableNativeFeedback>;

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
        paddingHorizontal: 15,
        paddingLeft: 0,
        paddingTop: (Platform.OS === "ios") ? 20 : 24,
        alignItems: 'center',
      },
      leftButton: {
        height: 56,
        width: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius: 56,
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
