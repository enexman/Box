import { Type } from '../type';

export const setLocalization = (language) => ({
  type: Type.LOCALIZATION,
  payload: language
});
