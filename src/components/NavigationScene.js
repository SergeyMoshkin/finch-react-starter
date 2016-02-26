import React, {
  PropTypes,
  Platform,
  Component,
  View,
  Text,
  Image,
} from 'react-native';
import img_back from '../assets/back.png'
import NavMenuHeader from './NavMenuHeader'
import Swiper from 'react-native-swiper'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default
class NavigationScene extends StyledComponent {

  render() {
    return (
      <View>
        {
          (Platform.OS === "ios")
            ? <Image source={{uri: 'http://i.imgur.com/rVekwfn.jpg'}}>
                <Swiper element="wrapper"
                        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
                        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                        paginationStyle={{
                        bottom: 70,
                      }}
                        loop={false}>
                  <View element="slide">
                    <Image element="image" source={{uri: 'http://i.imgur.com/u3kXqo7.png'}} />
                  </View>
                  <View element="slide">
                    <Image element="image" source={{uri: 'http://i.imgur.com/3Z4nQyb.png'}} />
                  </View>
                  <View element="slide">
                    <Image element="image" source={{uri: 'http://i.imgur.com/5Wa3Iyb.png'}} />
                  </View>
                </Swiper>
              </Image>
            : <NavMenuHeader {...this.props} />
        }

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
        paddingVertical: 20,
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
      wrapper: {
        // backgroundColor: '#f00',
      },
      slide: {
        flex: 1,
        backgroundColor: 'transparent',
      },
      image: {
        flex: 1,
      }
    }
  ];
}

