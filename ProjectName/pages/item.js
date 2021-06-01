import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
// https://www.npmjs.com/package/react-native-tag-select
import { TagSelect } from 'react-native-tag-select';
import Swipeout from 'react-native-swipeout';
import Checkbox from './checkbox';


export default function Item (props) {

    // organic, fair-trade, cold-pressed, local
    //const [data, setData] = useState(props.item.tags);

    const styles = StyleSheet.create({
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            flexDirection: 'column',
            flex: 1,
            margin: 5,
            marginLeft: 10,
        },
        container: {
            //paddingBottom: 0,
            padding: 1,
            paddingLeft: 10,
            margin: 1,
            backgroundColor: '#EFE7E6',
            flexDirection: 'row',
            
        },
        swipeout: {
                  margin: 5,
                  backgroundColor: '#EFE7E6',
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'pink'
        },

        // just so that nothing happens when the tag is clicked??
        tagLabel: {
          fontSize: 12,
          color: 'black',
          //backgroundColor: 'white',
        },
        tagItem: {
          padding: 5,
          shadowColor: 'green',
          backgroundColor: 'white',
          borderColor: 'white',
          marginLeft: 10,
        }
        
    });

    let swipeoutBtns = [
            {
              text: 'Delete',
              backgroundColor: 'red',
              onPress: () => { props.deleteHandler(props.item.key, props.item.text) },
            }
    ]

    const [checked, setChecked] = useState(false);
    const [tag, setTag] = useState("");

    return (
    <Swipeout style={styles.swipeout} right={swipeoutBtns}>
        <View style={[styles.container, checked? {backgroundColor: '#CFCFCF' ,}: {backgroundColor: '#EFE7E6'}]}>
          <TouchableOpacity onPress={()=>{
            if (!checked) {
              props.selectHandler(props.item.key, props.item.text);
            } else {
              props.unselectHandler(props.item.key, props.item.text);
            }
            setChecked(!checked)
            }}>
            <Checkbox checked={checked}/>
          </TouchableOpacity>
          <View style={styles.item}>
              <Text style={[styles.text, 
                            checked ?
                              {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} 
                            : {textDecorationLine:'none',}]}> {props.item.text} </Text>
              <TagSelect
                        itemStyle={styles.tagItem}
                        itemStyleSelected={styles.tagItem}
                        itemLabelStyle={styles.tagLabel}
                        itemLabelStyleSelected={styles.tagLabel}
                        data={props.item.tags}
                        onItemPress={null}
                        ref={(tag) => {
                          setTag(tag)
                        }}
                      />
          </View>
        </View>
    </Swipeout>
    )

}