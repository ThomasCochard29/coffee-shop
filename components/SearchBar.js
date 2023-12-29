import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../theme";

export default function SearchBar() {
  return (
    <View style={s.body}>
      <View style={s.container}>
        <Image
          source={require("../assets/Icon/search-normal.png")}
          style={s.image}
        />
        <Text style={{ color: "#989898" }}>Search coffee</Text>
        <View style={s.params}>
          <Image source={require("../assets/Icon/furnitur-icon.png")} />
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  body: {
    backgroundColor: COLORS.linearHomeSecondary,
    marginHorizontal: 32,
    borderRadius: 16,
  },
  container: {
    marginVertical: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  image: {
    marginRight: 16,
  },
  params: {
    backgroundColor: COLORS.cappucino,
    padding: 12,
    borderRadius: 12,
    marginLeft: 160,
  },
});
