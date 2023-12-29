import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

// Utils
import { CoffeePicture } from "../utils/CoffeePicture";

// Component
import HeaderBar from "../components/HeaderBar";

// Theme
import { COLORS, TYPO } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function CoffeeDetails({ route }) {
  const { coffee, index } = route.params;

  // Divisez la description en un tableau de mots
  const words = coffee.long_description.split(" ");

  // Vérifiez si la description a plus de 20 mots
  const isLongDescription = words.length > 20;

  // Construisez la description
  const description = isLongDescription
    ? `${words.slice(0, 20).join(" ")}...`
    : coffee.long_description;

  const [selectedSize, setSelectedSize] = useState("M");

  // Obtenez les tailles disponibles à partir du premier élément du tableau "Cappuccino"
  const availableSizes = coffee.taille || [];

  const navigation = useNavigation();
  const navigateToCoffeeOrder = () => {
    // Créez un objet avec les détails de la commande
    const orderDetails = {
      coffee: coffee,
      size: selectedSize,
      index: index,
    };

    // Passez les détails de la commande à la page "Order"
    navigation.navigate("Order", { order: orderDetails });
  };

  const renderSizeButton = (size) => {
    const isSelected = selectedSize === size;

    return (
      <TouchableOpacity
        key={size}
        style={{
          borderColor: isSelected ? COLORS.cappucino : "#DEDEDE",
          borderWidth: 1,
          borderRadius: 12,
          padding: 10,
          alignItems: "center",
          width: 96,
          backgroundColor: isSelected ? "#FFF5EE" : undefined,
        }}
        onPress={() => {
          setSelectedSize(size);
        }}
      >
        <Text
          style={{
            color: isSelected ? COLORS.cappucino : undefined,
            fontFamily: TYPO.title,
          }}
        >
          {size}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: COLORS.whiteGray, flex: 1 }}>
      <View>
        <View>
          <HeaderBar title={"Detail"} like={true} />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 200,
            }}
          >
            <Image
              source={coffee.id === index ? CoffeePicture[coffee.id - 1] : null}
              style={{ width: 200, height: 190 }}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: TYPO.title, fontSize: 20 }}>
              {coffee.name}
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ color: "#9B9B9B", fontFamily: TYPO.subtitle }}>
              {coffee.description}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Image
              source={require("../assets/Icon/star.png")}
              style={{ marginRight: 6, width: 20, height: 20 }}
            />
            <Text
              style={{
                color: "#2F2D2C",
                fontSize: 14,
                fontFamily: TYPO.title,
              }}
            >
              {coffee.star}{" "}
              <Text
                style={{
                  color: "#808080",
                  fontSize: 12,
                  fontFamily: TYPO.title,
                }}
              >
                (230)
              </Text>
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              position: "relative",
              bottom: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#F9F9F9",
                padding: 10,
                marginHorizontal: 10,
                borderRadius: 14,
              }}
            >
              <Image source={require("../assets/Icon/bean.png")} />
            </View>
            <View
              style={{
                backgroundColor: "#F9F9F9",
                padding: 10,
                borderRadius: 14,
              }}
            >
              <Image source={require("../assets/Icon/milk.png")} />
            </View>
          </View>
          <View
            style={{ height: 1, width: "100%", backgroundColor: "#EAEAEA" }}
          />
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: TYPO.title, fontSize: 16 }}>
              Description
            </Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Text
              style={{
                fontFamily: TYPO.subtitle,
                color: "#9B9B9B",
              }}
            >
              {description}
              {isLongDescription && (
                <Text style={{ color: COLORS.cappucino }}>Read More</Text>
              )}
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: TYPO.title, fontSize: 16 }}>Size</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 12,
            }}
          >
            {availableSizes.map((size) => renderSizeButton(size))}
          </View>
        </View>
      </View>
      {/* Barre fixe en bas de l'écran */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 30,
          paddingVertical: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 121,
          backgroundColor: COLORS.white,
          elevation: 20,
          shadowColor: COLORS.black,
        }}
      >
        <View style={{ justifyContent: "center", marginRight: 42 }}>
          <Text
            style={{ fontFamily: TYPO.title, fontSize: 18, color: "#9B9B9B" }}
          >
            Price
          </Text>
          <Text
            style={{
              fontFamily: TYPO.title,
              fontSize: 18,
              color: COLORS.cappucino,
            }}
          >{`$ ${coffee.price}`}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            marginRight: 30,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.cappucino,
              borderRadius: 8,
              marginTop: 8,
              paddingVertical: 21,
              alignItems: "center",
              paddingHorizontal: 100,
            }}
            onPress={navigateToCoffeeOrder} // Vous pouvez ajouter votre logique d'achat ici
          >
            <Text
              style={{ color: "#FFF", fontFamily: TYPO.title, fontSize: 16 }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
