import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import Navbar from "./ui/Navbar";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Filter Control</Text>
      </View>
      <FlatList
        renderItem={({ item }) => (
          <Product name={item.name} price={item.price} />
        )}
        data={_PRODUCTS}
        keyExtractor={(item) => item.name}
      />
      <Navbar />
    </View>
  );
}

const _PRODUCTS = [{ name: "jordan 4", price: 200 }];

const Product = ({ name, price }) => (
  <View>
    <Text>
      {name} | ${price}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
