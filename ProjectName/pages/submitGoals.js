/*
This component is the button to submit the selected alternatives so that the grocery list updates.
It's currently unused, due to time restrictions not allowing us to fully get the functionality
working.
*/
import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Button } from 'react-native';

export default function SubmitGoal({ submitHandler }) {

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
            marginHorizontal: 10,
            marginBottom: 20,
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
            <Text style={styles.text}>Navigate Back to Grocery List</Text>
        </Pressable>

    )

}