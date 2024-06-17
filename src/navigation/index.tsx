import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { RootStackParamList, BottomTabParamList } from "./type";
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { Platform, StyleSheet, View } from "react-native";
import CreateExpenses from "../screens/create-task";

// Create Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator<BottomTabParamList>();

// Define BottomTabs component
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "addExpenses") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#40c8a5",
        tabBarInactiveTintColor: "white",
        tabBarBackground: () => (
          <BlurView intensity={20} style={StyleSheet.absoluteFill} />
        ),
        tabBarStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent background
          borderTopWidth: 0,
          elevation: 0,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          display: "none",
        },
      })}
    >
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({}) => {
            return (
              <View
                style={{
                  top: Platform.OS == "ios" ? -10 : -20,
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#40c8a5",
                }}
              >
                <Icon name={"home"} size={24} color={"white"} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="addExpenses" component={CreateExpenses} />
    </Tab.Navigator>
  );
};

// Define Navigation component
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Navigation;
