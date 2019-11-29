import { Type } from '../type';

export const openModalSkill = (skill) => ({
  type: Type.MODAL_OPEN,
  payload: {
    skill
  }
});

export const closeModalSkill = () => ({
  type: Type.MODAL_CLOSE,
});
