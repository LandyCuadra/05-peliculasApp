import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  children: JSX.Element | JSX.Element[];
};
const GradientBackground = ({children}: Props) => {
  return (
    <View style={container}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
};
export default GradientBackground;
const {container} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#084F6A',
  },
});
