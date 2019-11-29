import { Type } from '../type';
import { Key, setElementsAsync } from '../async-storage';
import { setLevel, setLineExperience, setSkills } from '../data';

let initialState = {
  key: 'first',
  name: 'Head-Hands',
  cellNumber: null,
  level: 1,
  experience: 0,
  lineExperience: 0,
  active: true,
  levels: [
    0,
    10,   // 3
    50,   // 5
    120,  // 12
    350,  // 21
    705,  // 30
    1100, // 38
    1600, // 46
    2241, // 54
    3000, // 63
  ],
  skills: [
    {
      name: 'hummer',
      fullCharge: 9,
      charge: 9,
      strength: 1,
      activated: false,
    },
  ],
  sourceSkills: [
    {
      name: 'hummer',
      fullCharge: 9,
      charge: 9,
      strength: 1,
      activated: false,
    },
    {
      name: 'jump',
      fullCharge: 9,
      charge: 9,
      strength: 1,
      activated: false,
    },
    {
      name: 'tramp',
      fullCharge: 14,
      charge: 14,
      strength: 1,
      activated: false,
    },
    // {
    //   name: 'rocket',
    //   fullCharge: 14,
    //   charge: 14,
    //   strength: 2,
    //   activated: false,
    // },
    // {
    //   name: 'dynamite',
    //   fullCharge: 14,
    //   charge: 14,
    //   strength: 1,
    //   activated: false,
    // },
  ],
};

export const monster = (state = initialState, action) => {
  switch (action.type) {

    case Type.MONSTER_INIT: {
      return {
        ...state,
        level: setLevel(state.experience, state.levels),
        lineExperience: setLineExperience(state.experience, state.levels, setLevel),
        skills: setSkills(state.sourceSkills, setLevel, state.experience, state.levels),
      };
    }

    case Type.MONSTER_SET_CELL: {
      return {
        ...state,
        cellNumber: action.payload.cellNumber,
      };
    }

    case Type.MONSTER_MOVE: {
      return {...state, cellNumber: action.payload.cellNumber};
    }

    case Type.MONSTER_RECHARGE_SKILL: {
      const { skill } = action.payload;
      return {...state, skills: state.skills.map(it => {
        if(it.name === skill) {
          it.charge = 0;
        }
        return it;
      })};
    }

    case Type.MONSTER_CHARGE_SKILL: {
      const { skill } = action.payload;
      return {...state, skills: state.skills.map(it => {
        if(it.name === skill) {
          it.charge += 1;
        }
        return it;
      })};
    }

    case Type.MONSTER_SKILL_ACTIVATE: {
      const { name } = action.payload;
      return {...state, skills: state.skills.map(it => {
        if(it.name === name) {
          it.activated = true;
          return it
        }
        it.activated = false;
        return it;
      })}
    }

    case Type.MONSTER_SKILL_DEACTIVATE: {
      const { name } = action.payload;
      return {...state, skills: state.skills.map(it => {
        if(it.name === name) {
          it.activated = false;
        }
        return it;
      })}
    }

    case Type.MONSTER_SKILLS_DEACTIVATE: {
      return {...state, skills: state.skills.map(it => {
        it.charge = it.fullCharge;
        it.activated = false;
        return it;
      })}
    }

    case Type.MONSTER_CHOOSE: {
      const { monster } = action.payload;
      return {...monster, active: true};
    }

    case Type.MONSTER_EXP_UP: {
      const { exp } = action.payload;
      const newExp = state.experience + exp;
      setElementsAsync({key: state.key, experience: newExp}, Key.MONSTER);
      return {
        ...state,
        experience: newExp,
        level: setLevel(newExp, state.levels),
        lineExperience: setLineExperience(newExp, state.levels, setLevel),
        skills: setSkills(state.sourceSkills, setLevel, state.experience, state.levels),
      };
    }

    case Type.MONSTER_UPLOAD: {
      const { monster } = action.payload;
      return {...monster};
    }

    default:
      return state;
  }
};
