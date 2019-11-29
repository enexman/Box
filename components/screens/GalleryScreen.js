import React from 'react';
import { connect } from 'react-redux';
import { Animated, View, StyleSheet,} from 'react-native';
import ImageSlide from '../gallery/ImageSlide';
import ImageMonster from '../gallery/ImageMonster';
import ImageExit from '../gallery/ImageExit';
import ImageStones from '../gallery/ImageStones';
import ImageHummer from '../gallery/ImageHummer';
import { Screens } from '../../data';
import ButtonAction from '../buttons/ButtonAction';
import IconBack from '../icons/IconBack';
import { buttonBack } from '../../styles';

class GalleryScreen extends React.Component {

  render() {
    const { localization, navigation } =  this.props;
    return (
      <View style={styles.container}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          horizontal
          pagingEnabled
        >
          <ImageSlide image={<ImageMonster />} text={localization.galleryScreen.monster} />
          <ImageSlide image={<ImageExit />} text={localization.galleryScreen.exit} />
          <ImageSlide image={<ImageStones />} text={localization.galleryScreen.stones} />
          <ImageSlide image={<ImageHummer />} text={localization.galleryScreen.hummer} />
        </Animated.ScrollView>
        <View style={styles.buttonBack}>
          <ButtonAction icon={<IconBack />} onPress={() => {navigation.navigate(Screens.main)}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonBack,
});
export default connect(
  ({localization}) => ({localization}),
  {}
)(GalleryScreen);
