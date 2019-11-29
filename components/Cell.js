import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import {
  moveMonster,
  deActivateSkill,
  growthWalls,
  destroyWallHummer,
  chargeSkill,
  destroyWallRocket,
  destroyWallDynamite,
  destroyWallTramp,
  setWallsReactionDestroy,
} from '../action';
import Box from './cells/Box';
import Exit from './cells/Exit';
import Wall from './cells/Wall';
import Empty from './cells/Empty';
import { Color } from '../styles';
import { coefficientCell } from '../data';
import { audioBrokeStone, audioMove } from '../sounds';

class Cell extends React.Component {
  state = {
    touchColor: false,
  };

  onPressInOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const {
      neighbor,
      neighbors,
      number,
      moveMonster,
      isExit,
      growthWalls,
      deActivateSkill,
      isWall,
      destroyWallHummer,
      monster,
      chargeSkill,
      destroyWallRocket,
      destroyWallDynamite,
      destroyWallTramp,
      isMonster,
      setWallsReactionDestroy,
      jumpCells,
    } = this.props;

    // hummer
    const hummerSkill = monster.skills.filter(it => it.name === 'hummer')[0];
    if(hummerSkill.activated) {
      if(isWall && neighbors.indexOf(number) >= 0 || neighbor) {
        destroyWallHummer(number);
        setWallsReactionDestroy();
        deActivateSkill(hummerSkill.name);
        audioBrokeStone();
        return;
      }
    }

    // rocket
    const isRocket = monster.skills.some(it => it.name === 'rocket');
    const rocketSkill = (isRocket)
      ? monster.skills.filter(it => it.name === 'rocket')[0]
      : {activated: false,};
    if(rocketSkill.activated) {
      if(isWall && neighbors.indexOf(number) >= 0 || neighbor) {
        destroyWallRocket(number, monster.cellNumber, rocketSkill.strength);
        setWallsReactionDestroy();
        deActivateSkill(rocketSkill.name);
        audioBrokeStone();
        return;
      }
    }

    // dynamite
    const isDynamite = monster.skills.some(it => it.name === 'dynamite');
    const dynamiteSkill = (isDynamite)
      ? monster.skills.filter(it => it.name === 'dynamite')[0]
      : {activated: false,};
    if(dynamiteSkill.activated) {
      if(isMonster || neighbor || neighbors && neighbors.indexOf(number) >= 0) {
        destroyWallDynamite(monster.cellNumber, dynamiteSkill.strength);
        setWallsReactionDestroy();
        deActivateSkill(dynamiteSkill.name);
        audioBrokeStone();
        return;
      }
    }

    // tramp
    const isTramp = monster.skills.some(it => it.name === 'tramp');
    const trampSkill = (isTramp)
      ? monster.skills.filter(it => it.name === 'tramp')[0]
      : {activated: false,};
    if(trampSkill.activated) {
      if(isMonster || neighbor || neighbors && neighbors.indexOf(number) >= 0) {
        destroyWallTramp(monster.cellNumber, trampSkill.strength);
        setWallsReactionDestroy();
        deActivateSkill(trampSkill.name);
        audioBrokeStone();
        return;
      }
    }

    // jump
    const isJump = monster.skills.some(it => it.name === 'jump');
    const jumpSkill = (isJump)
      ? monster.skills.filter(it => it.name === 'jump')[0]
      : {activated: false,};
    if(jumpSkill.activated && !!jumpCells) {
      if(!isWall && jumpCells.indexOf(number) >= 0) {
        moveMonster(number);
        deActivateSkill(jumpSkill.name);
        audioBrokeStone();
        return;
      }
    }

    if(neighbor) {
      moveMonster(number);
      growthWalls();
      // hummer
      deActivateSkill(hummerSkill.name);
      if(hummerSkill.charge < hummerSkill.fullCharge) {
        chargeSkill(hummerSkill.name);
      }

      // rocket
      if(isRocket) {
        deActivateSkill(rocketSkill.name);
        if(rocketSkill.charge < rocketSkill.fullCharge) {
          chargeSkill(rocketSkill.name);
        }
      }

      // dynamite
      if(isDynamite) {
        deActivateSkill(dynamiteSkill.name);
        if(dynamiteSkill.charge < dynamiteSkill.fullCharge) {
          chargeSkill(dynamiteSkill.name);
        }
      }

      // tramp
      if(isTramp) {
        deActivateSkill(trampSkill.name);
        if(trampSkill.charge < trampSkill.fullCharge) {
          chargeSkill(trampSkill.name);
        }
      }

      // jump
      if(isJump) {
        deActivateSkill(jumpSkill.name);
        if(jumpSkill.charge < jumpSkill.fullCharge) {
          chargeSkill(jumpSkill.name);
        }
      }
    }
    if(isExit && neighbors.indexOf(number) >= 0) {
      moveMonster(number);
    }
    audioMove();
  }

  render() {
    const { isWall, isMonster, isExit, isEmpty, wallsReactionDestroyBoolean, neighbor, number, weaponActivated, neighbors, jumpCells, monster } = this.props;

    const isNeighbor = (neighbors) ? neighbors.indexOf(number) >= 0 :[];

    const isJump = monster.skills.some(it => it.name === 'jump' && it.activated);

    const jumpCell = (jumpCells && isJump) ? jumpCells.indexOf(number) >= 0 : false;

    const colorWeaponAttack = 'rgba(255, 0, 0, 0.2)';
    const colorNeighbor = 'rgba(0, 255, 0, 0.2)';
    const colorExit = 'rgba(255, 255, 0, 0.5)';
    const colorEmpty = jumpCell ? colorNeighbor : 'transparent';

    const monsterCell = isMonster ? <Box /> : null;
    const wallCell = isWall ? <Wall /> : null;
    const exitCell = isExit ? <Exit /> : null;
    const emptyCell = isEmpty || neighbor
      ? <Empty wallsReactionDestroyBoolean={wallsReactionDestroyBoolean} number={number} bgColor={colorEmpty} />
      : null;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInOut.bind(this)}
        onPressOut={this.onPressInOut.bind(this)}
        onPress={this.onPress.bind(this)}>
        <View
          style={
            [
              styles.button,
              neighbor && {backgroundColor: colorNeighbor},
              isNeighbor && isExit && {backgroundColor: colorExit},
              weaponActivated && !isJump && isNeighbor && isWall && {backgroundColor: colorWeaponAttack},
              weaponActivated && !isJump && neighbor && {backgroundColor: colorWeaponAttack},
            ]
          }
        >
          {monsterCell}
          {wallCell}
          {exitCell}
          {emptyCell}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const { width } = Dimensions.get("window");
const size = width * coefficientCell;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.greyDark,
    borderRadius: 2,
    width: size,
    height: size,
    margin: 0.5,
  },
});

export default connect(
  ({monster}) => ({monster}),
  {
    moveMonster,
    deActivateSkill,
    growthWalls,
    destroyWallHummer,
    chargeSkill,
    destroyWallRocket,
    destroyWallDynamite,
    destroyWallTramp,
    setWallsReactionDestroy,
  })
(Cell);
