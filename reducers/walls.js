import { Type } from '../type';
import { getRandomNumber } from '../utils';
import { MAX, CELLS, ROW } from '../data';

const initialState = [];

export const walls = (state = initialState, action) => {
  switch (action.type) {

    case Type.WALLS_SET: {
      const { monsterNumber, exitNumber, quantity } = action.payload;
      return [...getRandomWalls(quantity, MAX, monsterNumber, exitNumber)];
    }

    case Type.WALLS_DESTROY_HUMMER: {
      const { cellNumber } = action.payload;
      return state.filter(it => it !== cellNumber);
    }

    case Type.WALLS_DESTROY_ROCKET: {
      const { wallsDestroy } = action.payload;
      return state.filter(it => wallsDestroy.indexOf(it) < 0);
    }

    case Type.WALLS_DESTROY_DYNAMITE: {
      const { wallsDestroy } = action.payload;
      return state.filter(it => wallsDestroy.indexOf(it) < 0);
    }

    case Type.WALLS_DESTROY_TRAMP: {
      const { wallsDestroy } = action.payload;
      return state.filter(it => wallsDestroy.indexOf(it) < 0);
    }

    case Type.WALLS_GROWTH: {
      const { growth, monsterCellNumber, exitCellNumber } = action.payload;
      const walls = [...state, monsterCellNumber, exitCellNumber];
      const empty = CELLS.filter((it) => walls.indexOf(it) < 0);
      const newWalls = setNewWalls(getRandomNumber, empty, growth);
      return [...state, ...newWalls];
    }
    default:
      return state;
  }
};

const getRandomWalls = (quantity, max, monster, exit) => {
  const walls = [];
  for (let i = 0; i < quantity; i++) {
    let wall = getRandomNumber(max);

    while (wall === monster || wall === exit || walls.indexOf(wall) >= 0) {
      wall = getRandomNumber(max);
    }
    walls.push(wall);
  }

  return walls;
};

const setNewWalls = (cb, array, growth) => {
  const arr = [];
  const copy = array.slice(0);
  for (let i = 0; i < growth; i++) {
    const idx = cb(copy.length);
    arr.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return arr
};
