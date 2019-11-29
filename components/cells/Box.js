import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Dimensions } from 'react-native';
import { coefficientCell } from '../../data';
import IconImageMonster from '../IconImageMonster';

class Box extends React.Component {

  render() {
    const { monster } = this.props;
    return (
      <View style={styles.box}>
        <IconImageMonster name={monster.key} />
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const size = width * coefficientCell;

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
  },
  image: {
    width: size * 0.9,
    height: size * 0.9,
  },
});

export default connect(monster => monster, {})(Box);
