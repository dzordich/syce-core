import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as NativeStatusBar,
} from "react-native";
import palette from "./pallette";

const barStyles = StyleSheet.create({
  containingBar: {
    flex: -1,
    height: 12,
    width: "100%",
    backgroundColor: palette.grey.dark0,
  },
});

const TopBar = () => (
  <View style={barStyles.containingBar}>
    <NativeStatusBar
      barStyle="light-content"
      backgroundColor={palette.grey.dark0}
    />
  </View>
);

export default TopBar;
