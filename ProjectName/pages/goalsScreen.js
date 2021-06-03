// Pre-Populated SQLite Database in React Native
// https://aboutreact.com/example-of-pre-populated-sqlite-database-in-react-native
// Screen to view all the user*/

import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Header from './header';
import SubmitGoals from './submitGoals';
import Goal from './goal';
import MotivationSlider from './motivationSlider';
import {openDatabase} from 'react-native-sqlite-storage';

// Connection to access the pre-populated user_db.db
const db = openDatabase({name: 'datab.db', createFromLocation: 1});

const GoalsScreen = ({route, navigation}) => {
  let [flatListItems, setFlatListItems] = useState([]);

  //const {unselectedItems} = route.params;

  useEffect((x) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT suggestions.id, suggestions.rec, suggestions.Whychange, suggestions.link FROM suggestions INNER JOIN list ON suggestions.foodfrom=list.food WHERE selected=0 AND motivationlevel<=?',
      [motivationLevel],
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
              justifyContent: "center",
          },
          content: {
              flex: 1,
              marginTop: 20,
              marginHorizontal: 20,
              //padding: 20,
          },
          list: {
              flex: 1,
              marginTop: 10,
          },
          button: {
            position: 'absolute',
            top:45,
            right:5,
            marginBottom: 5,
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          buttonOpen: {
            backgroundColor: "#28965A",
          },
          bottonText: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          icon: {
            width: 25,
            height: 25,
            resizeMode: 'center'
          },
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
        console.log(selectedKeys);
        selectedKeys.forEach((key) => {
            db.transaction((tx) => {
              tx.executeSql('UPDATE list SET food=(SELECT foodto FROM suggestions WHERE id=?) WHERE food=(SELECT foodfrom FROM suggestions WHERE id=?)',
              [key, key],
              (tx, results) => {
              });
            });
        });
        let selectedGoals = flatListItems.filter(current => (selectedKeys.includes(current.key)));
        navigation.navigate("Grocery List", selectedGoals);
    };


    // for motivation level:
    const[motivationLevel, setMotivationLevel] = useState (global.motivationLevel)
    // todo
    const [modalVisible, setModalVisible] = useState(false);


    function changeLevelHandler (value) {
      setMotivationLevel(value);
      //forceUpdate();
      db.transaction((tx) => {
        tx.executeSql('SELECT suggestions.id, suggestions.rec, suggestions.Whychange, suggestions.link FROM suggestions INNER JOIN list ON suggestions.foodfrom=list.food WHERE selected=0 AND motivationlevel<=?',
        [global.motivationLevel],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        });
      });
  };

  return (
      <View style={styles.container}>
        <Header headerTitle="Sustainable Alternatives" />
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Image style={styles.icon}
                 source={require('../img/settings.png')}/>
        </Pressable>
        <MotivationSlider currentLevel={motivationLevel} changeHandler={ changeLevelHandler } visibility={modalVisible} visibilityHandler={ setModalVisible }/>
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