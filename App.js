import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/welcome';
import FindLocation from './main/FindLocation';
import Login from './screens/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        {/* Welcome screen without Navbar */}
        <Stack.Screen name="Welcome" component={Welcome} />
        
        {/* Other screens will have Navbar */}
        <Stack.Screen name="FindLocation" component={FindLocation} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
