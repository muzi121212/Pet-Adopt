import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../../components/Home/Home'
import Slider from '../../../components/Home/Slider'
import Category from '../../../components/Home/Category'
import PetListByCategory from '../../../components/Home/PetListByCategory'

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

      {/* add new pets*/}
    </View>
  )
}

export default home

const styles = StyleSheet.create({})