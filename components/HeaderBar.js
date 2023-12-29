import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, TYPO } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function HeaderBar({ title, like }) {
  const navigation = useNavigation();
  const [favori, setFavori] = useState(false);

  const handleFavori = () => {
    setFavori(!favori);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 25,
          paddingHorizontal: 25,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Icon/arrow-left.png")} />
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 18,
            fontFamily: TYPO.title,
          }}
        >
          {title}
        </Text>
        <View>
          {like && (
            <View>
              {favori ? (
                <TouchableOpacity onPress={() => handleFavori()}>
                  <Image
                    source={require("../assets/Icon/heartHeaderColor.png")}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => handleFavori()}>
                  <Image source={require("../assets/Icon/HeartHeader.png")} />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
