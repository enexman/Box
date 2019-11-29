import React from 'react';
import { AsyncStorage } from 'react-native';

export const setElementsAsync = (state, key) => {
  AsyncStorage.setItem(key, JSON.stringify(state));
};

export const Key = {
  LANGUAGE: 'LANGUAGE',
  MISSIONS: 'MISSIONS',
  MONSTERS: 'MONSTERSv2',
  MONSTER: 'MONSTERv2',
};

//----------------------------------
export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log('retrieveData', JSON.parse(value));
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    // Error saving data
  }
};

export const addElementAsync = (newElem, state, key) => {
  AsyncStorage.setItem(key, JSON.stringify(newElem), () => {
    AsyncStorage.getItem(key, () => {
      AsyncStorage.setItem(key, JSON.stringify([newElem, ...state]));
    });
  });
};

export const deleteElementAsync = (state, key) => {
  AsyncStorage.getItem(key, () => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  });
};

