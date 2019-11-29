import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, } from 'react-native';
import { buttonLocalization, } from '../../styles';
import ButtonText from '../buttons/ButtonText';
import { clearData, Key, setElementsAsync} from '../../async-storage';

class SecretScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Внимание! Клик по кнопке приведет к сбросу только миссий
            </Text>
          </View>
          <View>
            <ButtonText
              title="Сброс миссий"
              onPress={() => {setElementsAsync(1, Key.MISSIONS)}}
              styles={buttonLocalization}
            />
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Внимание! Клик по кнопке приведет к удалению всего процесса игры
            </Text>
          </View>
          <View>
            <ButtonText
              title="Сброс памяти"
              onPress={() => {clearData()}}
              styles={buttonLocalization}
            />
          </View>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            Внимание! после клика нужно перезагрузить игру
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textWrapper: {
    width: 250,
  },
  text: {
    textAlign: 'center',
  }
});

export default connect(null, {})(SecretScreen);
