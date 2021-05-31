import React, { useState } from 'react';
import { StyleSheet, Text, Linking, View, Pressable, TouchableOpacity } from 'react-native';
import Checkbox from './checkbox';

export default function Goal (props) {

    const styles = StyleSheet.create({
        title: {
            margin: 5,
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginRight: 15,

        },
        description: {
          padding: 10,
          fontSize: 15,
          marginRight: 20,

        },
        link: {
          padding: 10,
          fontSize: 15,
          color: 'blue',
        },
        container: {
            padding:10,
            paddingRight: 20,
            margin:5,
            backgroundColor: '#d5ebd8',
            flexDirection: 'row',
            borderStyle: 'dashed',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#28965A'
        },
        infoIcon: {
          position: 'absolute',
          right: '3%',
          paddingHorizontal: 8,
          borderRadius: 20,
          backgroundColor: "skyblue",
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        },
        infoIconText: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
    });

      const [checked, setChecked] = useState(false);

      const GoalText = (props) => {
        return (
          <View style={{ width: '97%' }}>
          <Text style={styles.title}>{props.goal.rec}</Text>
              {
                showMoreInfo ? 
                <View>
                  <Text style={styles.description}>{props.goal.Whychange}</Text>
                  <TouchableOpacity onPress={() => Linking.openURL(props.goal.link)}>
                    <Text style={styles.link}>
                      Click here for more info!
                    </Text>
                  </TouchableOpacity>
                </View>
                  : null
              }
            </View>
        );
      }
      const [showMoreInfo, setshowMoreInfo] = useState(false);

    return (
        <View style={styles.container}>          
          <TouchableOpacity onPress={()=>{
            if (!checked) {
              props.selectHandler(props.goal.key);
            } else {
              props.unselectHandler(props.goal.key);
            }
            setChecked(!checked)
            }}>
            <Checkbox checked={checked}/>
          </TouchableOpacity>
            
            <View style={{ flexDirection: "row" }}>
                    <GoalText goal={props.goal}/>
                    
                  </View>
                  <Pressable
                      style={styles.infoIcon}
                      onPress={() => setshowMoreInfo(!showMoreInfo)}
                    >
                      <Text style={styles.infoIconText}>i</Text>
                    </Pressable>
        </View>
    )

}