import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePosterCard from '../components/MoviePosterCard';
import useMovies from '../hooks/useMovies';
import GradientBackground from '../components/GradientBackground';
import {getImageUri} from '../utils/uri.utils';

type Props = {};
const {width} = Dimensions.get('window');

const HomeScreen = (props: Props) => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = getImageUri(movie.poster_path);
    console.log(uri);

  };
  if (isLoading) {
    return (
      <SafeAreaView style={indicatorContainer}>
        <ActivityIndicator color="red" size={100} />
      </SafeAreaView>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <SafeAreaView>
          <View style={carouselContainer}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePosterCard movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Mejor valoradas" movies={topRated} />
          <HorizontalSlider title="Proximamente" movies={upcoming} />
        </SafeAreaView>
      </ScrollView>
    </GradientBackground>
  );
};

const {indicatorContainer, carouselContainer} = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  carouselContainer: {
    height: 440,
  },
});

export default HomeScreen;
