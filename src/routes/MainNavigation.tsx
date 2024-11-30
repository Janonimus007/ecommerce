import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/auth/login/LoginScreen'
import ProductStack from './stacks/ProductStack';

export default function MainNavigation() {
    const auth = true;
  return (
    <>
      {auth ? <ProductStack/> : <LoginScreen/>}
    </>
  )
}