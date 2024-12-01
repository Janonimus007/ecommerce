import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './LoginScreen.styles'
import { LoginForm } from '../../../components/auth'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <LoginForm/>
    </View>
  )
}