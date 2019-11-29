import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

class ButtonAction extends React.Component {

  state = {
    touchColor: false,
  };

  onPressInOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  render() {
    const { icon, onPress, disabled } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInOut.bind(this)}
        onPressOut={this.onPressInOut.bind(this)}
        onPress={!disabled ? onPress : null}
      >
        <View style={
          [styles.button, this.state.touchColor && styles.opacity, disabled && styles.disabled]}
        >
          {icon}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',

  },
  opacity: {
    opacity: 0.3,
  },
  disabled: {
    opacity: 0.3,
  }
});

export default connect(null, {})(ButtonAction);
