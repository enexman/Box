import { Type } from '../type';

const initialState = {
  skill: '',
  isOpen: false,
};

export const modal = (state = initialState, action) => {
  switch (action.type) {

    case Type.MODAL_OPEN: {
      const { skill } = action.payload;
      return {...state, skill, isOpen: true }
    }

    case Type.MODAL_CLOSE: {
      return {...state, skill: '', isOpen: false }
    }

    default:
      return state;
  }
};
