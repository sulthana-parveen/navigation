import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import Notification from './screens/Notification'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const MyStack =()=>{
  return (
    <Stack.Navigator>
  <Stack.Screen name='Home' component={MyDrawer} options={{
    title:'Home Page',
    headerStyle:{
      backgroundColor:'lightblue',
      
    }
    
  }}/>
  <Stack.Screen name='Settings' component={Settings}/>
</Stack.Navigator>
  )
}
const MyDrawer =() => {
  return(
    <Drawer.Navigator 
    screenListeners={{
      state:(e) => console.log('Drawer State:',e.data.state),
     
    }}>
     
      <Drawer.Screen name='Notification' component={MyTab}/>
        <Drawer.Screen name='Profile' component={Profile}/>
     
    </Drawer.Navigator>
  )
}
const MyTab =() =>{
  return(
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'notifications-circle' : 'notifications-outline';
        }

        // You can customize the icon library and size based on your preferences
        return <Ionicon name={iconName} size={20} color={'grey'} />;
      },
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor:'grey'
    })}
    >
      <Tab.Screen name ='Home' component={Home}/>
      <Tab.Screen name ='Notification' component={Notification}/>
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  )
}

export default App

