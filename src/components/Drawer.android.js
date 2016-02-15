import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  DrawerLayoutAndroid
} from 'react-native'
import UIManager from 'UIManager'
import NavigatorScene from './NavigationScene'
import NavigatorComponent from './NavigatorComponent'
import Menu from './Menu'
import img_sandwich from '../assets/sandwich.png'


import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class Drawer extends StyledComponent {

  state = {
    isDrawerOpened: false,
  };

  setDrawerState(state) {
    this.setState({
      isDrawerOpened: state,
    });
  }

  closeControlPanel() {
    this.setDrawerState(false);
    this.refs.drawer.closeDrawer();
  }

  openControlPanel() {
    this.setDrawerState(true);
    this.refs.drawer.openDrawer();
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref="drawer"
        onDrawerClose={()=>this.setDrawerState(false)}
        onDrawerOpen={()=>this.setDrawerState(true)}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu onCloseControlPanel={() => this.closeControlPanel()}/>}>
        <View style={{backgroundColor: "#da4237"}}>
          <TouchableHighlight
            element="drawerControl"
            underlayColor="transparent"
            onPress={() => this.state.isDrawerOpened ? this.closeControlPanel() : this.openControlPanel()}>
            <Image
              element="sandwich"
              source={img_sandwich}
            />
          </TouchableHighlight>
        </View>
        <NavigatorComponent ref="nav" onExampleExit={() => {console.log('exit')}}/>
      </DrawerLayoutAndroid>
    )
  }

  static styles = T => [
    {
      drawerControl: {
        marginLeft: 20,
        marginVertical: 20,
        width: 30,
        height: 30
      },
      sandwich: {
        width: 30,
        height: 30
      }
    }
  ];

}

