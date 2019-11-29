export const sortRandom = () => Math.random() - 0.5;

export const getRandomNumber = (max) => Math.floor(Math.random() * max + 1);

export const getRandomMinMaxNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

export const getRandomSumParameter = (max) => Math.floor(1 + Math.random() * max);

export const generatorId = () => `id${Math.random().toString(16).slice(2)}`;

// функция возвращает массив [1,2,3,4...]
export const getNumericArray = (max) => {
  let arr = [];

  for (let i = 1; i <= max; i++) {
    arr.push(i)
  }
  return arr;
};
