import { View, Text } from 'react-native'
import React from 'react'

const Settings = ({route}) => {
  const {notes} =route.params
 
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>{notes}</Text>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings