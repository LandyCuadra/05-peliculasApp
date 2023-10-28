import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import {getImageUri} from '../utils/uri.utils';

type Props = StackScreenProps<RootStackParams, 'DetailScreen'>;
const {height} = Dimensions.get('screen');

const DetailScreen = ({route: {params}, navigation}: Props) => {
  const movie = params;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id.toString());

  const uri = getImageUri(movie.poster_path);
  return (
    <ScrollView>
      <View style={imageContainer}>
        <View style={imageBorder}>
          <Image source={{uri}} style={posterImage} />
        </View>
      </View>

      <View style={marginContainer}>
        <Text style={subtitle}>{movie.original_title}</Text>
        <Text style={title}>{movie.title}</Text>
      </View>
      {isLoading && (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
      )}
      {!isLoading && <MovieDetails movieFull={movieFull} cast={cast} />}

      <TouchableOpacity style={backButton} onPress={() => navigation.pop()}>
        <Icon name={'arrow-back-outline'} color={'white'} size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const {
  posterImage,
  imageContainer,
  marginContainer,
  title,
  subtitle,
  imageBorder,
  backButton,
} = StyleSheet.create({
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.7,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
});

export default DetailScreen;
