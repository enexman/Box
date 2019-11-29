import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { coefficientCell } from '../../data';

class Exit extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <View style={styles.exit}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/exit.png')}
        />
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const size = width * coefficientCell;

const styles = StyleSheet.create({
  exit: {
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

export default connect(null, {})(Exit);
