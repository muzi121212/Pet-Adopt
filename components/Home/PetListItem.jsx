import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const PetListItem = ({pet}) => {
  return (
    <View style={{
        padding:10, 
        marginRight:15,
        backgroundColor:Colors.WHITE,
        borderRadius:10
    }}>
     <Image source={{uri:pet?.imageUrl}}
     style={{
        height:117, width:132, borderRadius:10, objectFit:'cover', 
     }}/>
     <Text style={{
     fontFamily:'outfit-medium',
     fontSize: 15
     }}>{pet.name}</Text>
     <View style={{flexDirection:'row', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
     <Text
     style={{
        color:Colors.GRAY,
        fontFamily: 'outfit',
        fontSize:10
     }}>{pet.breed}</Text>
     <Text style={{
        fontFamily:'outfit',
        color:Colors.PRIMARY,
        paddingHorizontal:7,
        borderRadius:10,
        fontSize:9,
        backgroundColor: Colors.LIGHT_PRIMARY
     }}>{pet.age}YRS</Text>
     </View>
    </View>
  )
}

export default PetListItem

const styles = StyleSheet.create({})