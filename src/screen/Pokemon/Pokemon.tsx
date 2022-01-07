/**
 * React component for the detail screen.
 */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
/**
 * Expo Google Fonts
 */
import AppLoading from 'expo-app-loading';
import { useFonts, SquadaOne_400Regular } from '@expo-google-fonts/squada-one';
/**
 * import components
 */
import { RouteParams } from '../../navigation/Navigation';
import { useGetPokemonByNameQuery } from '../../service/Getpokemon';
/**
 * import types and interfaces
 */
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
/**
 *  export component
 */
export const Pokemon: React.FunctionComponent<PokemonProps> = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const { data, error, isLoading } = useGetPokemonByNameQuery('');
  /**
  * use fonts
  */
  const [fontsLoaded] = useFonts({
    SquadaOne_400Regular,
  });
  const fontSize = 24;
  const paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    /**
 * return component
 */
    return (
      <View>
        {error ? (
          <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <ScrollView>

            {data?.results.map((pokemon: { url: string; name: string }, index: number
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
                    <View style={styles.pokemon}>
                      <Text style={{
                        textTransform: 'uppercase',
                        marginTop: 2,
                        marginBottom: 2,
                        color: '#fff',
                        fontSize,
                        paddingVertical,
                        fontFamily: 'SquadaOne_400Regular',
                      }}>{pokemon.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }
            )}

          </ScrollView>
        ) : null}
      </View>
    );
  }
};
/**
 * styles for the component
 */
const styles = StyleSheet.create({

  pokemon: {
    display: 'flex',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    color: 'white',
  },
});
