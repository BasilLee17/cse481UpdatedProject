import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

// props.headerTitle
export default function Header (props) {
    const styles = StyleSheet.create({
        header: {
            height: 40,
            paddingTop: 0,
            backgroundColor: '#82E098'
        },
        title: {
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'black',

        }
    });

    return (
        <View style={styles.header}>
            <Text style={styles.title}> {props.headerTitle} </Text>
        </View>
    )
}