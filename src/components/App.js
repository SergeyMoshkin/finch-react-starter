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
import Drawer from './Drawer'
import NavigatorScene from './NavigationScene'
import NavigatorComponent from './NavigatorComponent'
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
    layout: {},
  };

  render() {
    console.log(this.state.layout.width);
    return (
      <View onLayout={(ev)=>this.setState({layout:ev.nativeEvent.layout})}>
        {
          (this.state.layout.width) ?
            (this.state.layout.width < 1024) ?
              <Drawer />
              :
              <View style={{position: "absolute",top: 0,bottom: 0,left: 0,right: 0,flexDirection: "row"}}>
                <View element="controlPanel"><Menu/></View>
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
      controlPanel: {
        backgroundColor: '#fff',
        flex: 1
      },
      navigator: {
        position: 'relative',
        flex: 5,
      },
    }
  ];

}
