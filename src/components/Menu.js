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
    var menuList = ["Первая", "Вторая", "Третья"];
    return (
      <ScrollView onLayout={(ev)=>this.setState({backgroundWidth: ev.nativeEvent.layout.width})}>
        <Image
          style={{width: this.state.backgroundWidth, height: this.state.backgroundWidth * IMAGE_RATIO}}
          source={img_background}
          resizeMode="contain"
        />
        {
          menuList.map((el) => (
            <TouchableHighlight element="menu_item" key={el}>
              <Text element="item_text" onPress={() => this.props.onCloseControlPanel ?  this.props.onCloseControlPanel() : false}>{el}</Text>
            </TouchableHighlight>)
          )
        }

      </ScrollView>
    )
  }

  static styles = T => [
    {
      menu_item: {
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderBottomColor: '#aaa',
      },
      item_text: {
        paddingVertical: 20,
        paddingLeft: 20,
        flex: 1
      }
    }
  ];

}