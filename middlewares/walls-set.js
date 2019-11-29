import { Type } from '../type';
import { MAX } from '../data';
import { getRandomNumber, getRandomMinMaxNumber } from '../utils';
import { levels, getLevel } from '../data';

let randomMonster = null;
let randomExit = null;
let quantity = 0;

export default store => next => action => {
  let cellNumber = null;
  if (action.type === Type.MONSTER_SET_CELL) {
    cellNumber = getRandomNumber(MAX / 5);
    randomMonster = cellNumber;
    next({
      ...action,
      payload: {
        ...action.payload,
        cellNumber: cellNumber,
      }
    });
    return;
  }

  if (action.type === Type.EXIT_SET) {
    cellNumber = getRandomMinMaxNumber(MAX * 5 / 6, MAX);
    randomExit = cellNumber;
    next({
      ...action,
      payload: {
        ...action.payload,
        cellNumber: cellNumber,
      }
    });
    return;
  }

  if (action.type === Type.LEVEL_SET) {
    const level = getLevel(levels, action.payload.number);
    quantity = level.parameters.wallsNumber;
    next({
      ...action,
      payload: {
        ...level
      }
    });
    return;
  }

  if (action.type === Type.WALLS_SET) {
    next({
      ...action,
      payload: {
        ...action.payload,
        monsterNumber: randomMonster,
        exitNumber: randomExit,
        quantity: quantity,
      }
    });
    return;
  }
  next(action);
}
