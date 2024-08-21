import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import Petinfo from '../../../components/PetDetails/Petinfo';
import PetSubinfo from '../../../components/PetDetails/PetSubinfo';
import About from '../../../components/PetDetails/About';
import OwnerIno from '../../../components/PetDetails/OwnerIno';

const index = () => {
    const pet = useLocalSearchParams();
    const Navigation = useNavigation();

    useEffect(() => {
    Navigation.setOptions({
        headerTransparent:true,
        headerTitle:''
    })
    }, [])
    
  return (
    <View>
    <ScrollView>
      <Petinfo pet = {pet}/>

      <PetSubinfo pet={pet}/>

      <About pet={pet}/>

      
      </ScrollView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})