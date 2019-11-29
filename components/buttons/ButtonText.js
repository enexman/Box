import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Color } from '../../styles';

class ButtonText extends React.Component {

  state = {
    touchColor: false,
  };

  onPressInOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  render() {
    const { disabled, title, onPress, styles } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInOut.bind(this)}
        onPressOut={this.onPressInOut.bind(this)}
        onPress={!disabled ? onPress : null}
        disabled={disabled}
      >
        <View style={[
          styles.button,
          this.state.touchColor && styles.opacity,
          disabled && {borderColor: Color.type_05}
        ]}>
          <Text style={[
            styles.text,
            this.state.touchColor && styles.opacity,
            disabled && styles.disabled
          ]}>
            {title.toUpperCase()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, {})(ButtonText);
