// Pre-Populated SQLite Database in React Native
// https://aboutreact.com/example-of-pre-populated-sqlite-database-in-react-native
// Screen to view all the user*/

import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './header';
import {openDatabase} from 'react-native-sqlite-storage';
import SubmitGoals from './submitGoals';
import Goal from './goal';

// Connction to access the pre-populated user_db.db
const db = openDatabase({name: 'test2.db', createFromLocation: 1});

const GoalsScreen = ({route, navigation}) => {
  let [flatListItems, setFlatListItems] = useState([]);

  const {unselectedItems} = route.params;

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM suggestions WHERE foodfrom="beef" OR foodfrom="lamb" OR foodfrom="olive oil"',
      [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View style={{height: 0.2, width: '100%', backgroundColor: '#808080'}} />
    );
  };

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
          },
          list: {
              flex: 1,
              marginTop: 20,
          }
      });

    const selectGoalHandler = (goalKey) => {
        setSelected((prevSelected) => {
            return [
                {key: goalKey,},
                ...prevSelected];
        });
    };

    const unselectGoalHandler = (goalKey) => {
        setSelected((prevSelected) => {
            return prevSelected.filter(current => current.key != goalKey);
        });
    };

    const submitGoalsHandler = () => {
            let selectedKeys = selected.map(a => a.key);
            let selectedGoals = flatListItems.filter(current => (selectedKeys.includes(current.key)));
            navigation.navigate("Grocery List", selectedGoals);
    };

  return (
      <View style={styles.container}>
        <Header headerTitle="Sustainable Alternatives" />
        <View style={styles.content}>
          <FlatList style={styles.list}
            data={flatListItems}
            renderItem={({item}) => (
            <Goal goal={item} selectHandler={ selectGoalHandler } unselectHandler={ unselectGoalHandler }/>)}
          />
        </View>
        <SubmitGoals submitHandler={ submitGoalsHandler }/>
      </View>
  );
};

export default GoalsScreen;