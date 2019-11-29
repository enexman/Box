import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { reducers } from '../reducers';
import logger from '../middlewares/logger';
import wallsSet from '../middlewares/walls-set';
import wallsGrowth from '../middlewares/walls-growth';
import wallsDestroy from '../middlewares/walls-destroy';
import uploadMonster from '../middlewares/upload-monster';
import uploadMonsters from '../middlewares/upload-monsters';

function configureStore () {
  return compose(applyMiddleware(
    thunkMiddleware,
    logger,
    wallsSet,
    wallsGrowth,
    wallsDestroy,
    uploadMonster,
    uploadMonsters,
  ))(createStore)(reducers);
}

export const store = configureStore();
