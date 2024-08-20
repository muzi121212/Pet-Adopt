import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Colors from '../../constants/Colors'

const Category = ({category}) => {

  const [categoryList, setCategoryList] = useState([])
  const [selectedCategoryContainer, setSelectedCategoryContainer] = useState('Dogs')

  useEffect(() => {
    GetCategories()
    }, [])
    
    const GetCategories = async()=>{
        setCategoryList([])
        const Snapshot = await getDocs(collection(db, "Category"));
        Snapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()])
        });
    }

  return (
    <View style={{marginTop:20}}> 
      <Text style={{fontFamily:'outfit-medium', fontSize:20}}>Category</Text>
      <FlatList data={categoryList}
      numColumns={4}
      renderItem={({item, index})=>(
        <TouchableOpacity 
        onPress={()=> {setSelectedCategoryContainer(item.name);
          category(item.name)

        }
      
      }
        style={{flex:1}}>
        <View style={[styles.container,  selectedCategoryContainer==item.name&&styles.selectedCategoryContainer]}
       >
        <Image source={{uri:item?.imageUrl}}
        style={{width:40, height:40}}/>
        </View>
        <Text style={{textAlign:'center', fontFamily:'outfit'}}>{item.name}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
container:{
backgroundColor: Colors.LIGHT_PRIMARY,
padding:15,
alignItems:'center',
borderWidth:1,
borderRadius:15,
borderColor: Colors.PRIMARY,
margin:4
},
selectedCategoryContainer:{
backgroundColor: Colors.SECONDARY,
borderColor: Colors.SECONDARY
}
})