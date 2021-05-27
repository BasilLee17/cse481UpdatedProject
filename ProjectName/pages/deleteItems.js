import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Button } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

export default function DeleteItems({ buttonContent, deleteItemsHandler }) {

    const [confirm, setConfirm] = useState(false);

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
            width: 150,
            marginHorizontal: 15,
          },
          text: {
            textAlign: 'center',
            fontSize: 12,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
    });

        return (
            <Pressable 
                style={[styles.button, 
                confirm ?
                {backgroundColor: 'red'} 
                :   {backgroundColor:'#28965A',}]} 
                onPress={() =>{
                if (confirm) {
                    deleteItemsHandler();
                }
                setConfirm(!confirm);
                }}>
                <Text style={styles.text}>{confirm ? "Confirm" : buttonContent }</Text>
            </Pressable>

        )
    

}