import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

// Screen
import Welcome from "./screen/Welcome";
import Home from "./screen/Home";
import CoffeeDetails from "./screen/CoffeeDetails";
import CoffeeOrder from "./screen/CoffeeOrder";
import CoffeeDelivery from "./screen/CoffeeDelivery";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora: require("./assets/Fonts/Sora.ttf"),
    SoraSemiBold: require("./assets/Fonts/SoraSemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={CoffeeDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Order"
            component={CoffeeOrder}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={CoffeeDelivery}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
