import { Type } from '../type';

const initialState = {
  number: 1,
  parameters: {
    wallsNumber: 25,
    growth: 1,
  },
};

export const level = (state = initialState, action) => {
  switch (action.type) {

    case Type.LEVEL_SET: {
      return {...action.payload};
    }

    default:
      return state;
  }
};
