/*
This component is the button used to submit the grocery list to the suggestions page.
*/
import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Button } from 'react-native';
import { sub } from 'react-native-reanimated';

export default function SubmitGroceryList({ submitHandler }) {

    const styles = StyleSheet.create({
        button: {
            // position
            /*
            position: 'absolute',
            bottom:10,
            right:10,*/
            // style
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
            elevation: 3,
            backgroundColor: '#28965A',
          },
          text: {
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
    });

    return (

        <Pressable style={styles.button} onPress={submitHandler}>
            <Text style={styles.text}>Look at Sustainable Alternatives!</Text>
        </Pressable>

    )

}