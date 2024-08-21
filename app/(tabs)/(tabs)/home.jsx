import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Home from '../../../components/Home/Home'
import Slider from '../../../components/Home/Slider'
import Category from '../../../components/Home/Category'
import PetListByCategory from '../../../components/Home/PetListByCategory'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../../constants/Colors'

const home = () => {
  return (
    <View
    style={{
      padding:20,
      marginTop:20
    }}>
      {/* Header*/}
      <Home/>
      {/* slider*/}
      <Slider/>
      {/* category*/}
      <PetListByCategory/>
      {/* list of pets*/}
      <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, padding:20, marginTop:20, backgroundColor:Colors.LIGHT_PRIMARY,
        borderColor:Colors.PRIMARY, borderRadius:15, borderStyle: 'dashed', borderWidth:1, justifyContent:'center'
      }}>
      <MaterialIcons name="pets" size={24}  color={Colors.PRIMARY}/>
      <Text style={{fontFamily:'outfit-medium', color:Colors.PRIMARY}}>
      Add New Pet
      </Text>
      </TouchableOpacity>

      {/* add new pets*/}
    </View>
  )
}

export default home

const styles = StyleSheet.create({})