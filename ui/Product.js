import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import splash from "../assets/splash.png";

const productStyles = StyleSheet.create({
  card: { flex: -1, flexDirection: "column" },
  img: { width: 288, height: 288 },
  body: { flex: 1 },
  price: { fontSize: 12, color: "green" },
});

const Product = ({
  product: {
    name,
    user: { username },
    price,
    datePosted,
    views,
  },
  img,
}) => (
  <View>
    <Image souce={splash} style={productStyles.img} />
    <View style={productStyles.body}>
      <View>
        <Text>{name}</Text>
        <Text>{username}</Text>
        <Text>Posted on {datePosted}</Text>
      </View>
      <View>
        <Text style={productStyles.price}>{price}</Text>
        <Text>{views} views</Text>
      </View>
    </View>
  </View>
);

export default Product;

export const _mockProductApi = [
  {
    name: "Air Jordan IV",
    user: { username: "nathan_gupt" },
    price: 200,
    datePosted: "today",
    views: 0,
  },
];
