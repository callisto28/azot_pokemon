/* eslint-disable indent */
import React, { Children, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
    children: string;
    onPress: () => void;
}



export const Button: React.FunctionComponent<ButtonProps> = ({ children, onPress }) => {

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.roundButton1}>

                <Text>{children}</Text>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundButton1: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'red',
    },

});