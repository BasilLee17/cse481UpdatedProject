import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

// props.headerTitle
export default function Header (props) {
    const styles = StyleSheet.create({
        header: {
            height: 80,
            paddingTop: 20,
            backgroundColor: '#ADFFAD'
        },
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30

        }
    });

    return (
        <View style={styles.header}>
            <Text style={styles.title}> {props.headerTitle} </Text>
        </View>
    )
}