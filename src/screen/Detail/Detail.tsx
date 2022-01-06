/* eslint-disable @typescript-eslint/no-unsafe-call */
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { RouteParams } from '../../navigation/Navigation';

import { useGetPokemonByNameQuery } from '../../service/Getpokemon';


interface DetailProps {
  name: string;
}

export const Detail: React.FunctionComponent<DetailProps> = () => {

  // const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  // const route = useRoute<RouteProp<RouteParams>>();

  // const [details, setDetails] = useState<unknown[]>([]);

  // useEffect(() => {
  //   console.log(details, 'details');
  //   void fetchPokemonDetails();

  // }, []);

  // const fetchPokemonDetails = async () => {


  //   const state = route.params?.name;



  // };
  const { data } = useGetPokemonByNameQuery('');
  console.log(data, 'data2');





  return (
    <View>
      <Text>{data.name}</Text>

    </View>
  );
};
