import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarStyle: {
            paddingBottom: 5,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={22} color={color} />
          ),
        }}

      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarStyle: {
            paddingBottom: 5,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-sharp" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarStyle: {
            paddingBottom: 5,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle-sharp" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
