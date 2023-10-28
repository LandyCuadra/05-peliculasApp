import React from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import {useRef} from 'react';
import useFade from "../hooks/useFade";

type Props = {};
const FadeScreen = (props: Props) => {
  const {fadeIn, fadeOut, opacity} = useFade();
  return (
    <View style={container}>
      <Animated.View style={[subContainer, {opacity}]}>
        <Text>FadeScreen</Text>
      </Animated.View>

      <Button title={'Fade In'} onPress={fadeIn} />
      <Button title={'Fade Out'} onPress={fadeOut} />
    </View>
  );
};
export default FadeScreen;
const {container, subContainer} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
    marginBottom: 10,
  },
});
