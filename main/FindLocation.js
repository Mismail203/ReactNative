import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from '../screens/login'; // Make sure to import Login correctly

const Tab = createBottomTabNavigator();

const FindLocation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'FindLocation') {
            iconName = 'home-outline'; // Icon for FindLocation
          } else if (route.name === 'Login') {
            iconName = 'person-outline'; // Icon for Login
          } else {
            iconName = 'home-outline'; // Default Icon for other screens
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? '#fff' : '#ccc', fontSize: 12 }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: { backgroundColor: '#007AFF' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ccc',
      })}
    >
      {/* Screens inside the Tab.Navigator */}
      <Tab.Screen name="Find Location" component={FindLocationContent} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

// Separate the content from the Tab.Navigator to avoid infinite loops
const FindLocationContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Find Location</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default FindLocation;
