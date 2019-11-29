import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { Color } from '../../styles';

const SCREEN_WIDTH = Dimensions.get("window").width;

class ImageSlide extends React.Component {

  render() {
    const { text, image } = this.props;
    return (
      <View style={styles.container}>
        {image}
        <Text style={styles.text}>
          {text}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  text: {
    color: Color.greyDark,
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 25,
    textAlign: 'center',
  },
});

export default connect(null, {})(ImageSlide);
