// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';

import Header from './header';
import MotivationSlider from './motivationSlider';

export default function SettingsScreen() {

    const styles = StyleSheet.create({

    });

    // for motivation level:
    const[motivationLevel, setMotivationLevel] = useState (1)
    const motivationLevelHandler = (value) => {
        setMotivationLevel(value);
    };



    return (
        <View style={styles.container}>
            <Header headerTitle="Settings" />
            <ScrollView>
            <MotivationSlider currentLevel={motivationLevel} changeHandler={ motivationLevelHandler }/>
            </ScrollView>
            <Text></Text>
        </View>
    );
};