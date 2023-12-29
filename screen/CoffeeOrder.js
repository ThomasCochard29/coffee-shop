import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";

// COMPONENT
import HeaderBar from "../components/HeaderBar";
import DeliverCoffee from "../components/DeliverCoffee";
import ReducButton from "../components/ReducButton";
import Button from "../components/Button";

// THEME
import { COLORS, TYPO } from "../theme";

// UTILS
import { CoffeePicture } from "../utils/CoffeePicture";
import { useNavigation } from "@react-navigation/native";

export default function CoffeeOrder({ route }) {
  const { coffee, size, index } = route.params.order;
  const navigation = useNavigation();

  const [deliveryPrice, setDeliveryPrice] = useState(1.0);
  const [coffeePrice, setCoffeePrice] = useState(parseFloat(coffee.price));
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Mettez à jour le prix du café lorsque la taille du café change
    setCoffeePrice(parseFloat(coffee.price));
  }, [size]);

  useEffect(() => {
    // Mettez à jour le montant total lorsque le prix du café ou les frais de livraison changent
    setDeliveryPrice(1.0); // Mettez à jour cela avec votre logique réelle
  }, [coffeePrice]);

  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <View>
        <HeaderBar title={"Order"} like={false} />
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <DeliverCoffee />
        <View style={{ marginVertical: 24 }}>
          <Text
            style={{ color: "#2F2D2C", fontFamily: TYPO.title, fontSize: 16 }}
          >
            Delivery Address
          </Text>
          <Text
            style={{
              color: "#2F2D2C",
              fontFamily: TYPO.title,
              fontSize: 14,
              marginTop: 16,
            }}
          >
            Jl. Kpg Sutoyo
          </Text>
          <Text
            style={{
              color: "#808080",
              fontFamily: TYPO.title,
              fontSize: 12,
              marginTop: 8,
            }}
          >
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>
        </View>
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                borderRadius: 16,
                alignItems: "center",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderColor: "#DEDEDE",
                borderWidth: 1,
                borderStyle: "solid",
                justifyContent: "center",
                backgroundColor: "#FFF",
                display: "flex",
                flexDirection: "row",
                marginRight: 8,
              }}
            >
              <Image source={require("../assets/Icon/edit.png")} />
              <Text
                style={{
                  color: "#303336",
                  fontFamily: TYPO.title,
                  fontSize: 12,
                  marginLeft: 4,
                }}
              >
                Edit Address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 16,
                alignItems: "center",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderColor: "#DEDEDE",
                borderWidth: 1,
                borderStyle: "solid",
                justifyContent: "center",
                backgroundColor: "#FFF",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image source={require("../assets/Icon/note.png")} />
              <Text
                style={{
                  color: "#303336",
                  fontFamily: TYPO.title,
                  fontSize: 12,
                  marginLeft: 4,
                }}
              >
                Add Note
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#EAEAEA",
              marginVertical: 20,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Image
                source={
                  coffee.id === index ? CoffeePicture[coffee.id - 1] : null
                }
                style={{ width: 54, height: 54, borderRadius: 12 }}
              />
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    color: "#2F2D2C",
                    fontFamily: TYPO.title,
                    fontSize: 16,
                  }}
                >
                  {coffee.name}
                </Text>
                <Text
                  style={{
                    color: "#9B9B9B",
                    fontFamily: TYPO.subtitle,
                    fontSize: 12,
                    width: 180,
                  }}
                >
                  {coffee.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#9B9B9B",
                      fontFamily: TYPO.subtitle,
                      fontSize: 12,
                    }}
                  >
                    Size :{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#2F2D2C",
                      fontFamily: TYPO.title,
                      fontSize: 12,
                    }}
                  >
                    {size}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 90,
              }}
            >
              <TouchableOpacity
                style={{
                  paddingHorizontal: 9,
                  borderRadius: 20,
                  borderColor: "#EAEAEA",
                  borderWidth: 1,
                  alignContent: "center",
                }}
                onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                <Image
                  source={require("../assets/Icon/moins.png")}
                  style={{ width: 16, marginVertical: 16 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 10,
                  color: COLORS.cappucino,
                  fontFamily: TYPO.title,
                  fontSize: 16,
                }}
              >
                {quantity}
              </Text>
              <TouchableOpacity
                style={{
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  borderRadius: 20,
                  borderColor: "#EAEAEA",
                  borderWidth: 1,
                  alignContent: "center",
                }}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Text style={{ fontSize: 16 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 4,
          width: "100%",
          backgroundColor: "#F4F4F4",
          marginVertical: 20,
        }}
      />
      <View style={{ marginHorizontal: 30 }}>
        <ReducButton />
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{ color: "#2F2D2C", fontFamily: TYPO.title, fontSize: 16 }}
          >
            Payment Summary
          </Text>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  color: "#2F2D2C",
                  fontFamily: TYPO.title,
                  fontSize: 14,
                }}
              >
                Price
              </Text>
              <Text
                style={{
                  color: "#2F2D2C",
                  fontFamily: TYPO.title,
                  fontSize: 14,
                }}
              >
                $ {coffeePrice}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#2F2D2C",
                  fontFamily: TYPO.title,
                  fontSize: 14,
                }}
              >
                Delivery Fee
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#2F2D2C",
                    fontFamily: TYPO.subtitle,
                    fontSize: 14,
                    marginHorizontal: 8,
                    textDecorationLine: "line-through",
                  }}
                >
                  $ 2.0
                </Text>
                <Text
                  style={{
                    color: "#2F2D2C",
                    fontFamily: TYPO.title,
                    fontSize: 14,
                  }}
                >
                  $ {deliveryPrice}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "#EAEAEA",
                marginVertical: 16,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#2F2D2C",
                  fontFamily: TYPO.title,
                  fontSize: 14,
                }}
              >
                Total Payment
              </Text>
              <Text
                style={{
                  color: "#2F2D2C",
                  fontFamily: TYPO.title,
                  fontSize: 14,
                }}
              >
                $ {coffeePrice + deliveryPrice}
              </Text>
            </View>
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
          justifyContent: "space-between",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 161,
          backgroundColor: COLORS.white,
          elevation: 20,
          shadowColor: COLORS.black,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Icon/moneys.png")}
              style={{ marginRight: 12 }}
            />
            <View
              style={{
                backgroundColor: "#F2F2F2",
                borderRadius: 20,
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.cappucino,
                      borderRadius: 20,
                      alignItems: "center",
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        fontFamily: TYPO.title,
                        fontSize: 12,
                      }}
                    >
                      Cash
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      paddingVertical: 10,
                      alignItems: "center",
                      paddingRight: 14,
                      paddingLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2F2D2C",
                        fontFamily: TYPO.title,
                        fontSize: 12,
                      }}
                    >
                      $ {coffeePrice + deliveryPrice}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Image source={require("../assets/Icon/dots.png")} />
          </View>
        </View>
        <View style={{ marginVertical: 16 }}>
          <Button
            title={"Order"}
            onPress={() => navigation.navigate("Delivery")}
          />
        </View>
      </View>
    </View>
  );
}
