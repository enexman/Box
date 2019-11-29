import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, Dimensions, View, } from 'react-native';
import { coefficientCell } from '../data';

class IconImageSkill extends React.Component {

  render() {
    const { name, big } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={[styles.image, name === 'hummer' && {display: 'flex'}, big && styles.imageBig]}
          source={require('../../assets/images/icon-hummer.png')}
        />
        <Image
          style={[styles.image, name === 'rocket' && {display: 'flex'}, big && styles.imageBig]}
          source={require('../../assets/images/icon-rocket.png')}
        />
        <Image
          style={[styles.image, name === 'dynamite' && {display: 'flex'}, big && styles.imageBig]}
          source={require('../../assets/images/icon-dynamite.png')}
        />
        <Image
          style={[styles.image, name === 'tramp' && {display: 'flex'}, big && styles.imageBig]}
          source={require('../../assets/images/icon-foot.png')}
        />
        <Image
          style={[styles.image, name === 'jump' && {display: 'flex'}, big && styles.imageBig]}
          source={require('../../assets/images/icon-jump.png')}
        />
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const size = width * coefficientCell;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: size * 0.8,
    height: size * 0.8,
    display: 'none',
  },
  imageBig: {
    width: size * 0.8 * 2,
    height: size * 0.8 * 2,
  },
});

export default connect(null, {})(IconImageSkill);
