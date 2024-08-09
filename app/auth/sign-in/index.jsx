import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    const checkForStoredCredentials = async () => {
      const storedEmail = await AsyncStorage.getItem('user-email');
      const storedPassword = await AsyncStorage.getItem('user-password');
      if (storedEmail && storedPassword) {
        setEmail(JSON.parse(storedEmail));
        setPassword(JSON.parse(storedPassword));
        handleSignIn(JSON.parse(storedEmail), JSON.parse(storedPassword));
      }
    };

    checkForStoredCredentials();
  }, []);

  const handleSignIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await AsyncStorage.setItem("user-email", JSON.stringify(email));
      await AsyncStorage.setItem("user-password", JSON.stringify(password));
      ToastAndroid.show(
        `Welcome back, ${user.email}`,
        ToastAndroid.BOTTOM,
        ToastAndroid.LONG
      );
      router.replace("/mytrip");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/invalid-credential") {
        ToastAndroid.show(
          "Invalid credentials",
          ToastAndroid.BOTTOM,
          ToastAndroid.LONG
        );
      } else {
        ToastAndroid.show(
          errorMessage,
          ToastAndroid.BOTTOM,
          ToastAndroid.LONG
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const onSignIn = async () => {
    if (!email || !password) {
      ToastAndroid.show(
        "Please fill all fields",
        ToastAndroid.BOTTOM,
        ToastAndroid.SHORT
      );
      return;
    }
    handleSignIn(email, password);
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 20,
          color: Colors.GRAY,
          marginTop: 5,
        }}
      >
        You've been missed!
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-regular", margin: 5 }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-regular", margin: 5 }}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 40,
        }}
        onPress={onSignIn}
        disabled={loading}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
        onPress={() => router.replace("auth/sign-up")}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    padding: 15,
    borderRadius: 15,
    fontFamily: "outfit-regular",
  },
});
