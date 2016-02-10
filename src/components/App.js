import React, {
  Component,
  View,
  Text,
  Navigator,
} from 'react-native';
import NavigatorScene from './NavigationScene'
import NavigatorComponent from './NavigatorComponent'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default
class App extends StyledComponent {
  render() {
    return (
      <NavigatorComponent onExampleExit={() => {console.log('exit')}}/>
    );
  }
}
