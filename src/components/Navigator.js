import React, {
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import img_sandwich from '../assets/sandwich.png'
import img_back from '../assets/back.png'

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
    let backButton = <TouchableHighlight
      underlayColor="transparent"
      onPress={() => this.props.navigator.pop()}>
      <Image
        style={{width: 30, height: 30}}
        source={img_back}
      />
    </TouchableHighlight>;
    return (
      <ScrollView>
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
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 15,
        color: '#fff',
        paddingTop: 5
      },
    }
  ];
}

export default class NavigatorCustom extends StyledComponent {

  renderScene(route, nav) {
    switch (route.id) {
      case 'back':
        return <NavigationScene navigator={nav}/>;
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
        onPress={() => this.props.onLeftElementClick()}>
        <Image
          style={{width: 30, height: 30}}
          source={img_sandwich}
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
      sandwich: {
        width: 30,
        height: 30
      },
    }
  ];

};