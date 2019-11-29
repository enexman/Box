import { Type } from '../type';

let monsterCellNumber = null;

export default store => next => action => {
  if (action.type === Type.MONSTER_MOVE) {
    monsterCellNumber = action.payload.cellNumber;
    next(action);
  }
  if (action.type === Type.WALLS_GROWTH) {
    const exitCellNumber = store.getState().exit.cellNumber;
    const growth = store.getState().level.parameters.growth;
    next({
      ...action,
      payload: {
        ...action.payload,
        monsterCellNumber,
        exitCellNumber,
        growth,
      }
    });
    return;
  }
  next(action);
}
