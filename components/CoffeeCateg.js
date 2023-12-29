import React from "react";
import { StyleSheet, FlatList, ScrollView, View } from "react-native";

// DATA
import cafesData from "../Coffee.json";

// Theme
import { COLORS, TYPO } from "../theme";

// COMPONENT
import { CardCoffee } from "./CardCoffee";

export default function CoffeeCateg({ selectedCategory }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cafesData[selectedCategory]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardCoffee
            data={item}
            index={item.id}
            totalItems={cafesData[selectedCategory].length}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryButton: {
    borderRadius: 12,
    backgroundColor: COLORS.cappucino,
    width: 32,
    alignItems: "center",
    paddingVertical: 4,
  },
  cafeContainer: {
    marginBottom: 15,
    width: 160,
    height: "auto",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },
  cafeImage: {
    height: 145, // Ajustez la hauteur de l'image selon vos besoins
    width: "auto",
    resizeMode: "cover",
    borderRadius: 16,
    marginBottom: 10,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  cafeName: {
    fontSize: 18,
    fontFamily: TYPO.title,
    color: "#2F2D2C",
  },
  cafeDescrip: {
    fontFamily: TYPO.subtitle,
    marginBottom: 10,
    color: "#9B9B9B",
  },
  cafePrice: {
    fontSize: 18,
    fontFamily: TYPO.title,
    color: "#2F4B4E",
  },
  cafeInfoContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
