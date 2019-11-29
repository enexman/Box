import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Dimensions } from 'react-native';
import Cell from './Cell';
import { MAX, ROW, CELLS } from '../data';

class Grid extends React.Component {

  render() {
    const { walls, monster, exit, wallsReaction, } = this.props;

    const jumpCells = this.getJumpCells(monster.cellNumber, ROW, 2);
    const weaponActivated = monster.skills.some(it => it.activated);
    const neighbors = this.getNeighbors(monster.cellNumber, MAX, ROW);
    const neighborsFiltered = neighbors.filter(it => walls.indexOf(it) < 0);
    const cellsList = CELLS.map(it => {
      let wallsReactionDestroyBoolean = (wallsReaction.destroy.indexOf(it) >=0);
      if(it === monster.cellNumber) return (<Cell key={it} isMonster={true} number={it} />);
      if(it === exit.cellNumber) return (<Cell key={it} isExit={true} neighbors={neighborsFiltered} number={it} />);
      if(walls.indexOf(it) >= 0) return (<Cell key={it} isWall={true} neighbors={neighbors} number={it} weaponActivated={weaponActivated} />);
      if(neighbors.indexOf(it) >= 0) return (
        <Cell key={it} neighbor={true} number={it} wallsReactionDestroyBoolean={wallsReactionDestroyBoolean} weaponActivated={weaponActivated} />
      );
      return (<Cell key={it} number={it} isEmpty={true} wallsReactionDestroyBoolean={wallsReactionDestroyBoolean} jumpCells={jumpCells} />);
    });
    return (
      <View style={[styles.container]}>
        {cellsList}
      </View>
    );
  }

  getNeighbors = (number, max, row) => {
    const neighbors = [];
    if (number - 1 > 0) {
      if (number % row === 1) {
        neighbors.push(number + 6);
      } else {
        neighbors.push(number - 1);
      }
    }
    if (number - row > 0) neighbors.push(number - row);
    if (number + 1 <= max) {
      if (number % row === 0) {
        neighbors.push(number - 6);
      } else {
        neighbors.push(number + 1);
      }
    }
    if (number + row <= max) neighbors.push(number + row);
    return neighbors
  };

  getJumpCells = (monsterCellNumber, row, strength) => {
    const array = [];
    strength = (strength >= 3) ? 3 : strength;
    for(let i = 2; i <= strength; i++) {

      if (monsterCellNumber % row === 0 || (monsterCellNumber + 1) % row === 0) {
        array.push(monsterCellNumber - 5);
      } else {
        array.push(monsterCellNumber + i);
      }

      if (monsterCellNumber % row === 1 || monsterCellNumber % row === 2) {
        array.push(monsterCellNumber + 5);
      } else {
        array.push(monsterCellNumber - i);
      }

      // array.push(monsterCellNumber + i);
      // array.push(monsterCellNumber - i);
      array.push(monsterCellNumber - i * row);
      array.push(monsterCellNumber + i * row);
    }
    return array;
  };
}

const { width } = Dimensions.get("window");
const size = width * 0.90;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: size,
  },
});

export default connect(({walls, monster, exit, wallsReaction}) => ({walls, monster, exit, wallsReaction}), {})(Grid);
