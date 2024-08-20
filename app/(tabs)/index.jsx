import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, Redirect, useRootNavigationState } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'

const index = () => {
  const {user} = useUser();

const rootNavigationState = useRootNavigationState()

// useEffect(() => {
//  CheckNavLoaded()
// }, [])

// const CheckNavLoaded =()=>{
//   if(!rootNavigationState.key)
//     return null;
// }

const CheckNavLoaded = () => {
  if (!rootNavigationState || !rootNavigationState.key) {
    return false; // Return a flag instead of null
  }
  return true;
};

useEffect(() => {
  CheckNavLoaded();
}, [rootNavigationState]);

if (!CheckNavLoaded()) {
  return null; // Render nothing or a loading spinner
}

  return user && (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    {user ? 
      <Redirect href={'/(tabs)/home'}/>
      : <Redirect href={'/login/index'}/>
    }
      <Link href={'../login'}>
      <Text style={{fontFamily:'outfit'}}>Subscribe to muzammil</Text>
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})