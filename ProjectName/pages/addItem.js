import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function AddItem({ submitHandler }) {

    const [text, setText] = useState("");

    const styles = StyleSheet.create({
        newItem: {
            fontSize: 25,
        },
    });

    return (
        <View>
            <TextInput style={styles.newItem}
                placeholder="new item..."
                onChangeText={text => setText(text)}
                value = {text}
            />
            <Button
                onPress={() => {
                    if (text.trim() != "") {
                        submitHandler(text);
                        setText("");
                    }
                }}
                title='add item'
                color='#28965A'
            />
        </View>
    )

}