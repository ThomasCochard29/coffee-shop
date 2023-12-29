import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, TYPO } from "../theme";

export default function DeliverCoffee() {
  const [selectedOrder, setSelectedOrder] = useState("Deliver");

  return (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        padding: 4,
        borderRadius: 14,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedOrder === "Deliver" ? COLORS.cappucino : undefined,
              borderRadius: 10,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 14,
            }}
            onPress={() => setSelectedOrder("Deliver")}
          >
            <Text
              style={{
                color:
                  selectedOrder === "Deliver" ? COLORS.white : COLORS.black,
                fontFamily: TYPO.title,
                fontSize: 16,
              }}
            >
              Deliver
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedOrder === "PickUp" ? COLORS.cappucino : undefined,
              borderRadius: 10,
              paddingVertical: 10,
              alignItems: "center",
              paddingHorizontal: 14,
            }}
            onPress={() => setSelectedOrder("PickUp")}
          >
            <Text
              style={{
                color: selectedOrder === "PickUp" ? COLORS.white : COLORS.black,
                fontFamily: TYPO.title,
                fontSize: 16,
              }}
            >
              Pick Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
