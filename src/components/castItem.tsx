import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {getImageUri} from '../utils/uri.utils';

type Props = {
  actor: Cast;
};
const CastItem = ({actor}: Props) => {
  const uri = getImageUri(actor.profile_path);
  return (
    <View style={container}>
      {actor.profile_path && <Image source={{uri}} style={actorImage} />}
      <View style={actorInfoContainer}>
        <Text style={actorNameText}>{actor.name}</Text>
        <Text style={characterNameText}>{actor.character}</Text>
      </View>
    </View>
  );
};
export default CastItem;

const {
  actorNameText,
  characterNameText,
  actorImage,
  container,
  actorInfoContainer,
} = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginHorizontal: 15,
    paddingRight: 15,
  },
  actorInfoContainer: {
    marginLeft: 10,
    paddingTop: 4,
  },
  actorNameText: {
    fontSize: 18,
  },
  characterNameText: {
    fontSize: 16,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
