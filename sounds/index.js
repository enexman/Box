import { Audio } from 'expo-av';

export const audioBrokeStone = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require('../../assets/sounds/broke_stone.mp3'));
    await soundObject.playAsync();
    setTimeout(() => {
      soundObject.unloadAsync();
    }, 2000)
  } catch (error) {
  }
};

export const audioClick = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require('../../assets/sounds/click.mp3'));
    await soundObject.playAsync();
    setTimeout(() => {
      soundObject.unloadAsync();
    }, 2000)
  } catch (error) {
  }
};

export const audioMove = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require('../../assets/sounds/move.mp3'));
    await soundObject.playAsync();
    setTimeout(() => {
      soundObject.unloadAsync();
    }, 2000)
  } catch (error) {
  }
};

export const audioWeapon = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require('../../assets/sounds/hummer.mp3'));
    await soundObject.playAsync();
    setTimeout(() => {
      soundObject.unloadAsync();
    }, 2000)
  } catch (error) {
  }
};

export const audioWin = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require('../../assets/sounds/win.mp3'));
    await soundObject.playAsync();
    setTimeout(() => {
      soundObject.unloadAsync();
    }, 5000)
  } catch (error) {
  }
};

export const audioLoose = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require('../../assets/sounds/loose.mp3'));
    await soundObject.playAsync();
    setTimeout(() => {
      soundObject.unloadAsync();
    }, 5000)
  } catch (error) {
  }
};

export const audioModal = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require('../../assets/sounds/open_modal.mp3'));
    await soundObject.playAsync();
    setTimeout(() => {
      soundObject.unloadAsync();
    }, 2000)
  } catch (error) {
  }
};
