import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Color } from '../../styles';

class IconJump extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/icon-jump.png')}
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
    alignItems: 'center',
    height: size,
    width: size,
    borderWidth: 1,
    borderColor: Color.greyDark,
    borderRadius: 2,
    backgroundColor: Color.whiteTransparent,
    margin: 2,
  },
  image: {
    width: size * 0.8,
    height: size * 0.8,
  },
});

export default connect(null, {})(IconJump);
