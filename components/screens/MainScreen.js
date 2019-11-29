import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, AsyncStorage, } from 'react-native';
import ButtonText from '../buttons/ButtonText';
import IconImageMonster from '../IconImageMonster';
import ProgressLine from '../ProgressLine';
import ButtonAction from '../buttons/ButtonAction';
import IconChoose from '../icons/IconChoose';
import IconPlay from '../icons/IconPlay';
import IconGallery from '../icons/IconGallery';
import SkillView from '../SkillView';
import ModalSkill from '../ModalSkill';
import { Key } from '../../async-storage';
import {
  initMonster,
  setLevel,
  setMonsterCell,
  setExit,
  setWalls,
  deActivateSkills,
  addActiveMonster,
  closeModalSkill,
  setLocalization,
  uploadMissions,
  uploadMonsters,
  uploadMonster,
} from '../../action';
import { Color, buttonLocalization, } from '../../styles';
import { audioClick } from '../../sounds';
import { Screens } from '../../data';
import { clearData } from '../../async-storage';

const { width, height } = Dimensions.get('window');

class MainScreen extends React.Component {

  componentDidMount() {
    // clearData();
    this.loadInitialState();
  }

  render() {
    const { localization, setLocalization, monster, missions, navigation, } = this.props;

    const skillList = monster.sourceSkills.map((it, idx) => {
      let monsterSkill = {name: ''};
      if(monster.skills[idx]) monsterSkill = monster.skills[idx];
      if (it.name === monsterSkill.name) return {...monsterSkill, disabled: false};
      if (it.name !== monsterSkill.name) return {...it, disabled: true};
    });

    const skills = skillList.map((it) => {
      return (
        <SkillView key={it.name} item={it} disabled={it.disabled} />
      )
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/background-main-2.png')}
        />
        <View style={styles.modal}>
          <ModalSkill />
        </View>
        <View style={styles.button}>
          <ButtonText
            title={localization.startScreen.local}
            onPress={() => {setLocalization(localization.startScreen.local)}}
            styles={buttonLocalization}
          />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.skillGroup}>
            {skills}
          </View>
          <View style={styles.monster}>
            <View style={styles.wrapperTop}>
              <Text style={styles.name}>{monster.name.toUpperCase()}</Text>
            </View>
            <IconImageMonster
              name={monster.key}
              extraBig={true}
              level={monster.level}
              navigation={navigation}
            />
            <View style={styles.wrapperBottom}>
              <ProgressLine lineExperience={monster.lineExperience} />
            </View>
          </View>
          <View>
            <ButtonAction
              icon={<IconPlay />}
              onPress={this.onPressPlay(missions.opened)}
            />
            <View style={styles.margin}></View>
            <ButtonAction
              icon={<IconChoose />}
              onPress={this.onPressChooseMonster(Screens.chooseMonster).bind(this)}
            />
          </View>
        </View>
        <View style={styles.gallery}>
          <ButtonAction
            icon={<IconGallery />}
            onPress={this.onPressGallery(Screens.gallery).bind(this)}
          />
        </View>
      </View>
    );
  }

  onPressPlay = (level) => () => {
    const {
      navigation,
      setLevel,
      setMonsterCell,
      setExit,
      setWalls,
      deActivateSkills,
      closeModalSkill,
    } = this.props;

    audioClick();
    navigation.navigate(Screens.game);
    setLevel(level);
    setMonsterCell();
    setExit();
    setWalls();
    deActivateSkills();
    closeModalSkill();
  };

  onPressChooseMonster = (screen) => () => {
    const {
      monster,
      navigation,
      addActiveMonster,
      closeModalSkill
    } = this.props;
    navigation.navigate(screen);
    addActiveMonster(monster);
    closeModalSkill();
    audioClick();
  };

  onPressGallery = (screen) => () => {
    const {
      navigation,
      closeModalSkill
    } = this.props;
    navigation.navigate(screen);
    closeModalSkill();
    audioClick();
  };

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
      this.props.initMonster();
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
    backgroundColor: Color.backgroundGame,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    // opacity: 0.8,
  },
  button: {
    position: 'absolute',
    left: 5,
    top: 5,
    flexDirection: 'row',
  },
  wrapper: {
    justifyContent: 'space-between',
    marginVertical: 'auto',
    flexDirection: 'row',
    width: '100%',
  },
  wrapperTop: {
    marginTop: width / 100 * 30,
    marginBottom: width / 100 * 5,
  },
  wrapperBottom: {
    marginTop: width / 100 * 5,
    marginBottom: width / 100 * 30,
  },
  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  monster: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillGroup: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  margin : {
    marginVertical: 5,
  },
  gallery: {
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
  modal: {
    position: 'absolute',
    left: width / 2 - 110,
    top: height / 2 - 110,
    zIndex: 2,
  },
});

export default connect(
  ({localization, monster, missions,}) => ({localization, monster, missions,}),
  {
    initMonster,
    setLevel,
    setMonsterCell,
    setExit,
    setWalls,
    deActivateSkills,
    addActiveMonster,
    closeModalSkill,
    setLocalization,
    uploadMissions,
    uploadMonsters,
    uploadMonster,
  }
)(MainScreen);
