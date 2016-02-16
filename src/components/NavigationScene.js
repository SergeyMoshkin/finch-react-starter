import React, {
  PropTypes,
  Component,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import img_back from '../assets/back.png'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default
class NavigationScene extends StyledComponent {

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
      <View>
        <View element="header">
          {this.props.leftElement ? this.props.leftElement : backButton}
          <Text element="messageText">{this.props.message}</Text>
        </View>
        <Text element="text" attach="onClick, onPress">Back</Text>
      </View>
    );
  }

  text_onClick(){
  }
  text_onPress(){
    this.props.navigator.pop();
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
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
        paddingTop: 5
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      }
    }
  ];
}

