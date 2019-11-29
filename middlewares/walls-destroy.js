import { Type } from '../type';
import { ROW } from '../data';

let wallsDestroy = 0;

export default store => next => action => {

  if(action.type === Type.WALLS_DESTROY_HUMMER) {
    wallsDestroy = action.payload.cellNumber;
    next(action);
    return;
  }

  if(action.type === Type.WALLS_DESTROY_ROCKET) {
    wallsDestroy = destroyRocket(
      action.payload.cellNumber,
      action.payload.monsterCellNumber,
      ROW,
      action.payload.strength);

    next({
      ...action,
      payload: {
        ...action.payload,
        wallsDestroy,
      }
    });
    return;
  }

  if(action.type === Type.WALLS_DESTROY_DYNAMITE) {
    wallsDestroy = destroyDynamite(
      action.payload.cellNumber,
      ROW,
      action.payload.strength
    );

    next({
      ...action,
      payload: {
        ...action.payload,
        wallsDestroy,
      }
    });
    return;
  }

  if(action.type === Type.WALLS_DESTROY_TRAMP) {
    wallsDestroy = destroyTramp(
      action.payload.cellNumber,
      ROW,
      action.payload.strength
    );

    next({
      ...action,
      payload: {
        ...action.payload,
        wallsDestroy,
      }
    });
    return;
  }

  if(action.type === Type.WALLS_REACTION_DESTROY) {
    next({
      ...action,
      payload: {
        ...action.payload,
        wallsDestroy,
      }
    });
    return;
  }
  next(action);

}

const destroyRocket = (cellNumber, monsterCellNumber, row, strength) => {
  const array = [];
  let direction = '';
  strength = (strength >= 4) ? 4 : strength;

  if(cellNumber > monsterCellNumber) direction = 'right';
  if(cellNumber < monsterCellNumber) direction = 'left';
  if(cellNumber === monsterCellNumber - row) direction = 'up';
  if(cellNumber === monsterCellNumber + row) direction = 'down';

  switch (direction) {
    case 'right': {
      for(let i = 0; i < strength; i++) {
        array.push(cellNumber + i);
      }
      return array;
    }
    case 'left': {
      for(let i = 0; i < strength; i++) {
        array.push(cellNumber - i);
      }
      return array;
    }
    case 'up': {
      for(let i = 0; i < strength; i++) {
        array.push(cellNumber - i * row);
      }
      return array;
    }
    case 'down': {
      for(let i = 0; i < strength; i++) {
        array.push(cellNumber + i * row);
      }
      return array;
    }
    default: return array;
  }
};

const destroyDynamite = (monsterCellNumber, row, strength) => {
  const array = [];
  strength = (strength >= 3) ? 3 : strength;
  for(let i = 1; i <= strength; i++) {
    array.push(monsterCellNumber + i);
    array.push(monsterCellNumber - i);
    array.push(monsterCellNumber - i * row);
    array.push(monsterCellNumber + i * row);
  }
  return array;
};

const destroyTramp = (monsterCellNumber, row, empty) => {
  const array = [];
  const strength  = 1;
  switch (strength) {
    case 1: {
      if(monsterCellNumber % row === 1) {
        array.push(monsterCellNumber + 2 * row - 1);
      } else {
        array.push(monsterCellNumber - 1 * row - 1);
      }
      array.push(monsterCellNumber - 1 * row);
      array.push(monsterCellNumber - 1 * row + 1);
      array.push(monsterCellNumber - 1);
      array.push(monsterCellNumber + 1);
      array.push(monsterCellNumber + 1 * row - 1);
      array.push(monsterCellNumber + 1 * row);
      array.push(monsterCellNumber + 1 * row + 1);
    }
  }

  return array;
};
