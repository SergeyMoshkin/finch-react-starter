import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import img_background from '../assets/football.jpg'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;


const IMAGE_RATIO = 1600 / 2560;

export default class Menu extends StyledComponent {

  state={
    backgroundWidth: null
  };

  render() {

    return (
      <ScrollView onLayout={(ev)=>this.setState({backgroundWidth: ev.nativeEvent.layout.width})}>
        <Image
          style={{width: this.state.backgroundWidth, height: this.state.backgroundWidth * IMAGE_RATIO}}
          source={img_background}
          resizeMode="contain"
        />
        <TouchableHighlight element="menu_item">
          <Text element="item_text" onPress={() => this.props.onCloseControlPanel()}>Первая</Text>
        </TouchableHighlight>
        <TouchableHighlight element="menu_item">
          <Text element="item_text" onPress={() => this.props.onCloseControlPanel()}>Вторая</Text>
        </TouchableHighlight>
        <TouchableHighlight element="menu_item">
          <Text element="item_text" onPress={() => this.props.onCloseControlPanel()}>Третья</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }

  static styles = T => [
    {
      menu_item: {
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderBottomColor: '#aaa',
        paddingVertical: 20,
        paddingLeft: 20,
      },
      item_text: {
        flex: 1
      }
    }
  ];

}