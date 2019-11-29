import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import {
  activateSkill,
  rechargeSkill,
  setLevel,
  setMonsterCell,
  setExit,
  setWalls,
  deActivateSkills,
} from '../../action';
import Grid from '../Grid';
import Modal from './../Modal';
import ModalStartGame from './../ModalStartGame';
import ButtonAction from './../buttons/ButtonAction';
import IconHummer from './../icons/IconHummer';
import IconRocket from './../icons/IconRocket';
import IconFoot from './../icons/IconFoot';
import IconDynamite from './../icons/IconDynamite';
import IconAgain from './../icons/IconAgain';
import IconJump from './../icons/IconJump';
import { Color } from '../../styles';
import { audioWeapon, audioClick } from '../../sounds';

class CampaignGameScreen extends React.Component {

  render() {
    const { monster, exit, navigation, level } = this.props;

    const modalEnd = (monster.cellNumber === exit.cellNumber)
      ? <Modal navigation={navigation} />
      : null;

    const skills = monster.skills.map(it => {
      if (it.name === 'hummer') {
        return (
          <ButtonAction
            key={it.name}
            icon={<IconHummer />}
            onPress={() => {this.onPressWeapon('hummer')}}
            disabled={it.charge < it.fullCharge}
          />
        )
      }
      if (it.name === 'rocket') {
        return (
          <ButtonAction
            key={it.name}
            icon={<IconRocket />}
            onPress={() => {this.onPressWeapon('rocket')}}
            disabled={it.charge < it.fullCharge}
          />
        )
      }
      if (it.name === 'tramp') {
        return (
          <ButtonAction
            key={it.name}
            icon={<IconFoot />}
            onPress={() => {this.onPressWeapon('tramp')}}
            disabled={it.charge < it.fullCharge}
          />
        )
      }
      if (it.name === 'dynamite') {
        return (
          <ButtonAction
            key={it.name}
            icon={<IconDynamite />}
            onPress={() => {this.onPressWeapon('dynamite')}}
            disabled={it.charge < it.fullCharge}
          />
        )
      }
      if (it.name === 'jump') {
        return (
          <ButtonAction
            key={it.name}
            icon={<IconJump />}
            onPress={() => {this.onPressWeapon('jump')}}
            disabled={it.charge < it.fullCharge}
          />
        )
      }
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/background.png')}
        />
        <ModalStartGame />
        <Grid navigation={this.props.navigation} />
        <View style={styles.buttons}>
          <View style={{marginRight: 'auto', alignItems: 'flex-start'}}>
            <ButtonAction
              icon={<IconAgain />}
              onPress={this.onPressButtonAgain(level.number)}
            />
          </View>
          {skills}
        </View>
        {modalEnd}
      </View>
    );
  }
  onPressWeapon = (name) => {
    audioWeapon();
    this.props.rechargeSkill(name);
    this.props.activateSkill(name);
  };

  onPressButtonAgain = (level) => () => {
    const {
      setLevel, setMonsterCell, setExit, setWalls, deActivateSkills,
    } = this.props;
    setLevel(level);
    setMonsterCell();
    setExit();
    setWalls();
    deActivateSkills();
    audioClick();
  };
}

const { width, height } = Dimensions.get("window");
const size = width * 0.90;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.backgroundGame,
  },
  buttons: {
    width: size,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 4,
  },
  image: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
    opacity: 0.4,
  },
});

export default connect(
  ({monster, exit, modal, experience, level}) => ({monster, exit, modal, experience, level}),
  {
    activateSkill,
    rechargeSkill,
    setLevel,
    setMonsterCell,
    setExit,
    setWalls,
    deActivateSkills,
  }
)(CampaignGameScreen);
