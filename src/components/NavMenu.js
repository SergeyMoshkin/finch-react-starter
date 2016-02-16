import React, {
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import NavButton from './NavButton'
import img_back from '../assets/back.png'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class NavMenu extends StyledComponent {
  render() {
    let backButton = <TouchableHighlight
      underlayColor="transparent"
      onPress={() => this.props.navigator.pop()}>
      <Image
        style={{width: 30, height: 30}}
        source={img_back}
      />
    </TouchableHighlight>;
    return (
      <ScrollView bounces={false}>
        <View element="header">
          {this.props.leftElement ? this.props.leftElement : backButton}
          <Text element="messageText">{this.props.message}</Text>
        </View>
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: 'Swipe right to dismiss',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            });
          }}
          text="Float in from right"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          }}
          text="Pop"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.popToTop();
          }}
          text="Pop to top"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              id: 'back',
              message: 'NavigationScene',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight
            });
          }}
          text="move forward"
        />
        <NavButton
          onPress={() => this.props.onExampleExit()}
          text="Log 'exit'"
        />
      </ScrollView>
    );
  }

  static styles = T => [
    {
      main: {
        flex: 1,
        backgroundColor: '#EAEAEA',
      },
      header: {
        backgroundColor: '#da4237',
        paddingTop: 20,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingVertical: 20
      },
      messageText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
        paddingTop: 5
      },
    }
  ];
}
