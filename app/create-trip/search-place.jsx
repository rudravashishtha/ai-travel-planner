import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import CreateTripContext from "../../context/CreateTripContext";

export default function SearchPlace() {
  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Explore",
      headerShown: true,
      headerTransparent: true,
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 105,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search Place Here"
        fetchDetails={true}
        onPress={(data, details) => {
          // console.log(data, details);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos?.[0]?.photo_reference,
              url: details?.url,
            },
          });
          router.push("/create-trip/select-traveller");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 20,
          },
        }}
      />
      <View>
        <Link
          style={{
            textAlign: "center",
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            margin: 20,
          }}
          href={"/create-trip/select-traveller"}
        >
          Click Here
        </Link>
        <Text style={{ fontFamily: "outfit-regular", textAlign: "center" }}>
          LIFE IS short AND THE WORLD IS WIIIIDE
        </Text>
      </View>
    </View>
  );
}
