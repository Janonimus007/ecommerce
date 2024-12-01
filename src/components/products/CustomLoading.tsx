import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const numberLoaders = 7

export const CustomLoading = () => {
  return (
    <View style={styles.container}>
     {Array.from({ length: numberLoaders }).map((_, index) => (
        <Skeleton
          key={index} 
          style={styles.customLoaderElement}
          animation="wave"
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    customLoaderElement:{
        width:'90%',
        height:100,
        borderRadius:20,
        marginVertical:10

    }

})