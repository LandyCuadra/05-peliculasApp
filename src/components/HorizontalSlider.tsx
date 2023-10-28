import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MoviePosterCard from './MoviePosterCard';
import {Movie} from '../interfaces/movieInterfaces';

type Props = {
  title?: string;
  movies: Movie[];
};

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={miniCarouselContainer}>
      {title && <Text style={categoryTitle}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePosterCard movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;

const {categoryTitle, miniCarouselContainer} = StyleSheet.create({
  miniCarouselContainer: {
    paddingVertical: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
