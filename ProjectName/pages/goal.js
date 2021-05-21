import React, { useState } from 'react';
import { StyleSheet, Text, Linking, View, Button, TouchableOpacity } from 'react-native';

export default function Goal (props) {

    const styles = StyleSheet.create({
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        description: {
          paddingTop: 10,
          fontSize: 15,
        },
        container: {
            padding:20,
            margin:5,
            backgroundColor: 'lightblue',
            flexDirection: 'row',
        }
    });

    // https://stackoverflow.com/questions/31889921/how-to-implement-radio-button-in-react-native
    const RadioButton = (props) => {

        return (
            <View style={[{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }, props.style]}>
              {
                props.checked ?
                  <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: 'white',
                  }}/>
                  : null
              }
            </View>
        );
      }
      const [checked, setChecked] = useState(false);

      const GoalText = (props) => {

        return (
          <View>
          <Text style={styles.title}>  {props.goal.rec}</Text>
              {
                props.showMoreInfo ? 
                <View>
                  <Text style={styles.description}>  {props.goal.Whychange}</Text>
                  <TouchableOpacity onPress={() => Linking.openURL(props.goal.link)}>
                    <Text style={{color: 'blue'}}>
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
            <RadioButton checked={checked}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setshowMoreInfo(!showMoreInfo)}}>
            <GoalText goal={props.goal} showMoreInfo={showMoreInfo}/>
          </TouchableOpacity>
        </View>
    )

}