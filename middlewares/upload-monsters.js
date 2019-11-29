import { Type } from '../type';

export default store => next => action => {


  if(action.type === Type.MONSTERS_UPLOAD) {

    const { monsters } = store.getState();

    const { loadData } = action.payload;

    const newMonsters = monsters.map(it => {
      const monster = loadData.filter(item => item.key === it.key)[0];
      return {...it, experience: monster.experience}
    });

    next({
      ...action,
      payload: {
        ...action.payload,
        monsters: newMonsters,
      }
    });
    return;
  }

  next(action);

}
