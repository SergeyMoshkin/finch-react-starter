import React, {
  Platform,
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import img_menu from '../assets/ic_menu_white_24dp_2x.png'
import NavMenu from './NavMenu'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;
import NavigationScene from './NavigationScene'

export default class NavigatorCustom extends StyledComponent {

  renderScene(route, nav) {
    switch (route.id) {
      case 'slider':
        return (
          <NavigationScene
            leftElement={route.leftElement}
            message={route.message}
            navigator={nav}
          />
      );
      default:
        return (
          <NavMenu
            leftElement={route.leftElement}
            message={route.message}
            navigator={nav}
            onExampleExit={()=>nav.props.onExampleExit()}
          />
        );
    }
  };

  render() {
    let leftIcon = (Platform.OS !== 'android')
      ? <TouchableHighlight
        element="leftButton"
        activeOpacity={0.7}
        underlayColor="#DC6A62"
        onPress={() => this.props.onLeftElementClick ? this.props.onLeftElementClick() : false}>
        <Image
          element="icon"
          source={img_menu}
        />
      </TouchableHighlight>
      : <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.5)', true)}
        onPress={() => this.props.onLeftElementClick ? this.props.onLeftElementClick() : false}>
        <View element="leftButton">
          <Image
            element="icon"
            source={img_menu}
          />
        </View>
      </TouchableNativeFeedback>;
    return (
      <Navigator
        onExampleExit={() => this.props.onExampleExit()}
        initialRoute={{ message: 'First Page', leftElement: leftIcon }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Object.assign(Navigator.SceneConfigs.HorizontalSwipeJump, {gestures: false});
        }}
      />
    )
  };

  static styles = T => [
    {
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
      },
    }
  ];

};