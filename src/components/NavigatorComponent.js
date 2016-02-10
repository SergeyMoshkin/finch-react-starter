import React, {
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;
import NavigationScene from './NavigationScene'

class NavButton extends StyledComponent {
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

class NavMenu extends StyledComponent {
  render() {
    return (
      <ScrollView>
        <Text element="messageText">{this.props.message}</Text>
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
            this.props.navigator.push({
              message: 'Swipe down to dismiss',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="Float in from bottom"
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
              sceneConfig: Navigator.SceneConfigs.FloatFromLeft
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
        paddingTop: 20,
        backgroundColor: '#EAEAEA',
      },
      messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginLeft: 15,
      },
    }
  ];
}

export default class NavigatorComponent extends StyledComponent {

  renderScene(route, nav) {
    switch (route.id) {
      case 'back':
        return <NavigationScene navigator={nav}/>;
      default:
        return (
          <NavMenu
            message={route.message}
            navigator={nav}
            onExampleExit={()=>nav.props.onExampleExit()}
          />
        );
    }
  };

  render() {
    return (
      <Navigator
        onExampleExit={() => this.props.onExampleExit()}
        initialRoute={{ message: 'First Page' }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
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
        backgroundColor: '#F5FCFF',
      },
    }
  ];

};