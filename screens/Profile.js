import { View, Text, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <Button title='open drawer' onPress={() =>navigation.openDrawer()}/>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile