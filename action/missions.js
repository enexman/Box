import { Type } from '../type';

export const openMissions = (number) => ({
  type: Type.MISSIONS_OPEN,
  payload: {
    number,
  },
});

export const uploadMissions = (number) => ({
  type: Type.MISSIONS_UPLOAD,
  payload: {
    number,
  },
});
