import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';
import {RootStackParams} from '../navigation/Navigation';
import { getImageUri } from "../utils/uri.utils";

type Props = {
  movie: Movie;
  height?: number;
  width?: number;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

const MoviePosterCard = ({movie, height, width}: Props) => {
  const uri = getImageUri(movie.poster_path);
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  const imageContainer = {
    ...styles.imageContainer,
    height: height || 420,
    width: width || 300,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigate('DetailScreen', movie);
      }}>
      <View style={imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    marginStart: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {flex: 1, borderRadius: 18, margin: 5},
});
export default MoviePosterCard;
