import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Color } from '../styles';
import { Screens } from '../data';

class LevelCircle extends React.Component {

  render() {
    const { level, size, navigation, } = this.props;
    return (
      <TouchableWithoutFeedback
        onLongPress={() => navigation.navigate(Screens.secret)}
      >
        <View style={[styles.level, {width: size, height: size}]}>
          <Text style={[styles.text, {fontSize: size * 0.6}]}>{level}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  level: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Color.liteBlue,
    borderColor: 'white',
    zIndex: 1,
    borderWidth: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
});

export default connect(null, {})(LevelCircle);
