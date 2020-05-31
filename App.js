import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/containers/Login.js';
import DashboardScreen from './src/containers/Dashboard.js';
import AboutScreen from './src/drawers/About.js';
import { CustomDrawerContent } from './src/components/Layout/index.js'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Anasayfa" drawerContent={props => <CustomDrawerContent {...props} headerContainerBackgroundColor="#1f78d1" />}>
      <Drawer.Screen name="Anasayfa" component={DashboardScreen} />
      <Drawer.Screen name="Hakkımızda" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default App;
