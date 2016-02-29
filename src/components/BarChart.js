import React, {
  StyleSheet,
  Platform,
  View,
  Text,
  Component
} from 'react-native';

if(Platform.OS == 'ios'){
  var reactNativCchart = require('react-native-chart');
  var RNChart = reactNativCchart.default;
}

import NavMenuHeader from './NavMenuHeader'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chart: {
    position: 'absolute',
    top: 16,
    left: 4,
    bottom: 4,
    right: 16,
  }
});

const chartData = [
  {
    name: 'BarChart',
    type: 'bar',
    color:'purple',
    widthPercent: 0.6,
    data: [30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30],
  },
  {
    name: 'LineChart',
    color: 'gray',
    lineWidth: 2,
    highlightIndices: [1, 2],
    highlightColor: 'orange',
    showDataPoint: true,
    data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
  }
];

const xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];

export default class BarChart extends Component {

  state = {
    bar: {
      name: 'BarChart',
      type: 'bar',
      color:'purple',
      widthPercent: 0.6,
      data: [30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30],
    },
    line: {
      name: 'LineChart',
      color: 'gray',
      lineWidth: 2,
      highlightIndices: [1, 2],
      highlightColor: 'orange',
      dataPointRadius: 5,
      dataPointFillColor: 'blue',
      showDataPoint: true,
      data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
    }
  };

  transform() {
    this.setState((state) => {
      state.line.data = state.line.data.map((el) => Math.random()*100)
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavMenuHeader {...this.props} />
        {
          (Platform.OS == "ios") &&
          <View style={styles.container}>
            <RNChart style={styles.chart}
            chartData={[this.state.bar, this.state.line]}
            verticalGridStep={5}
            xLabels={xLabels}
            />
            <View onStartShouldSetResponder={(evt)=>true} onResponderGrant={() => console.log(123)} style={{position: 'absolute', bottom: 10, right: 10}}><Text style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', fontSize: 20, padding: 20}} onPress={() => this.transform()}>Click</Text></View>
          </View>
        }
      </View>
    );
  }
}
