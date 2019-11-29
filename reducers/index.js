import { combineReducers } from 'redux';
import { level } from './level';
import { modal } from './modal';
import { localization } from './localization';
import { walls } from './walls';
import { monster } from './monster';
import { monsters } from './monsters';
import { exit } from './exit';
import { missions } from './missions';
import { wallsReaction } from './walls-reaction';

export const reducers = combineReducers({
  level,
  modal,
  localization,
  walls,
  monster,
  monsters,
  exit,
  missions,
  wallsReaction,
});
