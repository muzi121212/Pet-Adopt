import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PetListItem from './PetListItem'

const PetListByCategory = () => {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
 GetPetList('Dogs')
  }, [])
  
  const [petList, setPetList] = useState([])
   const GetPetList = async(category) =>{
    setLoader(true)
    setPetList([])
    const q = query(collection(db, 'Pets'), where('category','==', category))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        setPetList(petList=>[...petList,doc.data()])
        setLoader(false)
    });
   }
  return (
    <View>
      <Category category={(value)=>GetPetList(value)}/>
      <FlatList
      style={{marginTop:10}}
      data={petList}
      refreshing={loader}
      onRefresh={()=>GetPetList('Dogs')}
      horizontal={true}
      renderItem={({item,index})=>(
        <PetListItem pet={item}/>
      )}/>
    </View>
  )
}

export default PetListByCategory

const styles = StyleSheet.create({})