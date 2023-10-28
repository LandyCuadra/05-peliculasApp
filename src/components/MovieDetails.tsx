import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MovieFull} from '../interfaces/movieInterfaces';
import {Cast} from '../interfaces/creditsInterface';
import {Fragment} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './castItem';

type Props = {
  movieFull: MovieFull;
  cast: Cast[];
};
const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <Fragment>
      <View style={container}>
        <View style={rowContainer}>
          <Icon name={'star-outline'} size={16} color={'grey'} />
          <Text> {movieFull.vote_average}</Text>
          {<Text> {movieFull.genres.map(g => g.name).join(', ')}</Text>}
        </View>

        <Text style={title}>Historia</Text>
        <Text style={storyText}>{movieFull.overview}</Text>

        <Text style={title}>Presupuesto</Text>
        <Text style={budgetText}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movieFull.budget)}
        </Text>

        <View style={castGroup}>
          <Text style={title}>Actores</Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={castList}
          />
        </View>
      </View>
    </Fragment>
  );
};
export default MovieDetails;

const {
  container,
  rowContainer,
  title,
  storyText,
  budgetText,
  castGroup,
  castList,
} = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  storyText: {
    fontSize: 16,
  },
  budgetText: {
    fontSize: 18,
  },
  castGroup: {
    marginTop: 10,
    marginBottom: 100,
  },
  castList: {
    marginTop: 10,
    height: 70,
  },
});
