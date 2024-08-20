import { Tabs, Stack } from 'expo-router';
import React from 'react';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

export default function TabLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
  const colorScheme = useColorScheme();
  useFonts({
    'outfit': require('./../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../../assets/fonts/Outfit-Bold.ttf')

  })

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
    <Stack
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Stack.Screen name='login/index' options={{headerShown:false}}/>
      <Stack.Screen name='(tabs)'
      options={{
        headerShown:false
      }}/>
      
    </Stack>
    </ClerkProvider>
  );
}
