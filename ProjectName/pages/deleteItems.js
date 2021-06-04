/*
This component allows the user to delete multiple items from their shopping list at once,
as well as clearing their shopping list entirely, with a pop-up confirming their decision.
*/

import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Modal } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

export default function DeleteItems({ buttonContent, deleteItemsHandler }) {

    const [modalVisible, setModalVisible] = useState(false);


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
            marginHorizontal: 17,
          },
          text: {
            textAlign: 'center',
            fontSize: 12,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
          modalView: {
            top: '70%',
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center"
          }
    });

        return (
            <View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure you want to {buttonContent.toLowerCase()}?</Text>
                        <View style={{ flexDirection: "row" }}> 
                        <Pressable
                            style={[styles.button,  {backgroundColor: '#28965A'}]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, {backgroundColor: 'red'}]}
                            onPress={() => { 
                                setModalVisible(!modalVisible);
                                deleteItemsHandler();
                            }
                            }
                            >
                            <Text style={styles.textStyle}>Confirm</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable 
                style={[styles.button, modalVisible? {backgroundColor: 'gray'}:{backgroundColor: '#28965A'}]} 
                onPress={() =>{
                    setModalVisible(!modalVisible);
                }}>
                <Text style={styles.text}>{ buttonContent }</Text>
            </Pressable>
            </View>

        )
    

}