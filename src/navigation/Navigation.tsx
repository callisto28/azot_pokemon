import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Pokemon } from '../screen/Pokemon';
import { Detail } from '../screen/Detail';


export type RouteParams = {
    Pokemon: {
        name: string;
    };
    Detail: {
        name: string;
    };
};

const Stack = createNativeStackNavigator<RouteParams>();


export const Navigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Pokemon" component={Pokemon}
                    options={{
                        title: 'Pokemon',
                        // headerTitleAlign: 'center',
                        headerTintColor: "#FFF",
                        headerStyle: {
                            backgroundColor: "#000",
                        },

                    }} />
                <Stack.Screen name="Detail"
                    component={Detail}
                    options={{
                        title: 'Detail',
                        // animation: "slide_from_right",
                        headerTintColor: "#FFF",
                        headerStyle: {
                            backgroundColor: "#000",
                        },
                    }} />
            </Stack.Group>
        </Stack.Navigator>

    )
}


