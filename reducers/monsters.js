import { Type } from '../type';
import { Key, setElementsAsync } from '../async-storage';
import { setLevel, setLineExperience, setSkills } from '../data';

const initialState = [
  {
    key: 'first',
    name: 'Head-Hands',
    cellNumber: null,
    level: 1,
    experience: 0,
    lineExperience: 0,
    active: false,
    levels: [
      0,
      10,
      50,
      120,
      350,
      705,
      1100,
      1600,
      2241,
      3000,
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
    ],
  },
  {
    key: 'second',
    name: 'Minotaur',
    cellNumber: null,
    level: 1,
    experience: 0,
    lineExperience: 0,
    active: false,
    levels: [
      0,
      10,
      50,
      120,
      350,
      705,
      1100,
      1600,
      2241,
      3000,
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
        name: 'rocket',
        fullCharge: 14,
        charge: 14,
        strength: 3,
        activated: false,
      },
    ],
  },
  {
    key: 'third',
    name: 'Dark-Fox',
    cellNumber: null,
    level: 1,
    experience: 0,
    lineExperience: 0,
    active: false,
    levels: [
      0,
      10,
      50,
      120,
      350,
      705,
      1100,
      1600,
      2241,
      3000,
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
        name: 'dynamite',
        fullCharge: 14,
        charge: 14,
        strength: 1,
        activated: false,
      },
    ],
  },
];

export const monsters = (state = initialState, action) => {
  switch (action.type) {

    case Type.MONSTERS_INIT: {
      return state.map(it => {
        return {
          ...it,
          level: setLevel(it.experience, it.levels),
          lineExperience: setLineExperience(it.experience, it.levels, setLevel),
          skills: setSkills(it.sourceSkills, setLevel, it.experience, it.levels),
        }
      })
    }

    case Type.MONSTERS_DEACTIVATE: {
      const newState = state.map(it => {
        it.active = false;
        return it;
      });
      setElementsAsync(loadData(newState), Key.MONSTERS);
      return newState;
    }

    case Type.MONSTERS_ADD_ACTIVE: {
      const { monster } = action.payload;
      const newState = state.map(it => {
        if(monster.key === it.key) return monster;
        return it;
      });
      setElementsAsync(loadData(newState), Key.MONSTERS);
      return newState;
    }

    case Type.MONSTERS_UPLOAD: {
      const { monsters } = action.payload;
      return [...monsters]
    }
    default:
      return state;
  }
};

const loadData = (state) => {
  return state.map(it => {
    return { key: it.key, experience: it.experience }
  })
};
