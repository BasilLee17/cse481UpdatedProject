// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroceryListScreen from './pages/groceryListScreen';
import GoalsScreen from './pages/goalsScreen';
import TreeScreen from './pages/treeScreen';
import SettingsScreen from './pages/settingsScreen';

// https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator();

function GroceryListScreenNested() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Grocery List" component={GroceryListScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Goals" component={GoalsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    );
}

// https://reactnavigation.org/docs/tab-based-navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    // lol I cannot get the icon thing to work... will only be changing fonts for now
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      labelStyle: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        padding: 0,
      },
  }}>
        <Tab.Screen
          name="Home"
          component={GroceryListScreenNested}
          options={{headerShown:false}}
        />
        <Tab.Screen
           name="Visualization"
           component={TreeScreen}
           options={{headerShown:false}}
        />
        <Tab.Screen
           name="Settings"
           component={SettingsScreen}
           options={{headerShown:false}}
        />
      </Tab.Navigator>
  );
};

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}