import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { Colors } from "@/constants/Colors";
import CreateTripContext from "../../context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Select Budget",
      headerShown: true,
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Please select budget", ToastAndroid.LONG);
      return;
    }
    router.push("/create-trip/review-trip");
  };

  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          Choose spending habit of your trip.
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
              }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 15,
          marginTop: 20,
          alignItems: "center",
        }}
        onPress={() => onClickContinue()}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit-medium",
            color: Colors.WHITE,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
