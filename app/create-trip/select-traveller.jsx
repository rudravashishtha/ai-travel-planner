import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SelectTravellerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import CreateTripContext from "../../context/CreateTripContext";

export default function SelectTraveller() {
  const navigation = useNavigation();
  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Select Traveller",
      headerShown: true,
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      traveller: selectedTraveller,
    });
  }, [selectedTraveller]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 85,
        backgroundColor: Colors.WHITE,
        height: "100%",
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontFamily: "outfit-medium",
        }}
      >
        Who's Travelling?
      </Text>

      <View
        style={{
          marginTop: 10,
        }}
      >
        <FlatList
          data={SelectTravellerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              style={{
                marginVertical: 10,
              }}
              onPress={() => {
                setSelectedTraveller(item);
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveller} />
            </TouchableOpacity>
          )}
        />
      </View>
      {selectedTraveller && (
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 15,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={() => {
            router.push("/create-trip/select-dates");
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
            }}
          >
            Select Date
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
