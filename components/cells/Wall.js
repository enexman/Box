import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { coefficientCell } from '../../data';

class Wall extends React.Component {

  render() {
    return (
      <View style={styles.wall}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/wall.png')}
        />
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const size = width * coefficientCell;

const styles = StyleSheet.create({
  wall: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
  },
  image: {
    width: size * 0.95,
    height: size * 0.95,
  },
});

export default connect(null, {})(Wall);
