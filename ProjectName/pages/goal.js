import React, { useState } from 'react';
import { StyleSheet, Text, Linking, View, Button, TouchableOpacity } from 'react-native';
import Checkbox from './checkbox';

export default function Goal (props) {

    const styles = StyleSheet.create({
        title: {
            margin: 5,
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,

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
            padding:15,
            margin:5,
            backgroundColor: '#d5ebd8',
            flexDirection: 'row',
            borderStyle: 'dashed',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#28965A'
        }
    });

      const [checked, setChecked] = useState(false);

      const GoalText = (props) => {
        return (
          <View>
          <Text style={styles.title}>{props.goal.rec}</Text>
              {
                props.showMoreInfo ? 
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
          <TouchableOpacity onPress={()=>{setshowMoreInfo(!showMoreInfo)}}>
            <GoalText goal={props.goal} showMoreInfo={showMoreInfo}/>
          </TouchableOpacity>
        </View>
    )

}