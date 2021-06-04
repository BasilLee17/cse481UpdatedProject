/*
This component is a simple checkbox, used in our grocery list screen!
*/
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Checkbox (props) {

            return (
                <View style={[{
                  height: 20,
                  width: 20,
                  // with this line of code - radio button; without it - checkbox
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#170312',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }, props.style]}>
                  {
                    props.checked ?
                      <View style={{
                        height: 8,
                        width: 8,
                        borderRadius: 2,
                        backgroundColor: '#170312',
                      }}/>
                      : null
                  }
                </View>
            );
          }
