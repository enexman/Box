import { Type } from '../type';
import { ru, en } from '../data';
import { Key, setElementsAsync } from '../async-storage';

const initialState = en;

export const localization = (state = initialState, action) => {
  switch (action.type) {
    case Type.LOCALIZATION: {
      setElementsAsync(action.payload, Key.LANGUAGE);
      if (action.payload === 'EN') return {...state, ...ru};
      if (action.payload === 'RU') return {...state, ...en};
      return state;
    }
    default:
      return state;
  }
};
