import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();


  return (
    <View>
      <Image
        source={require("../assets/images/loginpage.jpg")}
        style={{
          width: "100%",
          height: 550,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'outfit-medium',
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>

        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit-regular",
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 5,
          }}
        >
          Discover your next adventure effortlessly with personalized
          itineraries. Travel smarter with AI-driven insights.
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit-regular",
              fontSize: 17,
              display: "flex",
            }}
          >
            Get Started
          </Text>
          <MaterialIcons name="travel-explore" size={20} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
