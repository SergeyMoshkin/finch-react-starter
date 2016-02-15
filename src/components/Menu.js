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
      <ScrollView bounces={false} onLayout={(ev)=>this.setState({backgroundWidth: ev.nativeEvent.layout.width})}>
        <Image
          style={{width: this.state.backgroundWidth, height: this.state.backgroundWidth * IMAGE_RATIO}}
          source={img_background}
          resizeMode="contain"
        />
        {
          menuList.map((el, i) => (
            <TouchableHighlight underlayColor="#ccc" element="menu_item" key={i} onPress={() => this.props.onCloseControlPanel ?  this.props.onCloseControlPanel() : false}>
              <Text element="item_text">{el}</Text>
            </TouchableHighlight>)
          )
        }

      </ScrollView>
    )
  }

  static styles = T => [
    {
      main: {
        backgroundColor: '#fff',
        elevation: 3
      },
      menu_item: {
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderBottomColor: '#aaa',
        paddingLeft: 20,
      },
      item_text: {
        marginVertical: 20,
        flex: 1
      }
    }
  ];

}