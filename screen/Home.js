import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// DATA
import cafesData from "../Coffee.json";

// Theme
import { COLORS, TYPO } from "../theme";

// Component
import SearchBar from "../components/SearchBar";
import Promo from "../components/Promo";
import CoffeeCateg from "../components/CoffeeCateg";
import CategButton from "../components/CategButton";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(cafesData)[0]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={s.body}>
      <View>
        <StatusBar style="inverted" backgroundColor="transparent" />
        <LinearGradient
          style={s.linearGradient}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={[COLORS.linearHomeSecondary, COLORS.linearHomePrimary]}
        >
          <View style={{ marginVertical: 70 }}>
            <View
              style={{
                marginHorizontal: 32,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View>
                <Text
                  style={[s.subtitle, { color: COLORS.gray, fontSize: 14 }]}
                >
                  Location
                </Text>
                <Text
                  style={[s.subtitle, { color: COLORS.white, fontSize: 16 }]}
                >
                  Bilzen, Tanjungbalai
                </Text>
              </View>
              <View style={{ marginHorizontal: 140 }}>
                <Image source={require("../assets/Image/profil.png")} />
              </View>
            </View>
            <View style={{ marginVertical: 32 }}>
              <SearchBar />
            </View>
          </View>
        </LinearGradient>
        <View style={s.promoContainer}>
          <Promo />
          <CategButton onCategoryChange={handleCategoryChange} />
          <CoffeeCateg selectedCategory={selectedCategory} />
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  body: {
    flex: 1,
    background: "#F9F9F9",
  },
  linearGradient: {
    position: "relative",
    height: 300,
    width: "100%",
    height: "auto",
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
    lineHeight: 21.56,
  },
  promoContainer: {
    marginTop: -100,
    paddingHorizontal: 16, // Ajustez selon les besoins
    height: "100%",
  },
});
