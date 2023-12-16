import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, TYPO } from "../theme";

export default function Button() {
  return (
    <View style={s.background}>
      <Text style={s.textButton}>Get Started</Text>
    </View>
  );
}

const s = StyleSheet.create({
  background: {
    backgroundColor: COLORS.cappucino,
    paddingVertical: 21,
    paddingHorizontal: 109,
    alignItems: "center",
  },
  textButton: {
    color: COLORS.white,
    fontFamily: TYPO.title,
    fontSize: 16
  },
});
