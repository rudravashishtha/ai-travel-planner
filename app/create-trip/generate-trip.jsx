import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import CreateTripContext from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import moment from "moment";
import { chatSession } from "../../configs/aiModel";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../configs/firebaseConfig";

export default function GenerateTrip() {
  const [currentGif, setCurrentGif] = useState(
    require("../../assets/waiting.gif")
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGif((prevGif) =>
        prevGif === require("../../assets/waiting.gif")
          ? require("../../assets/bean.gif")
          : require("../../assets/waiting.gif")
      );
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    tripData && GenerateAITrip();
  }, [tripData]);

  const GenerateAITrip = async () => {
    setLoading(true);
    const Prompt = AI_PROMPT.replace("{location}", tripData?.locationInfo?.name)
      .replace("{startDate}", moment(tripData?.startDate).format("DD MMM YYYY"))
      .replace("{endDate}", moment(tripData?.endDate).format("DD MMM YYYY"))
      .replace("{totalDays}", tripData?.totalDays)
      .replace("{totalNights}", tripData?.totalDays - 1)
      .replace("{travellers}", tripData?.traveller?.title)
      .replace("{budget}", tripData?.budget);

    console.log(Prompt);
    const result = await chatSession.sendMessage(Prompt);
    // console.log(result.response.text());

    const tripResponse = JSON.parse(result.response.text());
    const docId = Date.now().toString();
    const finalResult = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripData: tripResponse,
    });
    setLoading(false);

    router.replace("/mytrip");
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 20,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        We are working to generate your trip.
      </Text>

      <Image
        source={currentGif}
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain",
        }}
      />

      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 20,
          textAlign: "center",
          color: Colors.GRAY,
          marginTop: 35,
        }}
      >
        Do not close this page or press back button.
      </Text>
    </View>
  );
}
