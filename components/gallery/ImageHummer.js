import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, Dimensions } from 'react-native';

class ImageHummer extends React.Component {

  render() {
    return (
      <Image
        style={styles.image}
        source={require('../../../assets/images/hummer-hd.png')}
      />
    );
  }
}

const { width } = Dimensions.get("window");
const size = width * 0.8;

const styles = StyleSheet.create({
  image: {
    width: size,
    height: size,
  },
});

export default connect(null, {})(ImageHummer);
