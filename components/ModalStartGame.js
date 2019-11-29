import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, Text, View, Animated, Dimensions, Easing, TouchableWithoutFeedback } from 'react-native';
import { audioModal } from '../sounds';

let { width } = Dimensions.get('window');

class ModalStartGame extends React.Component {

  state = {
    xValue: new Animated.Value(0),
  };

  onPress() {
    this.moveAnimation();
  }

  moveAnimation = () => {
    audioModal();
    Animated.timing(this.state.xValue, {
      toValue: width,
      duration: 200,
      easing: Easing.cubic,
    }).start();
  };

  render() {
    const { localization, level } = this.props;

    return (
      <Animated.View style={[
          styles.container,
          { left: this.state.xValue }
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {this.moveAnimation();}}
        >
          <View style={styles.wrapper} >
            <Image
              style={styles.image}
              source={require('../../assets/images/background-modal.png')}
            />
            <View>
              <Text style={styles.number}>{level.number}</Text>
            </View>
            <View>
              <Text style={styles.text}>{localization.gameScreen.startText.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(74, 90, 111, 0.6)',
    zIndex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  number: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'white',
    // marginBottom: 10,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.4,
  }
});

export default connect(
  ({level, localization,}) => ({level, localization,}),
  {}
)(ModalStartGame);
