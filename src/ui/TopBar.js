import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import palette from "./pallette";

const barStyles = StyleSheet.create({
  containingBar: {
    height: 12,
    width: "100%",
    backgroundColor: palette.grey.dark0,
  },
});

const TopBar = () => (
  <View style={barStyles.containingBar}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={palette.grey.dark0}
      hidden={false}
    />
  </View>
);

export default TopBar;
