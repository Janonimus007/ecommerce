import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, RefreshControl } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import { styles } from "./ProductListScreen.styles";
import { fetchProducts } from "../../../store/slices/product.slice";
import { CustomLoading, ProductCardList } from "../../../components/products";

export const ProductListScreen = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.products);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchProducts());
    setRefreshing(false);
  };

  if (loading) {
    return <CustomLoading/>
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: Ha habido un error al cargar la pagina</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCardList description={item.description} image={ item.image } price={item.price}  title={item.title}/>
      )}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
          colors={["#6200ee"]} 
          tintColor="#6200ee" 
        />
      }
    />
  );
};

