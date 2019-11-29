import { Type } from '../type';
import { getRandomNumber } from '../utils';
import { MAX, CELLS, ROW } from '../data';

const initialState = {
  grow: [],
  destroy: [],
};

export const wallsReaction = (state = initialState, action) => {
  switch (action.type) {

    case Type.WALLS_REACTION_DESTROY: {
      const { wallsDestroy } = action.payload;
      const array = [].concat(wallsDestroy);
      return {...state, destroy: [...array]};
    }

    case Type.WALLS_REACTION_CLEAL: {
      return {...state, grow: [], destroy: [],};
    }

    default:
      return state;
  }
};
