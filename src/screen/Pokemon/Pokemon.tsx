import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { RouteParams } from '../../navigation/Navigation';

import { useGetPokemonByNameQuery } from '../../service/Getpokemon';

interface PokemonProps {
  pokemon: {
    name:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  };
  index: { name: React.Key | null | undefined };
  name: string;
}

export const Pokemon: React.FunctionComponent<PokemonProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const { data, error, isLoading } = useGetPokemonByNameQuery('');

  return (
    <View>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <ScrollView>
          <View>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
            {data.results.map(
              (
                pokemon: {
                  name:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                },
                index: React.Key | null | undefined
              ) => {
                return (
                  // <Text key={index}>{pokemon.name}</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    // style={styles.card}
                    onPress={() =>
                      navigation.navigate('Detail', {
                        name: pokemon.name,
                      })
                    }
                  >
                    <Image
                      style={{ width: 150, height: 150 }}
                      source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                      }}
                    />
                    <Text style={styles.pokemon}>{pokemon.name}</Text>
                  </TouchableOpacity>
                );
              }
            )}
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 5,
    marginVertical: 1,
  },
  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10,
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
  },
  pokemon: {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    height: 30,
    backgroundColor: 'red',
    color: 'white',
  },
});
