import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button 
      title='Got next screen'
      onPress={() =>navigation.navigate('Settings',{notes:'Welcome'}) }/>
    </View>
  )
}

export default Home