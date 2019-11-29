import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

class IconBack extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/arrow-back.png')}
        />
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const size = width * 0.9/7;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: size,
    height: size,
  },
  image: {
    width: size,
    height: size,
  },
});

export default connect(null, {})(IconBack);
