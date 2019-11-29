export const MAX_LEVELS = 100;

export const getLevel = (levels, levelNumber) => {
  return levels.filter(it => it.number === levelNumber)[0];
};

const getLevels = (max) => {
  const array = [];

  for(let i = 1; i <= max; i ++) {
    if(i <= 5) {
      array.push({number: i, parameters: { wallsNumber: 30 + i, growth: 0}});
    }
    if(i > 5 && i <= 15) {
      array.push({number: i, parameters: { wallsNumber: 40, growth: 1}});
    }
    if(i > 15 && i <= 30) {
      array.push({number: i, parameters: { wallsNumber: 40, growth: 2}});
    }
    if(i > 30 && i <= 40) {
      array.push({number: i, parameters: { wallsNumber: 50, growth: 1}});
    }
    if(i > 40 && i <= 60) {
      array.push({number: i, parameters: { wallsNumber: 50, growth: 2}});
    }
    if(i > 60 && i <= 100) {
      array.push({number: i, parameters: { wallsNumber: 50, growth: 3}});
    }
  }

  return array;
  // return [
  //   {
  //     number: 1,
  //     parameters: {
  //       wallsNumber: 50,
  //       growth: 3,
  //     },
  //   }
  // ]
};

export const levels = getLevels(MAX_LEVELS);


// const getExperience = (level) => {
//   return  Math.round(level * 1.5);
// };
//
// const sumExp = (cb, levels) => {
//   let sum = 0
//   for(let i = 1; i <= levels; i++) {
//     sum += cb(i);
//   }
//   console.log(sum);
// };
//
// sumExp(getExperience, 2);
