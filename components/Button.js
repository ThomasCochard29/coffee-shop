import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, TYPO } from "../theme";

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={s.background}>
        <Text style={s.textButton}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  background: {
    backgroundColor: COLORS.cappucino,
    paddingVertical: 21,
    paddingHorizontal: 109,
    alignItems: "center",
    borderRadius: 16,
  },
  textButton: {
    color: COLORS.white,
    fontFamily: TYPO.title,
    fontSize: 16,
  },
});
