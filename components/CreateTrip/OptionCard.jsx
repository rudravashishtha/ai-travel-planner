import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          padding: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedOption?.id == option.id &&
        selectedOption && {
            borderWidth: 1,
          },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-medium",
          }}
        >
          {option.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit-regular",
            color: Colors.GRAY,
          }}
        >
          {option.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 30 }}>{option.icon}</Text>
    </View>
  );
}
