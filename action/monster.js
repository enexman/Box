import { Type } from '../type';

export const setMonsterCell = () => ({
  type: Type.MONSTER_SET_CELL,
  payload: {
    cellNumber: null,
  },
});

export const moveMonster = (number) => ({
  type: Type.MONSTER_MOVE,
  payload: {
    cellNumber: number,
  },
});

export const chargeSkill = (skill) => ({
  type: Type.MONSTER_CHARGE_SKILL,
  payload: {
    skill,
  },
});

export const rechargeSkill = (skill) => ({
  type: Type.MONSTER_RECHARGE_SKILL,
  payload: {
    skill,
  },
});

export const activateSkill = (name) => ({
  type: Type.MONSTER_SKILL_ACTIVATE,
  payload: {
    name
  }
});

export const deActivateSkill = (name) => ({
  type: Type.MONSTER_SKILL_DEACTIVATE,
  payload: {
    name
  }
});

export const deActivateSkills = () => ({
  type: Type.MONSTER_SKILLS_DEACTIVATE,
});

export const chooseMonster = (monster) => ({
  type: Type.MONSTER_CHOOSE,
  payload: {
    monster,
  }
});

export const upExpMonster = (exp) => ({
  type: Type.MONSTER_EXP_UP,
  payload: {
    exp,
  }
});

export const initMonster = () => ({
  type: Type.MONSTER_INIT,
});

export const uploadMonster = (loadData) => ({
  type: Type.MONSTER_UPLOAD,
  payload: {
    loadData,
  }
});
