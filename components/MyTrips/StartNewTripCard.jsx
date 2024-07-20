import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Ionicons name="location-sharp" size={30} color={Colors.PRIMARY} />
      <Text
        style={{
          fontSize: 24,
          fontFamily: "outfit-medium",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        No trips planned yet.
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-regular",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel adventure! Get started by
        adding a new trip.
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          paddingHorizontal: 30,
          borderRadius: 15,
          marginTop: 20,
        }}
        onPress={() => router.push("/create-trip/search-place")}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          Start a New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
