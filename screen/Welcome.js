import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// Variable
import { COLORS, TYPO } from "../theme";

// Component
import Button from "../components/Button";

export default function Welcome({ navigation }) {
  return (
    <View style={s.body}>
      <StatusBar style="inverted" backgroundColor="transparent" />
      <Image source={require("../assets/Image/back.png")} style={s.backImage} />
      <LinearGradient
        style={s.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.2 }}
        colors={[COLORS.blackLinear, COLORS.black, COLORS.black]}
      >
        <View style={s.container}>
          <Text style={s.text}>
            Coffee so good, your taste buds will love it.
          </Text>
          <Text style={s.subtitle}>
            The best grain, the finest roast, the powerful flavor.
          </Text>
          <Button
            onPress={() => navigation.navigate("Home")}
            title={"Get Started"}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const s = StyleSheet.create({
  body: {
    flex: 1,
  },
  backImage: {
    width: "100%",
    height: 600,
  },
  linearGradient: {
    position: "relative",
    bottom: 40,
    height: 400,
    width: "100%",
  },
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 32,
  },
  text: {
    fontFamily: TYPO.title,
    color: COLORS.white,
    fontSize: 34,
    textAlign: "center",
    letterSpacing: 4,
    lineHeight: 50,
  },
  subtitle: {
    fontFamily: TYPO.subtitle,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: 21.56,
    marginVertical: 8,
  },
});
