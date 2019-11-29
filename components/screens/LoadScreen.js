import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableWithoutFeedback, View, AsyncStorage, } from 'react-native';
import { Key } from '../../async-storage';
import { Screens } from '../../data';
import {
  setLocalization,
  uploadMissions,
  uploadMonsters,
  uploadMonster,
} from '../../action';

class LoadScreen extends React.Component {

  componentDidMount() {
    this.loadInitialState();
    setTimeout(() => {
      this.props.navigation.navigate(Screens.main);
    }, 500)
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {this.props.navigation.navigate(Screens.main)}}
      >
        <View style={styles.container}>

        </View>
      </TouchableWithoutFeedback>
    );
  }

  loadInitialState = async () => {
    const { setLocalization, uploadMissions, uploadMonsters, uploadMonster} = this.props;
    try {
      let language = await AsyncStorage.getItem(Key.LANGUAGE);
      // console.log('LoadScreen', language)
      setLocalization(JSON.parse(language));
    } catch (error) {
      console.log("error localization");
    }
    try {
      let missions = await AsyncStorage.getItem(Key.MISSIONS);
      // console.log('LoadScreen', missions)
      if(missions) {
        uploadMissions(JSON.parse(missions));
      }
    } catch (error) {
      console.log("error missions");
    }
    try {
      let monsters = await AsyncStorage.getItem(Key.MONSTERS);
      // console.log('LoadScreen monsters', monsters)
      if(monsters) {
        uploadMonsters(JSON.parse(monsters));
      }
    } catch (error) {
      console.log("error monsters");
    }
    try {
      let monster = await AsyncStorage.getItem(Key.MONSTER);
      // console.log('LoadScreen monster', monster)
      if(monster) {
        uploadMonster(JSON.parse(monster));
      }
    } catch (error) {
      console.log("error monster");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(
  null,
  {uploadMissions, setLocalization, uploadMonsters, uploadMonster}
)(LoadScreen);
