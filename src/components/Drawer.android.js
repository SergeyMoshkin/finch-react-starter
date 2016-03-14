import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  DrawerLayoutAndroid
} from 'react-native'
import UIManager from 'UIManager'
import NavigatorScene from './NavigationScene'
import Navigator from './Navigator'
import Menu from './Menu'
import linkTransition from '../lib/linkTransition'


import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class Drawer extends StyledComponent {

  state = {
    isDrawerOpened: false,
  };

  componentDidMount() {
    console.log(this.refs.nav.state.navigator);
  }

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
        renderNavigationView={() => <Menu onCloseControlPanel={() => this.closeControlPanel()} onLinkClick={() => linkTransition(this.refs.nav)}/>}>
        <Navigator ref="nav" onExampleExit={() => {console.log('exit')}} onLeftElementClick={() => this.state.isDrawerOpened ? this.closeControlPanel() : this.openControlPanel()}/>
      </DrawerLayoutAndroid>
    )
  }

  static styles = T => [
    {
    }
  ];

}

