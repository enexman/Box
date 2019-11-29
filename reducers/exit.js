import { Type } from '../type';

const initialState = {
  name: 'exit',
  cellNumber: null
};

export const exit = (state = initialState, action) => {
  switch (action.type) {

    case Type.EXIT_SET:
      const { cellNumber } = action.payload;
      return {...state, cellNumber};

    default:
      return state;
  }
};
