import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const Slider = () => {

    const [sliderList, setSliderList] = useState([])
    useEffect(() => {
    GetSliders()
    }, [])
    
    const GetSliders = async()=>{
        setSliderList([])
        const Snapshot = await getDocs(collection(db, "Sliders"));
        Snapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());
            setSliderList(sliderList=>[...sliderList,doc.data()])
        });
    }

  return (
    <View style={{marginTop:15}}>
      <FlatList
      data={sliderList}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item,index})=>(
        <View>
        <Image source={{uri:item?.imageUrl}}
        style={styles.sliderImage}/>
        </View>
      )}/>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    sliderImage:{
        width:Dimensions.get('screen').width*0.9,
        height:150,
        borderRadius:15,
        marginRight:15
    }
})