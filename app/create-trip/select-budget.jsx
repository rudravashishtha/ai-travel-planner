import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function SelectBudget() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerShown: true,
      headerTransparent: true,
    });
  }, []);
  return (
    <View>
      <Text>SelectBudget</Text>
    </View>
  );
}
