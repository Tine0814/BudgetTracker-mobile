import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "@rneui/themed";
import { backgroundColor } from "@shopify/restyle";

const Home = () => {
  const navigation = useNavigation();
  const [scrollY, setScrollY] = useState(0);
  let month = new Date().toLocaleDateString(undefined, { month: "numeric" });
  const [selectedValue, setSelectedValue] = useState(month);
  const monthData = [
    { month: "January", value: 1 },
    { month: "February", value: 2 },
    { month: "March", value: 3 },
    { month: "April", value: 4 },
    { month: "May", value: 5 },
    { month: "June", value: 6 },
    { month: "July", value: 7 },
    { month: "August", value: 8 },
    { month: "September", value: 9 },
    { month: "October", value: 10 },
    { month: "November", value: 11 },
    { month: "December", value: 12 },
  ];

  const handleScroll = (event: any) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  // Calculate the gradient height based on scroll position
  const gradientHeight = Math.max(200 - scrollY, 100);

  const currentMonthData = monthData.filter(
    (item) => item.value <= Number(month)
  );

  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      className="bg-[#323232]"
    >
      <LinearGradient
        colors={["rgb(20 83 98)", "rgb(20 83 45)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient, { height: gradientHeight }]}
      >
        <Text style={styles.textWhite}>Total Balance</Text>
        <Text style={[styles.textWhite, styles.text4Xl]}>$4,137.85</Text>
      </LinearGradient>
      <LinearGradient
        colors={["#0c3643", "#0f3541"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          marginTop: -50,
          padding: 30,
          paddingHorizontal: 0,
        }}
      >
        <View className="items-center ">
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentOffset={{ x: 10000, y: 0 }}
            className=""
          >
            <View className="w-full rounded-lg flex-row ">
              {currentMonthData.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => setSelectedValue(String(item.value))}
                >
                  <Card
                    containerStyle={[
                      styles.card,
                      item.value === Number(selectedValue) && styles.activeCard,
                    ]}
                  >
                    <Card.Title style={styles.cardTitle}>
                      {item.month}
                    </Card.Title>
                    <Card.Divider />
                    <View
                      style={{ position: "relative", alignItems: "center" }}
                    >
                      <Text className="font-bold text-white text-text-base">
                        Total Expenses
                      </Text>
                      <Text className="font-black text-white text-text-2xl">
                        $4,137.85
                      </Text>
                    </View>
                  </Card>
                </Pressable>
              ))}
            </View>
          </ScrollView>
          <View className="h-screen w-full"></View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  textWhite: {
    color: "white",
  },
  text4Xl: {
    fontSize: 36,
  },
  cardContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "rgb(20 83 98)",
    borderRadius: 10,
    width: 240,
    borderWidth: 0,
    marginHorizontal: 5,
  },
  cardTitle: {
    color: "#fff", // Change title color
    fontSize: 18,
    fontWeight: "bold",
  },
  activeCard: {
    backgroundColor: "#40c8a5", // Change the active card color here
  },
});

export default Home;
