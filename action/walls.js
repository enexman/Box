import { Type } from '../type';

export const setWalls = () => ({
  type: Type.WALLS_SET,
});

export const growthWalls = () => ({
  type: Type.WALLS_GROWTH,
});

export const destroyWallHummer = (cellNumber) => ({
  type: Type.WALLS_DESTROY_HUMMER,
  payload: {
    cellNumber
  }
});

export const destroyWallRocket = (cellNumber, monsterCellNumber, strength) => ({
  type: Type.WALLS_DESTROY_ROCKET,
  payload: {
    cellNumber,
    monsterCellNumber,
    strength
  }
});

export const destroyWallDynamite = (cellNumber, strength) => ({
  type: Type.WALLS_DESTROY_DYNAMITE,
  payload: {
    cellNumber,
    strength
  }
});

export const destroyWallTramp = (cellNumber, strength) => ({
  type: Type.WALLS_DESTROY_TRAMP,
  payload: {
    cellNumber,
    strength
  }
});
