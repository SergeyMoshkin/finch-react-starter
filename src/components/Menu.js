import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import img_background from '../assets/football.jpg'
import img_forward from '../assets/ic_forward_black_24dp_2x.png'

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
            <TouchableOpacity element="menu_item" key={i} onPress={() => this.props.onCloseControlPanel ?  this.props.onCloseControlPanel() : false}>
              <Image
                element="buttonIcon"
                source={img_forward}
              />
              <Text element="item_text">{el}</Text>
            </TouchableOpacity>)
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
        paddingHorizontal: 15,
        paddingVertical: 14,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      item_text: {
        flex: 1,
        fontWeight: 'bold'
      },
      buttonIcon: {
        borderRadius: 20,
        width: 40,
        height: 40
      }
    }
  ];

}