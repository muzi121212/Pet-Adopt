import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OwnerIno = ({pet}) => {
  return (
    <View>
      <Image source={{uri:pet?.userImage}}
      style={{height:40, width:40}}/>
      <Text>{pet.usename}</Text>
    </View>
  )
}

export default OwnerIno

const styles = StyleSheet.create({})