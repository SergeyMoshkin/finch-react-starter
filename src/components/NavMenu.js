import React, {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  Navigator,
  ScrollView,
  StatusBar
} from 'react-native';
import NavButton from './NavButton'
import NavMenuHeader from './NavMenuHeader'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class NavMenu extends StyledComponent {
  render() {
    return (
      <View>
        {
          (Platform.OS !== "web")
            ? (<StatusBar
                backgroundColor="rgba(0,0,0,0.2)"
                barStyle="light-content"
                translucent={true}
            />)
            : null
        }
        <NavMenuHeader {...this.props} />
        <ScrollView element="scrollContainer">
          <NavButton
            onPress={() => {
              this.props.navigator.push({
                message: 'Swipe right to dismiss',
                sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump,
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
            onPress={() => this.props.onExampleExit()}
            text="Log 'exit'"
          />
        </ScrollView>
      </View>
    );
  }

  static styles = T => [
    {
      main: {
        flex: 1,
        backgroundColor: '#EAEAEA',
      },
      scrollContainer: {
        flex: 1,
      },
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
    }
  ];
}
