import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function SubmitGroceryList({ submitHandler }) {

    const styles = StyleSheet.create({

    });

    return (
        <View>
            <Button
                onPress={() => {submitHandler()}}
                title='Look at Sustainable Alternatives!'
                color='#28965A'
            />
        </View>
    )

}