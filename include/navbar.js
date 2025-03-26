import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'FindLocation') {
            iconName = 'location-outline'; // Icon for FindLocation
          } else if (route.name === 'Login') {
            iconName = 'person-outline'; // Icon for Login
          } else {
            iconName = 'home-outline'; // Default Icon for Welcome or other screens
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
      <Tab.Screen name="FindLocation" component={FindLocation} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default Navbar;
