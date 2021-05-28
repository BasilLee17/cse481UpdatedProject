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
            elevation: 5,
            position: 'absolute',
            top: '15%',
          },
          button: {
            position: 'absolute',
            alignSelf: 'center',
            bottom: 10,
            borderRadius: 20,
            padding: 10,
            elevation: 2,
            margin: 15,
          },
          buttonClose: {
            backgroundColor: "#28965A",
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
          questionIcon: {
            position: 'absolute',
            bottom: 0,
            left: -25,
            paddingHorizontal: 5,
            borderRadius: 20,
            backgroundColor: "skyblue",
          },
          moreInfo: {
            textAlign: 'center',
            fontSize: 16,
            letterSpacing: 0.25,
            color: 'black',
        },
    });

    const [motivationLevel, setMotivationLevel] = useState(global.motivationLevel);
    const [moreInfo, setMoreInfo] = useState(false);

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
                  <View style={{ height : 200 }}>
                    <Text style={styles.subtitle}> My Motivation Level: {motivationLevel}</Text>
                    <Slider style={styles.slider}
                    step={1}
                    minimumValue={1}
                    maximumValue={3}
                    minimumTrackTintColor="green"
                    maximumTrackTintColor="grey"
                    value={global.motivationLevel}
                    onValueChange={value => {global.motivationLevel = value; setMotivationLevel(value)}}
                    />
                    <Text style={styles.subtitle}>{descriptions[motivationLevel]}</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => props.visibilityHandler(!props.visibility)}
                    >
                    <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Pressable
                      style={styles.questionIcon}
                      onPress={() => setMoreInfo(!moreInfo)}
                    >
                      <Text style={styles.textStyle}>?</Text>
                    </Pressable>
                    <Text style={styles.moreInfo}>What is the use of it?</Text>
                  </View>
                    { moreInfo? 
                      <View><Text style={styles.moreInfo}>{"\n"}This will be used to decide what alternatives to suggest to you. The more motivated you are, the more suggestions you’ll see which would take some getting used to, like replacing meat with tofu for example.</Text></View>
                      : null
                    }
                </View>
            </Modal>
      </View>
    )
}