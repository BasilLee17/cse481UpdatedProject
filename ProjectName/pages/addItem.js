import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

export default function AddItem({ submitHandler }) {

    const [text, setText] = useState("");

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 10,
        },
        newItem: {
            fontSize: 25,
        },
        button: {
            // position
            position: 'absolute',
            bottom:10,
            right:10,
            // style
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
            elevation: 3,
            backgroundColor: '#28965A',
          },
          buttonText: {
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
    });

    return (
        <View style={styles.container}>
            <TextInput style={styles.newItem}
                placeholder="new item..."
                onChangeText={text => setText(text)}
                value = {text}
            />

        <Pressable style={styles.button} 
            onPress={() => {
                    if (text.trim() != "") {
                        submitHandler(text);
                        setText("");
                    }
                }}>
            <Text style={styles.buttonText}>Add Item!</Text>
        </Pressable>
        </View>
    )

}