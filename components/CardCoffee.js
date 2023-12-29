import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// Theme
import { COLORS, TYPO } from "../theme";

// Utils
import { CoffeePicture } from "../utils/CoffeePicture";
import { useNavigation } from "@react-navigation/native";

export function CardCoffee({ data, index, totalItems }) {
  const navigation = useNavigation();

  // Divisez la description en un tableau de mots
  const words = data.description.split(" ");

  // Vérifiez si la description a plus de deux mots
  const truncatedDescription =
    words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : data.description;

  const navigateToCoffeeDetails = () => {
    navigation.navigate("Details", { coffee: data, index: index });
  };

  const isLastItem = index === totalItems - 1;
  const marginBottom = isLastItem ? 100 : 15;

  return (
    <TouchableOpacity onPress={navigateToCoffeeDetails}>
      <View style={[styles.cafeContainer, { marginBottom }]}>
        {/* Utilisez l'image directement dans la source de l'Image */}
        <Image
          source={data.id === index ? CoffeePicture[data.id - 1] : null}
          style={styles.cafeImage}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            bottom: 150,
            left: 10,
          }}
        >
          <Image
            source={require("../assets/Icon/star.png")}
            style={{ marginRight: 6, width: 12, height: 12 }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontFamily: TYPO.title,
            }}
          >
            {data.star}
          </Text>
        </View>
        <View style={styles.cafeInfoContainer}>
          <Text style={styles.cafeName}>{data.name}</Text>
          <Text style={styles.cafeDescrip}>{truncatedDescription}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.cafePrice}>{`$ ${data.price}`}</Text>
            <View style={styles.categoryButton}>
              <TouchableOpacity>
                <Image source={require("../assets/Icon/plus.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
