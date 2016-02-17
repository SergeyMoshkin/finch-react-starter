import React, {
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import img_menu from '../assets/ic_menu_white_24dp_2x.png'
import NavMenu from './NavMenu'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;
import NavigationScene from './NavigationScene'

export default class NavigatorCustom extends StyledComponent {

  renderScene(route, nav) {
    switch (route.id) {
      case 'back':
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
    let leftIcon = <TouchableHighlight
        underlayColor="transparent"
        onPress={() => this.props.onLeftElementClick ? this.props.onLeftElementClick() : false}>
        <Image
          element="icon"
          source={img_menu}
        />
      </TouchableHighlight>;
    return (
      <Navigator
        onExampleExit={() => this.props.onExampleExit()}
        initialRoute={{ message: 'First Page', leftElement: leftIcon }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
      />
    );
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