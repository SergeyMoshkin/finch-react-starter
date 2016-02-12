import React, {
  Component,
  Dimensions,
  View,
  Text,
  Image,
  Navigator,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import NavigatorScene from './NavigationScene'
import NavigatorComponent from './NavigatorComponent'
import Drawer from 'react-native-drawer'
import Menu from './Menu'
import img_sandwich from '../assets/sandwich.png'
import img_background from '../assets/football.jpg'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default
class App extends StyledComponent {

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
    console.log(this.state.layout.width);
    return (
      <View onLayout={(ev)=>this.setState({layout:ev.nativeEvent.layout})}>
        {
          (this.state.layout) ?
            (this.state.layout.width < 1024) ?
              <Drawer
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
              </Drawer>
              :
              <View style={{position: "absolute",top: 0,bottom: 0,left: 0,right: 0,flexDirection: "row"}}>
                <View element="controlPanel"><Menu onCloseControlPanel={() => this.closeControlPanel()}/></View>
                <View element="navigator">
                  <NavigatorComponent ref="nav" onExampleExit={() => {console.log('exit_web')}}/>
                </View>
              </View>
            :
            null
        }
      </View>
    );
  }

  static styles = T => [
    {
      main: {
        flex: 1,
        backgroundColor: 'black'
      },
      drawerControl: {
        marginLeft: 20,
        marginVertical: 20,
        width: 30,
        height: 30
      },
      sandwich: {
        width: 30,
        height: 30
      },
      controlPanel: {
        flex: 1
      },
      navigator: {
        position: 'relative',
        flex: 5,
      },
    }
  ];

}
