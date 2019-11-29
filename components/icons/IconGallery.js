import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

class IconGallery extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/icon-gallery.png')}
        />
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const size = (width / 100) * 20;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  image: {
    width: size * 0.8,
    height: size * 0.8,
  },
});

export default connect(null, {})(IconGallery);
