import { Image, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import Colors from '../../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'


export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])


  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/login.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
      <Text style={styles.text}>
      Ready to make new friend?</Text>
      <Text style={{fontFamily:'outfit', fontSize:18, textAlign:'center',color:Colors.GRAY}}>Let's Adopt the pet of your choice and make their life happy again.</Text>
     <Pressable 
     onPress={onPress}
     style={{
      padding:14,
      marginTop:height*0.1,
      backgroundColor:Colors.PRIMARY,
      borderRadius:14,
      width:'100%'
     }}>
     <Text style={{
      fontFamily:'outfit-medium',
      fontSize:20,
      textAlign:'center'
     }}>Get Started</Text>
     </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
  },
  image: {
    width: width,  // Using the full width of the window
    height: height * 0.6, // Adjusting height to half the window height for illustration
    resizeMode: 'cover', // Ensures the image covers the whole area while maintaining aspect ratio
  },
  textContainer:{
    padding:20,
    display:'flex',
    textAlign:'center'
  },
  text:{
    fontFamily:'outfit-bold',
    fontSize:30,
    textAlign:'center'
  }
});
