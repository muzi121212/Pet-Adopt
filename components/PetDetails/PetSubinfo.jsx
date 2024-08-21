import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import PetSubinfoCard from './PetSubinfoCard'

const PetSubinfo = ({pet}) => {
  return (
    <View style={{paddingHorizontal:15}}>
      <View style={{display:'flex', flexDirection:'row'}}>
     

      <PetSubinfoCard icon={require('../../assets/calendar.png')} title={'Age'} value={pet.age+' Years'}/>

      <PetSubinfoCard icon={require('../../assets/bone.png')} title={'Breed'} value={pet.breed}/>
      </View>
      <View style={{display:'flex', flexDirection:'row'}}>
      <PetSubinfoCard icon={require('../../assets/sex.png')} title={'Sex'} value={pet.sex}/>

      <PetSubinfoCard icon={require('../../assets/weight.png')} title={'Weight'} value={pet.weight+' Kg'}/>
      </View>
    
      
    </View>
  )
}

export default PetSubinfo

const styles = StyleSheet.create({})