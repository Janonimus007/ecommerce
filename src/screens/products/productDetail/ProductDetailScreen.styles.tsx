import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    image: {
      width: "100%",
      height: 200,
      marginBottom: 20,
      resizeMode:'contain'
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    price: {
      fontSize: 20,
      color: "green",
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: "#555",
    },
  });