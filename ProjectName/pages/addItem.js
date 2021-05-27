import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, TouchableOpacity } from 'react-native';
import Tags from "react-native-tags";

export default function AddItem({ submitHandler }) {

    const [text, setText] = useState("");

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 10,
            marginBottom: 10,
            //flex: 1,
        },
        newItem: {
            fontSize: 25,
        },
        submitButton: {
            // position
            /*position: 'absolute',
            bottom:0,
            right:10,*/
            // style
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
            elevation: 3,
            backgroundColor: '#28965A',
          },
          tagButton: {
            // position
            position: 'absolute',
            bottom:0,
            right:0,
            marginBottom: 5,
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
          tagContainer: {
            margin: 10,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-start',
          },
          tag: {
            backgroundColor: '#2A5353',
            borderRadius: 10,
            padding: 10,
            margin: 10,
          },
          textTag: {
            color: '#EBEBEB',
            fontWeight: 'bold',
          },
          tagInput: {
            backgroundColor: 'gray',
            color: '#606060',
            fontWeight: 'bold',
          },
    });

    // https://github.com/peterp/react-native-tags/blob/main/examples/Demo_RN_v63_2/App.js
    
    const renderTag = ({ tag, index, onPress, deleteTagOnPress, readonly }) => {
        return (
          <TouchableOpacity
            key={`${tag}-${index}`}
            onPress={onPress}
            style={styles.tag}>
            <Text style={styles.textTag}>{tag}</Text>
          </TouchableOpacity>
        );
      };

    const  onChangeTags = (tags2) => {
        setTags(tags2);
      };

    const [tags, setTags] = useState([]);
    const [tagText, setTagText] = useState("");

    const AddTags = () => {
        return (
          <View>
              {
                showAddTags ? 
                <View>
                    <Tags
                    containerStyle={styles.tagContainer}
                    initialText={tagText}
                    textInputProps={{
                        placeholderTextColor: '#D6D6D6',
                        placeholder: 'Enter your tag + space! Or tap a tag to delete.',
                    }}
                    inputStyle={styles.tagInput}
                    initialTags={tags}
                    onChangeTags={onChangeTags}
                    //onTagPress={this.onTagPress}
                    renderTag={renderTag}
                    />
                </View>
                  :
                <Pressable style={styles.tagButton} onPress={()=>{setShowAddTags(!showAddTags)}}>
                  <Text style={styles.buttonText}>Add Tags!</Text>
                </Pressable>
                
              }
            </View>
        );
      }
      const [showAddTags, setShowAddTags] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput style={styles.newItem}
                placeholder="new item..."
                onChangeText={text => setText(text)}
                value = {text}
            />
        <AddTags />
        <Pressable style={styles.submitButton} 
            onPress={() => {
                    if (text.trim() != "") {
                        submitHandler(text, tags);
                        setText("");
                    }
                    setShowAddTags(false);
                    setTags([]);
                }}>
            <Text style={styles.buttonText}>Add Item!</Text>
            
        </Pressable>
        
        </View>
    )

}