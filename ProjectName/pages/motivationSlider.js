import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Slider from '@react-native-community/slider';


export default function MotivationSlider (props) {

    const descriptions = {
        1 : "I will put in the effor where it's easy.",
        2 : "I am willing to make changes, even if it takes adjusting.",
        3 : "I will do whatever it takes!",
    }

    const styles = StyleSheet.create({
        container: {
            margin: 10,
        },
        slider: {
            width: 300,
            opacity: 1,
            height: 50,
            alignSelf: 'center',

        },
        subtitle: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'black',
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}> My Motivation Level: {props.currentLevel}</Text>
            <Slider style={styles.slider}
                step={1}
                minimumValue={1}
                maximumValue={3}
                minimumTrackTintColor="green"
                maximumTrackTintColor="grey"
                onValueChange={value => props.changeHandler(value)}
            />
            <Text style={styles.subtitle}>{descriptions[props.currentLevel]}</Text>
      </View>
    )
}