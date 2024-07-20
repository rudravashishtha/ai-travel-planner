import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CreateTripContext from "../../context/CreateTripContext";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "../../constants/Colors";
import moment from "moment";

export default function SelectDates() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onDateChange = (date, type) => {
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const OnDateSelection = () => {
    // router.push("SelectBudget");
    if (!startDate || !endDate) {
      ToastAndroid.show("Please select start and end date", ToastAndroid.LONG);
      return;
    }
    const totalDays = endDate.diff(startDate, "days");
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalDays + 1,
    });
    router.push("/create-trip/select-budget");
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerShown: true,
      headerTransparent: true,
    });
  }, []);
  
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 85,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 30,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
          todayBackgroundColor="#2E236C"
          todayTextStyle={{
            color: Colors.WHITE,
          }}
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
        onPress={OnDateSelection}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit-medium",
            color: Colors.WHITE,
          }}
        >
          Select Budget
        </Text>
      </TouchableOpacity>
    </View>
  );
}
