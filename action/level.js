import { Type } from '../type';

export const setLevel = (number) => ({
  type: Type.LEVEL_SET,
  payload: {
    number,
  }
});
