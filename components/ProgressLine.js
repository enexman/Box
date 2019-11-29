import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

class ProgressLine extends React.Component {

  render() {
    const { lineExperience } = this.props;
    const widthLine = width * 0.5;
    return (
      <View style={[styles.lineExperience, {width: widthLine}]}>
        <View style={[styles.fillLine, {width: widthLine/ 100 * lineExperience}]}></View>
        <View style={styles.text} ><Text>{Math.floor(lineExperience)}%</Text></View>
        <View style={[styles.emptyLine, {width: widthLine - widthLine/ 100 * lineExperience}]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lineExperience: {
    height: 30,
    flexDirection: 'row',
  },
  fillLine: {
    borderWidth: 1,
    borderRightWidth: 0,
    height: 30,
    backgroundColor: '#397ac5',
    width: 0,
    borderColor: 'white',
  },
  emptyLine: {
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 30,
    width: 100,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  text: {
    position: 'absolute',
    top: 5,
    left: (width * 0.5) / 2 - 8,
  },
});

export default connect(null, {})(ProgressLine);
