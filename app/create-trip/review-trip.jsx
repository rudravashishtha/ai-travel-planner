import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CreateTripContext from "../../context/CreateTripContext";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Review Trip",
      headerTransparent: true,
    });
  }, []);

  const onClickContinue = () => {
    router.replace("/create-trip/generate-trip");
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 20,
          marginTop: 20,
        }}
      >
        Before generating your trip, please review your trip.
      </Text>

      {/* Destination */}
      <View
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          paddingRight: 50,
        }}
      >
        <Ionicons name="location-sharp" size={24} color={Colors.PRIMARY} />
        <View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Destination
          </Text>
          <Text style={{ fontFamily: "outfit-regular", fontSize: 17 }}>
            {tripData.locationInfo.name}
          </Text>
        </View>
      </View>

      {/* Travel Dates */}
      <View
        style={{
          marginTop: 25,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          paddingRight: 50,
        }}
      >
        <Ionicons
          name="calendar-clear-outline"
          size={24}
          color={Colors.PRIMARY}
        />
        <View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Travel Dates
          </Text>
          <Text style={{ fontFamily: "outfit-regular", fontSize: 17 }}>
            {moment(tripData?.startDate).format("DD MMM YYYY") +
              " To " +
              moment(tripData?.endDate).format("DD MMM YYYY")}
            {"  "}({tripData?.totalDays} days)
          </Text>
        </View>
      </View>

      {/* Travellers */}
      <View
        style={{
          marginTop: 25,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Ionicons name="bus-sharp" size={24} color={Colors.PRIMARY} />
        <View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Travellers
          </Text>
          <Text style={{ fontFamily: "outfit-regular", fontSize: 17 }}>
            {tripData?.traveller?.title}
          </Text>
        </View>
      </View>

      {/* Budget */}
      <View
        style={{
          marginTop: 25,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Ionicons name="wallet-sharp" size={24} color={Colors.PRIMARY} />
        <View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Budget
          </Text>
          <Text style={{ fontFamily: "outfit-regular", fontSize: 17 }}>
            {tripData?.budget}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 15,
          marginTop: 40,
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
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
