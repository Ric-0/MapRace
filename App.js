import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from './components/Accueil.js';
import Map from './components/Map.js';
import LeaderBoard from './components/LeaderBoard.js';
// Lien vers l'accueil
function HomeScreen({ navigation }) {
  return (
    <Accueil />
  );
}
// Lien vers la map
function MapScreen({ navigation }) {
  return (
    <Map />
  );
}
// Lien vers le leaderboard
function LeaderBoardScreen({ navigation }) {
  return (
    <LeaderBoard />
  );
}

class App extends Component {
  state = {
  };  

  render() {
    // Création du menu de navigation
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          // Choix des icones de navigations
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Scores') {
              iconName = focused ? 'ios-trophy' : 'ios-trophy-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Couleur de l'icon active
          tabBarActiveTintColor: '#FFE95C',
          // Couleur de l'icon inactive
          tabBarInactiveTintColor: 'black',
        })}
      >
        {/* Mise en place des liens vers les pages */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Scores" component={LeaderBoardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
