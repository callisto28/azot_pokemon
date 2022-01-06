import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { RouteParams } from '../../navigation/Navigation';

import { useGetPokemonByNameQuery } from '../../service/Getpokemon';

interface PokemonProps {
  Pokemon: {
    id: string;
    name: string;
    url: string;
  };

  Detail: {
    id: string;
    name: string;
  }

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

          {data.results.map((pokemon: { url: string; name: string }, index: number
          ) => {
            return (

              <View key={index}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: pokemon.url.split('/')[6],
                      name: pokemon.name,
                    })
                  }
                >
                  <Text style={styles.pokemon}>{pokemon.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }
          )}

        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({

  pokemon: {
    display: 'flex',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    color: 'white',
  },
});
