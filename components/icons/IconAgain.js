import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

class IconAgain extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/icon-again.png')}
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
    width: size * 0.8,
    height: size * 0.8,
  },
});

export default connect(null, {})(IconAgain);
