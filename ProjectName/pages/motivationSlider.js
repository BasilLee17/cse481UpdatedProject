import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import Slider from '@react-native-community/slider';


export default function MotivationSlider (props) {

    const descriptions = {
        1 : "I will put in the effort where it's easy.",
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
        },
        modalView: {
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
            elevation: 5
          },
          button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          buttonOpen: {
            backgroundColor: "#F194FF",
          },
          buttonClose: {
            backgroundColor: "#2196F3",
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center"
          },
    });

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visibility}
                onRequestClose={() => {
                props.visibilityHandler(!props.visibility);
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.subtitle}> My Motivation Level: {props.currentLevel}</Text>
                    <Slider style={styles.slider}
                    step={1}
                    minimumValue={1}
                    maximumValue={3}
                    minimumTrackTintColor="green"
                    maximumTrackTintColor="grey"
                    value={props.currentLevel}
                    onValueChange={value => props.changeHandler(value)}
                    />
                    <Text style={styles.subtitle}>{descriptions[props.currentLevel]}</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => props.visibilityHandler(!props.visibility)}
                    >
                    <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
      </View>
    )
}