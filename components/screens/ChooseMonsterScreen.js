import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, FlatList, } from 'react-native';
import { Color, buttonBack } from '../../styles';
import Monster from '../Monster';
import ButtonAction from '../buttons/ButtonAction';
import IconBack from '../icons/IconBack';
import { Screens } from '../../data';
import { initMonsters } from '../../action';

class ChooseMonsterScreen extends React.Component {

  componentDidMount() {
    this.props.initMonsters();
  }

  render() {
    const { monsters, navigation, } = this.props;
    const monsterList = monsters.map(it => {
      return <Monster key={it.key} item={it} navigation={navigation} active={it.active} />
    });
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/background-menu.jpg')}
        />
        <View style={styles.list}>
          {monsterList}
        </View>
        <View style={styles.buttonBack}>
          <ButtonAction icon={<IconBack />} onPress={() => { navigation.navigate(Screens.main)}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Color.background,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    opacity: 0.4,
  },
  list: {
    width: '100%',
    flexDirection: 'row',
  },
  buttonBack,
});

export default connect(
  ({monsters, monster}) => ({monsters, monster}),
  {initMonsters}
)(ChooseMonsterScreen);

