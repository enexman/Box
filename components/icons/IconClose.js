import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

class IconClose extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/icon-close.png')}
        />
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const size = width / 100 * 10;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
  },
  image: {
    width: size * 0.5,
    height: size * 0.5,
  },
});

export default connect(null, {})(IconClose);
