import { Type } from '../type';

export const setExit = () => ({
  type: Type.EXIT_SET,
  payload: {
    cellNumber: null,
  },
});
