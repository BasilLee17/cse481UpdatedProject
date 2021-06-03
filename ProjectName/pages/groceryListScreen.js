// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import AddItem from './addItem';
import Header from './header';
import Item from './item';
import SubmitGroceryList from './submitGroceryList';
import DeleteItems from './deleteItems';
import {openDatabase} from 'react-native-sqlite-storage';

// Connection to access the pre-populated user_db.db
const db = openDatabase({name: 'db.db', createFromLocation: 1});

export default function GroceryListScreen ({ route, navigation }) {
    const [list, setList] = useState([
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

    let [flatListItems, setFlatListItems] = useState([]);

    const submitHandler = (itemName, itemTags) => {
        console.log(itemName);
        db.transaction((tx) => {
          tx.executeSql('INSERT INTO list (food, selected) VALUES (?, 0)',
          [itemName],
          (tx, results) => {
          console.log("Results", results.rowsAffected);
          });
        });
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM list',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setFlatListItems(temp);
          });
        });
        console.log(JSON.stringify(flatListItems));
        console.log(itemTags);
        setList((prevList) => {
            return [
                {text: itemName, tags: itemTags, key: Math.random().toString()},
                ...prevList];
        })
    };

    const deleteHandler = (itemKey, itemName) => {
        db.transaction((tx) => {
          tx.executeSql('DELETE FROM list WHERE food=?',
          [itemName],
          (tx, results) => {
          console.log("Results", results.rowsAffected);
          });
        });
        setList((prevList) => {
            return prevList.filter(current => current.key != itemKey);
        });
    }

    const selectItemHandler = (itemKey, itemName) => {
        db.transaction((tx) => {
          tx.executeSql('UPDATE list SET selected=1 WHERE food=?',
          [itemName],
          (tx, results) => {
          console.log("Results", results.rowsAffected);
          });
        });
        setSelected((prevSelected) => {
            return [
                {key: itemKey,},
                ...prevSelected];
        });
    };

    const unselectItemHandler = (itemKey, itemName) => {
        db.transaction((tx) => {
          tx.executeSql('UPDATE list SET selected=0 WHERE food=?',
          [itemName],
          (tx, results) => {
          console.log("Results", results.rowsAffected);
          });
        });
        setSelected((prevSelected) => {
            return prevSelected.filter(current => current.key != itemKey);
        });
    };

    const submitGroceryListHandler = () => {
        let selectedKeys = selected.map(a => a.key);
        let unselectedItems = list.filter(current => !(selectedKeys.includes(current.key)));
        navigation.navigate("Goals", unselectedItems);
    };

    const deleteCheckedItemsHandler = () => {
        db.transaction((tx) => {
          tx.executeSql('DELETE FROM list WHERE selected=1',
          [],
          (tx, results) => {
          console.log("Results", results.rowsAffected);
          });
        });
        let selectedKeys = selected.map(a => a.key);
        setList((prevList) => {
            return prevList.filter(current => !(selectedKeys.includes(current.key)));
        });
    };

    const deleteAllItemsHandler = () => {
        db.transaction((tx) => {
          tx.executeSql('DELETE FROM list',
          [],
          (tx, results) => {
          console.log("Results", results.rowsAffected);
          });
        });
        let selectedKeys = selected.map(a => a.key);
        setList((prevList) => {
            return [];
        });
    };

    return (
        <View style={styles.container}>
            <Header headerTitle="My Grocery List" />
            <View style={styles.content}>
                <AddItem submitHandler={ submitHandler } />
                <FlatList 
                    style={styles.list}
                    data={list}
                    renderItem={({item}) => (
                    <Item item={item} deleteHandler={deleteHandler} selectHandler={ selectItemHandler } unselectHandler={ unselectItemHandler }/>)}
                    ListFooterComponent={() => 
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <DeleteItems buttonContent='Clear Checked Items' deleteItemsHandler={ deleteCheckedItemsHandler }/>
                    <DeleteItems buttonContent='Clear All' deleteItemsHandler={ deleteAllItemsHandler }/>
                    </View>
                    }
                />
                <SubmitGroceryList submitHandler={ submitGroceryListHandler }/>
            </View>
        </View>
    );
};