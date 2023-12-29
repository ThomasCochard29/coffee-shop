import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// THEME
import { TYPO } from "../theme";

export default function ReducButton() {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderRadius: 16,
          alignItems: "center",
          paddingVertical: 19,
          paddingHorizontal: 16,
          borderColor: "#EAEAEA",
          borderWidth: 1,
          borderStyle: "solid",
          backgroundColor: "#FFF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/Icon/discount.png")} />
          <Text
            style={{
              color: "#2F2D2C",
              fontFamily: TYPO.title,
              fontSize: 14,
              marginHorizontal: 12,
            }}
          >
            1 Discount is applied
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Image
            source={require("../assets/Icon/arrow-left.png")}
            style={{
              transform: [{ rotate: "180deg" }],
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
