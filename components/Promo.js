import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, TYPO } from "../theme";

export default function Promo() {
  return (
    <View style={s.body}>
      <Image
        source={require("../assets/Image/promo.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View
        style={{
          backgroundColor: COLORS.promo,
          width: 60,
          borderRadius: 10,
          position: "relative",
          bottom: 150,
          left: 20,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontFamily: TYPO.title,
            marginHorizontal: 6,
            marginVertical: 4,
            fontSize: 14,
          }}
        >
          Promo
        </Text>
      </View>
      <View
        style={{
          position: "relative",
          bottom: 150,
          left: 20,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.black,
            width: "60%",
            height: 30,
            position: "absolute",
            top: "25%",
          }}
        />
        <View
          style={{
            backgroundColor: COLORS.black,
            width: "46%",
            height: 25,
            position: "absolute",
            top: "76%",
          }}
        />
        <Text
          style={{
            color: COLORS.white,
            fontFamily: TYPO.title,
            marginHorizontal: 6,
            fontSize: 32,
          }}
        >
          Buy one get
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: TYPO.title,
            marginHorizontal: 6,
            fontSize: 32,
          }}
        >
          one FREE
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  body: {
    marginHorizontal: 32,
    marginVertical: 32,
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
  },
});
