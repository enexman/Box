import { Type } from '../type';

export default store => next => action => {


  if(action.type === Type.MONSTER_UPLOAD) {

    const { monsters } = store.getState();

    const { loadData } = action.payload;

    const loadMonster = monsters.filter(it => it.key === loadData.key)[0];
    const monster = {...loadMonster, experience: loadData.experience};

    next({
      ...action,
      payload: {
        ...action.payload,
        monster,
      }
    });
    return;
  }

  next(action);

}
