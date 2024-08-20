import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Home = () => {
    const {user} = useUser();
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }}>
      <View>
      <Text style={{fontSize:18, fontFamily:'outfit'}}>Welcome,</Text>
      <Text style={{fontSize:23, fontFamily:'outfit-medium'}}>{user?.firstName}</Text>
      </View>
      <Image source={{uri:user?.imageUrl}} style={{
        width:40,
        height:40,
        borderRadius:99
      }}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})