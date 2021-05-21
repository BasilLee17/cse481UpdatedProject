import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
// https://www.npmjs.com/package/react-native-tag-select
import { TagSelect } from 'react-native-tag-select';
import Swipeout from 'react-native-swipeout';

export default function Item (props) {

    // organic, fair-trade, cold-pressed, local
    const data = [
          { id: 1, label: 'organic' },
          { id: 2, label: 'fair-trade' },
          { id: 3, label: 'cold-pressed' },
          { id: 4, label: 'local' }
        ];

    const styles = StyleSheet.create({
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            flexDirection: 'column',
            flex: 1,
        },
        container: {
            padding: 20,
            margin: 5,
            backgroundColor: '#EFE7E6',
            flexDirection: 'row',
        },
        swipeout: {
                  margin: 5,
                  backgroundColor: '#EFE7E6',
        },
        tagLabel: {
          fontSize: 12,
        },
        tagItem: {
          padding: 5,
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
              borderColor: '#170312',
              alignItems: 'center',
              justifyContent: 'center',
            }, props.style]}>
              {
                props.checked ?
                  <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#170312',
                  }}/>
                  : null
              }
            </View>
        );
      }

    let swipeoutBtns = [
            {
              text: 'Delete',
              backgroundColor: 'red',
              onPress: () => { props.deleteHandler(props.item.key) },
            }
    ]

    const [checked, setChecked] = useState(false);
    const [tag, setTag] = useState("");

    return (
    <Swipeout style={styles.swipeout} right={swipeoutBtns}>
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{
            if (!checked) {
              props.selectHandler(props.item.key);
            } else {
              props.unselectHandler(props.item.key);
            }
            setChecked(!checked)
            }}>
            <RadioButton checked={checked}/>
          </TouchableOpacity>
          <View style={styles.item}>
              <Text style={styles.text}>  {props.item.text}</Text>
              <TagSelect
                        itemStyle={styles.tagItem}
                        itemLabelStyle={styles.tagLabel}
                        data={data}
                        ref={(tag) => {
                          setTag(tag)
                        }}
                      />
          </View>
        </View>
    </Swipeout>
    )

}