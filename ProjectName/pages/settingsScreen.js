// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';

import Header from './header';

export default function SettingsScreen() {

    const styles = StyleSheet.create({

    });


    return (
        <View style={styles.container}>
            <Header headerTitle="Settings" />
            <Text> My food restrictions: blabla</Text>
            
        </View>
    );
};