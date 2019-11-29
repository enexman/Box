import { Type } from '../type';

export const deactivateMonsters = () => ({
  type: Type.MONSTERS_DEACTIVATE,
});

export const addActiveMonster = (monster) => ({
  type: Type.MONSTERS_ADD_ACTIVE,
  payload: {
    monster
  }
});

export const uploadMonsters = (loadData) => ({
  type: Type.MONSTERS_UPLOAD,
  payload: {
    loadData
  }
});

export const initMonsters = () => ({
  type: Type.MONSTERS_INIT,
});
