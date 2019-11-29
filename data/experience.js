
const expKo = 1.5;
export const getExperience = (level, openedMission) => {
  const  finishedKo = (openedMission > level) ?  expKo / 3 : expKo;
  return  Math.round(level * finishedKo);
};
