import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-web";
import palette from "./pallette";
import PlusCircleIcon from "./icons/PlusCircleIcon";
import AccountIcon from "./icons/AccountIcon";
import SearchIcon from "./icons/SearchIcon";
import MessagesIcon from "./icons/MessagesIcon";
import HomeIcon from "./icons/HomeIcon";

const styles = StyleSheet.create({
  bar: {
    height: 40,
    width: "100%",
    backgroundColor: palette.grey.dark0,
    flex: -1,
    flexDirection: "row",
  },
  button: {
    width: "20%",
    height: "100%",
    backgroundColor: palette.grey.dark0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const NavbarButton = ({ onPress, children }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={palette.blue.light3}
    onPress={onPress}
  >
    <View>{children}</View>
  </TouchableHighlight>
);

const Navbar = ({ activeTab }) => (
  <View style={styles.bar}>
    <NavbarButton>
      <HomeIcon />
    </NavbarButton>
    <NavbarButton>
      <SearchIcon />
    </NavbarButton>
    <NavbarButton>
      <PlusCircleIcon />
    </NavbarButton>
    <NavbarButton>
      <MessagesIcon />
    </NavbarButton>
    <NavbarButton>
      <AccountIcon />
    </NavbarButton>
  </View>
);

export default Navbar;
