import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import Navbar from "./ui/Navbar";
import TopBar from "./ui/TopBar";
import Product, { _mockProductApi } from "./ui/Product";

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <FlatList
        renderItem={({ item }) => (
          <Product img={require("./assets/jordan4.png")} product={item} />
        )}
        data={_mockProductApi}
      />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
