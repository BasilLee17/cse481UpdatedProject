// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import AddItem from './addItem';
import Header from './header';
import Item from './item';
import SubmitGroceryList from './submitGroceryList';

export default function GroceryListScreen ({ route, navigation }) {
    const [list, setList] = useState([
        {text: 'almonds', key: 1},
        {text: 'bread', key: 2},
        {text: 'milk', key: 3},
        {text: 'pork', key: 4}
    ]);

    const[selected, setSelected] = useState ([
        {key: -1}
    ])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        content: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
        },
        list: {
            flex: 1,
            marginTop: 0,
        }
    });

    const submitHandler = (itemName) => {
        setList((prevList) => {
            return [
                {text: itemName, key: Math.random().toString()},
                ...prevList];
        })
    };

    const deleteHandler = (itemKey) => {
        setList((prevList) => {
            return prevList.filter(current => current.key != itemKey);
        });
    }

    const selectItemHandler = (itemKey) => {
        setSelected((prevSelected) => {
            return [
                {key: itemKey,},
                ...prevSelected];
        });
    };

    const unselectItemHandler = (itemKey) => {
        setSelected((prevSelected) => {
            return prevSelected.filter(current => current.key != itemKey);
        });
    };

    const submitGroceryListHandler = () => {
        let selectedKeys = selected.map(a => a.key);
        // TODO: is there a way to pass items???
        let unselectedItems = list.filter(current => !(selectedKeys.includes(current.key)));
        navigation.navigate("Goals", unselectedItems);
    };

    return (
        <View style={styles.container}>
            <Header headerTitle="My Grocery List" />
            <View style={styles.content}>
                <AddItem submitHandler={ submitHandler } />
                <FlatList style={styles.list}
                    data={list}
                    renderItem={({item}) => (
                    <Item item={item} deleteHandler={ deleteHandler } selectHandler={ selectItemHandler } unselectHandler={ unselectItemHandler }/>)}
                />
                <SubmitGroceryList submitHandler={ submitGroceryListHandler }/>
            </View>
        </View>
    );
};