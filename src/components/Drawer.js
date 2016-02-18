import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native'
import UniversalDrawer from 'react-native-drawer'
import NavigatorScene from './NavigationScene'
import Navigator from './Navigator'
import Menu from './Menu'


import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class Drawer extends StyledComponent {

  state = {
    isDrawerOpened: false,
    layout: {},
    captureGestures: false
  };

  setDrawerState(state) {
    this.setState({
      isDrawerOpened: state,
      captureGestures: state
    });
  }

  closeControlPanel() {
    this.setDrawerState(false);
    this.refs.drawer.close()
  }

  openControlPanel() {
    this.setDrawerState(true);
    this.refs.drawer.open();
  }

  render() {
    return (
      <UniversalDrawer
        ref="drawer"
        type="overlay"
        content={<Menu onCloseControlPanel={() => this.closeControlPanel()}/>}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        captureGestures={this.state.captureGestures}
        styles={{
                drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#fff', elevation: 3},
                main: {paddingLeft: 3}
              }}
        tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
              })}
        tweenDuration={200}
        onClose={() => this.setDrawerState(false)}
        onOpen={() => this.setDrawerState(true)}
        tapToClose={true}
      >
        <Navigator ref="nav" onExampleExit={() => {console.log('exit')}} onLeftElementClick={() => this.state.isDrawerOpened ? this.closeControlPanel() : this.openControlPanel()}/>
      </UniversalDrawer>
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
    }
  ];

}
