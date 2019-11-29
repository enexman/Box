import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, Dimensions, View, } from 'react-native';
import { coefficientCell } from '../data';
import LevelCircle from './LevelCircle';

const { width } = Dimensions.get("window");
const size = width * coefficientCell;

class IconImageMonster extends React.Component {

  render() {
    const { name, big, extraBig, level, navigation, } = this.props;

    let levelSize = size * 0.4;

    if(big) {
      levelSize = size * 0.5
    }
    if(extraBig) {
      levelSize = size * 0.9
    }

    const levelCircle = (level) 
      ? <LevelCircle size={levelSize} level={level} navigation={navigation} /> 
      : null;
    return (
      <View style={styles.container}>
        <View style={styles.levelCircle}>
          {levelCircle}
        </View>
        <Image
          style={[styles.image, name === 'first' && {display: 'flex'}, big && styles.imageBig, extraBig && styles.imageExtraBig]}
          source={require('../../assets/images/monster.png')}
        />
        <Image
          style={[styles.image, name === 'second' && {display: 'flex'}, big && styles.imageBig, extraBig && styles.imageExtraBig]}
          source={require('../../assets/images/monster-2.png')}
        />
        <Image
          style={[styles.image, name === 'third' && {display: 'flex'}, big && styles.imageBig, extraBig && styles.imageExtraBig]}
          source={require('../../assets/images/monster-3.png')}
        />
      </View>
    );
  }
}


const normalSize =  size * 0.9;
const bigSize =  size * 0.9 * 2;
const extraBig =  size * 0.9 * 4;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: normalSize,
    height: normalSize,
    display: 'none',
  },
  imageBig: {
    width: bigSize,
    height: bigSize,
  },
  imageExtraBig: {
    width: extraBig,
    height: extraBig,
  },
  levelCircle: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  }
});

export default connect(null, {})(IconImageMonster);
