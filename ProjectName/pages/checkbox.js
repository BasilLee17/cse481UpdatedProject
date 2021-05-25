import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Checkbox (props) {

            return (
                <View style={[{
                  height: 24,
                  width: 24,
                  // with this line of code - radio button; without it - checkbox
                  borderRadius: 6,
                  borderWidth: 2,
                  borderColor: '#170312',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }, props.style]}>
                  {
                    props.checked ?
                      <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 3,
                        backgroundColor: '#170312',
                      }}/>
                      : null
                  }
                </View>
            );
          }
