import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'

const About = ({pet}) => {
    const [readMore, setreadMore] = useState(true)
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:20, fontFamily:'outfit-medium'}}>{pet?.name}</Text>

      <Text numberOfLines={readMore?3:30} style={{fontSize:16, fontFamily:'outfit'}}>{pet?.about}</Text>

      {readMore&&
        <Pressable onPress={()=>setreadMore(false)}>
        <Text
        style={{
            fontFamily:'outfit-medium',
            fontSize:14,
            color:Colors.SECONDARY
        }}>Read More</Text>
        </Pressable>}
      </View>
  )
}

export default About

const styles = StyleSheet.create({})