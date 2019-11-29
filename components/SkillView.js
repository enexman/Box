import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { openModalSkill } from '../action';
import IconImageSkill from './IconImageSkill';

class SkillView extends React.Component {
  state = {
    touchColor: false,
  };

  onPressInOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const { item, openModalSkill, } = this.props;
    openModalSkill(item.name);
  }

  render() {
    const { item, disabled, } = this.props;

    return (
      <View style={[styles.container, disabled && styles.disabled]}>
        <TouchableWithoutFeedback
          onPressIn={this.onPressInOut.bind(this)}
          onPressOut={this.onPressInOut.bind(this)}
          onPress={this.onPress.bind(this)}
        >
          <View style={[styles.image, this.state.touchColor && styles.opacity, disabled && styles.disabled]}>
            <IconImageSkill name={item.name} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  image: {
    padding: 5,
  },
  opacity: {
    opacity: 0.6,
  },
  disabled: {
    opacity: 0.6,
  }
});

export default connect(null, {openModalSkill})(SkillView);
