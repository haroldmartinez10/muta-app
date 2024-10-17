import HomeScreen from "./screens/HomeScreen";
import WalletScreen from "./screens/WalletScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CollectionsScreen from "./screens/CollectionsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Platform } from "react-native";

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: Platform.OS === "ios" ? 105 : 90,
            backgroundColor: "#171717",
            borderTopWidth: 0,
            paddingTop: Platform.OS === "ios" ? "3%" : "1%",
          },
          tabBarActiveTintColor: "#D5ED64",
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: Platform.OS === "ios" ? "15%" : "27%",
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Billetera"
          component={WalletScreen}
          options={{
            tabBarLabel: "Billetera",
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="credit-card" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Recolecciones"
          component={CollectionsScreen}
          options={{
            tabBarLabel: "Recolecciones",
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
