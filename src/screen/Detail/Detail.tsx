/**
 * React component for the detail screen.
 */
import
React,
{ useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {
  RouteProp, useRoute
} from '@react-navigation/native';

/**
 * Expo Google Fonts
 */
import AppLoading from 'expo-app-loading';
import { useFonts, SquadaOne_400Regular } from '@expo-google-fonts/squada-one';

/**
 * import components
 */
import { RouteParams } from '../../navigation/Navigation';
import { useGetPokemonQuery } from '../../service/Getpokemon';


/**
 * import types and interfaces
 */
interface DetailProps {
  id: string;
}


/**
 *  export component
 */
export const Detail: React.FunctionComponent<DetailProps> = () => {

  const route = useRoute<RouteProp<RouteParams>>();
  const ident = route.params?.id;
  const { data, error } = useGetPokemonQuery(ident);
  const [avatar, setAvatar] = useState<string>('front');
  const buttonClickedHandler = () => {
    avatar == 'front' ? setAvatar('back') : setAvatar('front');
  };

  /**
   * state for activity indicator
   */
  const [isLoad, setIsLoad] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
  }, []);

  /**
  * use fonts
  */
  const [fontsLoaded] = useFonts({
    SquadaOne_400Regular,
  });
  const fontSize = 35;
  const paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    /**
    * return component
    */
    return (
      <View style={{ flex: 2, alignItems: 'center' }}>
        {error ? (
          <Text>Oh no, there was an error</Text>
        ) : isLoad ? (
          <ActivityIndicator size='large' animating={true} color='red' style={[styles.container, styles.horizontal]} />
        ) : data ? (
          <View style={styles.container}>
            <View style={styles.pokemon}>
              <Text style={{
                textTransform: 'uppercase',
                marginTop: 2,
                marginBottom: 2,
                color: 'black',
                fontSize,
                paddingVertical,
                fontFamily: 'SquadaOne_400Regular',
              }}>{data?.name}</Text>
            </View>
            {avatar == 'front' ? (
              <View style={styles.container}>

                <Image
                  style={{ width: 280, height: 280 }}
                  source={{ uri: data?.sprites.front_default }} />

                <TouchableOpacity onPress={buttonClickedHandler} style={styles.roundButton1}>
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                  <Image source={require('../../../assets/circular2.png')} style={styles.button1} />
                </TouchableOpacity>

              </View>
            ) : (
              <View style={styles.container}>
                <Image
                  style={{ width: 280, height: 280 }}
                  source={{ uri: data?.sprites.back_default }} />
                <TouchableOpacity onPress={buttonClickedHandler} style={styles.roundButton1}>
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                  <Image source={require('../../../assets/circular2.png')} style={styles.button2} />
                </TouchableOpacity>

              </View>
            )
            }
          </View>
        ) : null}
      </View>
    );
  }
};

/**
 * styles for the component
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  pokemon: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
    marginVertical: 10,
  },

  button1: {
    width: 50,
    height: 50,
    transform: [{ rotate: '180deg' }],
    display: 'flex',
    alignItems: 'center',
  },

  button2: {
    width: 50,
    height: 50,
    transform: [{ rotate: '20deg' }],
    display: 'flex',
    alignItems: 'center',
  },
  roundButton1: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
  },
}
);