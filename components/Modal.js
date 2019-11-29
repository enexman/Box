import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, Text, View, Animated, Dimensions, Easing } from 'react-native';
import ButtonAction from './buttons/ButtonAction';
import IconBack from './icons/IconBack';
import {
  upExpMonster,
  openMissions,
  initMonster,
} from '../action';
import { Screens, getExperience } from '../data';
import { audioWin, audioModal,} from '../sounds';

let { width } = Dimensions.get('window');

class Modal extends React.Component {

  state = {
    xValue: new Animated.Value(width),
    expUp: 0
  };

  componentDidMount() {
    const { upExpMonster, level, openMissions, missions, } = this.props;

    this.moveAnimation();
    this.setState({
      expUp: getExperience(level.number, missions.opened)
    });
    upExpMonster(getExperience(level.number, missions.opened));
    openMissions(level.number + 1);
    audioModal();
    audioWin();
  }

  moveAnimation = () => {
    Animated.timing(this.state.xValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.cubic,
      // easing: Easing.linear,
    }).start();
  };

  render() {
    const { localization, } = this.props;

    return (
      <Animated.View style={[
          styles.container,
          { left: this.state.xValue }
        ]}
      >
        <Image
          style={styles.image}
          source={require('../../assets/images/background-modal.png')}
        />
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.text}>
              {localization.gameScreen.win.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.textExp}>
            {localization.gameScreen.winText.toUpperCase()}+{this.state.expUp}{localization.gameScreen.winText_2.toUpperCase()}
          </Text>
        </View>
        <ButtonAction
          icon={<IconBack />}
          onPress={this.onPressBack(Screens.main).bind(this)}
        />
      </Animated.View>
    );
  }
  onPressBack = (screen) => () => {
    const { navigation, initMonster, } = this.props;
    initMonster();
    navigation.navigate(screen);
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
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    // margin: 20,
  },
  textExp: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect(
  ({level, localization, missions}) => ({level, localization, missions}),
  {
    upExpMonster,
    openMissions,
    initMonster,
  }
)(Modal);
