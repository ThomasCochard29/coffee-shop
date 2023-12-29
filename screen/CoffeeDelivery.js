import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// THEME
import { COLORS, TYPO } from "../theme";

export default function CoffeeDelivery() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/Image/maps.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 25,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                borderRadius: 14,
              }}
            >
              <Image source={require("../assets/Icon/arrow-left.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                borderRadius: 14,
              }}
            >
              <Image source={require("../assets/Icon/gps.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {/* Barre fixe en bas de l'écran */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 30,
          paddingVertical: 16,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 322,
          backgroundColor: COLORS.white,
          elevation: 20,
          shadowColor: COLORS.black,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "#303336", fontFamily: TYPO.title, fontSize: 16 }}
          >
            10 minutes left
          </Text>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 6 }}>
            <Text
              style={{
                color: "#808080",
                fontFamily: TYPO.title,
                fontSize: 12,
              }}
            >
              Delivery to{" "}
            </Text>
            <Text
              style={{
                color: "#303336",
                fontFamily: TYPO.title,
                fontSize: 12,
              }}
            >
              Jl. Kpg Sutoyo
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              height: 10,
              width: 71,
              backgroundColor: "#36C07E",
              borderRadius: 20,
            }}
          />
          <View
            style={{
              height: 10,
              width: 71,
              backgroundColor: "#36C07E",
              borderRadius: 20,
            }}
          />
          <View
            style={{
              height: 10,
              width: 71,
              backgroundColor: "#36C07E",
              borderRadius: 20,
            }}
          />
          <View
            style={{
              height: 10,
              width: 71,
              backgroundColor: "#DFDFDF",
              borderRadius: 20,
            }}
          />
        </View>
        <View>
          <View
            style={{
              borderRadius: 16,
              alignItems: "center",
              paddingVertical: 14,
              paddingHorizontal: 16,
              borderColor: "#EAEAEA",
              borderWidth: 1,
              borderStyle: "solid",
              backgroundColor: "#FFF",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderColor: "#EAEAEA",
                  borderWidth: 1,
                  borderStyle: "solid",
                  padding: 8,
                  marginRight: 12,
                  borderRadius: 12,
                }}
              >
                <Image
                  source={require("../assets/Icon/bike.png")}
                  style={{
                    transform: [{ rotateY: "180deg" }],
                    width: 26,
                    height: 26,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: "#2F2D2C",
                    fontFamily: TYPO.title,
                    fontSize: 14,
                    marginHorizontal: 14,
                  }}
                >
                  Delivered your order
                </Text>
                <Text
                  style={{
                    color: "#808080",
                    fontFamily: TYPO.subtitle,
                    fontSize: 14,
                    marginHorizontal: 12,
                    marginVertical: 8,
                    width: 209,
                  }}
                >
                  We deliver your goods to you in the shortes possible time.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 20, justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Image/deliveryProfil.png")}
              style={{ borderRadius: 14 }}
            />
            <View>
              <Text
                style={{
                  color: "#2F2D2C",
                  fontFamily: TYPO.title,
                  fontSize: 14,
                  marginHorizontal: 14,
                }}
              >
                Johan Hawn
              </Text>
              <Text
                style={{
                  color: "#808080",
                  fontFamily: TYPO.subtitle,
                  fontSize: 14,
                  marginHorizontal: 12,
                  marginVertical: 8,
                  width: 209,
                }}
              >
                Personal Courier
              </Text>
            </View>
            <View
              style={{
                borderColor: "#EAEAEA",
                borderWidth: 1,
                borderStyle: "solid",
                padding: 15,
                marginRight: 12,
                borderRadius: 12,
              }}
            >
              <Image source={require("../assets/Icon/telphon.png")} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
