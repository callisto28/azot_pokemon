/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteParams } from '../../navigation/Navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button/Button';

import { useGetPokemonQuery } from '../../service/Getpokemon';

interface DetailProps {
  id: string;
}


export const Detail: React.FunctionComponent<DetailProps> = () => {

  const route = useRoute<RouteProp<RouteParams>>();
  const ident = route.params?.id;
  const { data, error, isLoading } = useGetPokemonQuery(ident);
  const [avatar, setAvatar] = useState<string>('front');
  const buttonClickedHandler = () => {
    avatar == 'front' ? setAvatar('back') : setAvatar('front');

  };


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#D9F3F3' }}>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size='large' />
        </Text>
      ) : data ? (
        <View>
          <Text>{data?.name}</Text>
          {avatar == 'front' ? (
            <View>
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: data?.sprites.front_default }} />
              <Button onPress={buttonClickedHandler}>ff</Button>

            </View>
          ) : (
            <View>
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: data?.sprites.back_default }} />
              <Button onPress={buttonClickedHandler}>Mettre Logo</Button>

            </View>
          )
          }


        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});