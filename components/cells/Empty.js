import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Dimensions, Image, } from 'react-native';
import { clearWallsReactionDestroy, } from '../../action';
import { coefficientCell } from '../../data';
import { getRandomNumber, } from '../../utils';

const { width } = Dimensions.get("window");
const size = width * coefficientCell;

class Empty extends React.Component {

  componentWillUnmount() {
    const { clearWallsReactionDestroy, } = this.props;
    clearWallsReactionDestroy();
  }

  render() {
    const { wallsReactionDestroyBoolean, bgColor, number } = this.props;

    const images = [
      <Image
        style={
          [styles.image,
          wallsReactionDestroyBoolean && styles.opacity,
          {transform: [{ rotate: '90deg', }]}]
        }
        source={require('../../../assets/images/crack.png')}
      />,
      <Image
        style={
          [styles.image,
          wallsReactionDestroyBoolean && styles.opacity,
          {transform: [{ rotate: '180deg', }]}]
        }
        source={require('../../../assets/images/crack.png')}
      />,
      <Image
        style={
          [styles.image,
          wallsReactionDestroyBoolean && styles.opacity,
          {transform: [{ rotate: '135deg', }]}]
        }
        source={require('../../../assets/images/crack.png')}
      />,
      <Image
        style={
          [styles.image,
          wallsReactionDestroyBoolean && styles.opacity,
          {transform: [{ rotate: '45deg', }]}]
        }
        source={require('../../../assets/images/crack.png')}
      />,
      <Image
        style={
          [styles.image,
          wallsReactionDestroyBoolean && styles.opacity,
          {transform: [{ rotate: '225deg', }]}]
        }
        source={require('../../../assets/images/crack.png')}
      />,
      <Image
        style={
          [styles.image,
          wallsReactionDestroyBoolean && styles.opacity,
          {transform: [{ rotate: '270deg', }]}]
        }
        source={require('../../../assets/images/crack.png')}
      />,
    ];

    return (
      <View
        style={[styles.container, {backgroundColor: bgColor}]}
      >
        {images[getRandomNumber(5)]}
        {/*number*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
  },
  image: {
    width: size * 0.8,
    height: size  * 0.8,
    opacity: 0,
  },
  opacity: {
    opacity: 0.4,
  }
});

export default connect(null, {clearWallsReactionDestroy})(Empty);
