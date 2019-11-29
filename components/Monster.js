import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableWithoutFeedback, } from 'react-native';
import { deactivateMonsters, addActiveMonster, chooseMonster, } from '../action';
import { Color } from '../styles';
import { Screens } from '../data';
import IconImageMonster from './IconImageMonster';

class Monster extends React.Component {
  state = {
    touchColor: false,
  };

  onPressInOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const { navigation, item, chooseMonster, deactivateMonsters } = this.props;
    navigation.navigate(Screens.main);
    chooseMonster(item);
    deactivateMonsters();
  }

  render() {
    const { item, disabled, active } = this.props;

    return (
    <TouchableWithoutFeedback
      onPressIn={this.onPressInOut.bind(this)}
      onPressOut={this.onPressInOut.bind(this)}
      onPress={this.onPress.bind(this)}
      disabled={disabled}
    >
      <View style={[
          styles.container,
          this.state.touchColor && styles.opacity,
          disabled && {borderColor: Color.type_05},
          active && {borderColor: Color.yellow, borderWidth: 2}
        ]}>
        <IconImageMonster name={item.key} big={true} level={item.level}  />
      </View>
    </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'white'
  },
  opacity: {
    opacity: 0.3,
  },
});

export default connect(
  null,
  {deactivateMonsters, addActiveMonster, chooseMonster}
)(Monster);
