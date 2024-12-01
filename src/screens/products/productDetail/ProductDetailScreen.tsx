import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../../interfaces/navigation';
import { styles } from './ProductDetailScreen.styles';
import { Image } from 'react-native-elements';

type ProductDetailRouteProp = RouteProp<RootStackParamList, "ProductDetail">;

export const  ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const { image, title, price, description } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
