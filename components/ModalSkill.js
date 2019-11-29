import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, } from 'react-native';
import { closeModalSkill, } from '../action';
import ButtonAction from './buttons/ButtonAction';
import IconClose from './icons/IconClose';

class ModalSkill extends React.Component {

  render() {
    const { localization, modal, closeModalSkill, monster } = this.props;

    let description = '';
    if (modal.isOpen) {

      let skill = monster.skills.filter(it => modal.skill === it.name)[0];
      skill = (skill) ? skill : monster.sourceSkills.filter(it => modal.skill === it.name)[0];

      switch (modal.skill) {
        case 'hummer': {
          description =
            <Text>
              <Text>
                {localization.skillView.hummer}
              </Text>
              <Text> {localization.skillView.strength} {skill.strength} </Text>
              <Text>
                {localization.skillView.recharge}
                {skill.fullCharge}
                {localization.skillView.steps}
              </Text>
            </Text>;

          break;
        }
        case 'rocket': {
          description =
            <Text>
              <Text>
                {localization.skillView.rocket}
              </Text>
              <Text> {localization.skillView.strength} {skill.strength} </Text>
              <Text>
                {localization.skillView.recharge}
                {skill.fullCharge}
                {localization.skillView.steps}
              </Text>
            </Text>;
          break;
        }
        case 'dynamite': {
          description =
            <Text>
              <Text>
                {localization.skillView.dynamite}
              </Text>
              <Text> {localization.skillView.strength} {skill.strength} </Text>
              <Text>
                {localization.skillView.recharge}
                {skill.fullCharge}
                {localization.skillView.steps}
              </Text>
            </Text>;
          break;
        }
        case 'tramp': {
          description =
            <Text>
              <Text>
                {localization.skillView.tramp}
              </Text>
              <Text> {localization.skillView.strength} {skill.strength} </Text>
              <Text>
                {localization.skillView.recharge}
                {skill.fullCharge}
                {localization.skillView.steps}
              </Text>
            </Text>;
          break;
        }
        case 'jump': {
          description =
            <Text>
              <Text>
                {localization.skillView.jump}
              </Text>
              <Text> {localization.skillView.strength} {skill.strength} </Text>
              <Text>
                {localization.skillView.recharge}
                {skill.fullCharge}
                {localization.skillView.steps}
              </Text>
            </Text>;
          break;
        }
      }
    }

    return (
      <View style={[styles.container, !modal.isOpen && {display: 'none'}]}>
        <View style={styles.button}>
          <ButtonAction
            icon={<IconClose />}
            onPress={() => {closeModalSkill()}}
          />
        </View>
        <Text style={styles.text}>
          {description}
          <Text style={styles.textSpecial}> {localization.skillView.note} </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 180,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  button: {
    position: 'absolute',
    right: 1,
    top: 1,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
  },
  textSpecial: {
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
    opacity: 0.8,
  },
});

export default connect(modal => modal, {closeModalSkill})(ModalSkill);
