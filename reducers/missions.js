import { Type } from '../type';
import { setElementsAsync, Key, } from '../async-storage';
import { MAX_LEVELS, } from '../data';

const initialState = {
  opened: 1,
};

export const missions = (state = initialState, action) => {
  switch (action.type) {

    case Type.MISSIONS_OPEN: {
      const { number } = action.payload;
      const opened = (state.opened < number && number <= MAX_LEVELS) ? number : state.opened;
      setElementsAsync(opened, Key.MISSIONS);
      return {...state, opened,};
    }
    case Type.MISSIONS_UPLOAD: {
      const { number } = action.payload;
      const opened = (state.opened < number && number <= MAX_LEVELS) ? number : state.opened;
      return {...state, opened,};
    }
    default:
      return state;
  }
};

