import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AuthContext } from "./Context";
import { Spacing, Typography, Colors } from "../styles";
import { View, Text, Item, Input } from "native-base";
import GradientButton from "react-native-gradient-buttons";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <StatusBar
              backgroundColor={Colors.white}
              barStyle="light-content"
            />

            <View style={styles.inner}>
              <Text style={styles.title}>Let's start with {"\n"}Login!</Text>
              <Image
                style={styles.image}
                source={require("../assets/imgs/intro-1.jpg")}
              />
              <Item rounded style={styles.inputBox}>
                <Input
                  placeholderTextColor={Colors.placeholder}
                  placeholder="Email"
                />
              </Item>
              <Item rounded style={[styles.inputBox, styles.inputMargin]}>
                <Input
                  secureTextEntry={true}
                  placeholderTextColor={Colors.placeholder}
                  placeholder="Password"
                />
              </Item>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.lightText}>Forgot Password</Text>
              </TouchableOpacity>
              <GradientButton
                style={styles.button}
                text="Login"
                textStyle={{ fontSize: 14, fontFamily: "Poppins_semi_bold" }}
                gradientBegin={Colors.primary}
                gradientEnd={Colors.secondary}
                gradientDirection="diagonal"
                height={60}
                width="100%"
                radius={16}
                impact
                impactStyle="Light"
                onPressAction={() => signIn()}
              />
              <View style={styles.textCenter}>
                <Text style={styles.footerTitle}>
                  Don't have an Account?
                  <Text
                    onPress={() => navigation.navigate("SignUp")}
                    style={[styles.footerTitle, styles.link]}
                  >
                    {" "}
                    Sign Up
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inner: {
    justifyContent: "flex-end",
    marginHorizontal: Spacing.sectionPadding,
    backgroundColor: Colors.white,
  },
  title: {
    ...Typography.titleText,
    marginTop: 45,
    marginBottom: 33,
    justifyContent: "flex-start",
  },
  footerTitle: {
    ...Typography.screenFooter,
  },
  image: {
    width: "100%",
    height: 196,
    resizeMode: "contain",
    marginBottom: 30,
  },
  link: {
    color: Colors.primary,
  },
  textCenter: {
    ...Typography.centerText,
    marginTop: 50,
  },
  lightText: {
    ...Typography.subTitleText,
    textAlign: "right",
  },
  inputBox: {
    borderColor: Colors.input,
    backgroundColor: Colors.input,
    borderRadius: 14,
    paddingLeft: 22,
    height: 56,
  },
  inputMargin: {
    marginBottom: 25,
    marginTop: 30,
  },
  button: {
    marginTop: 25,
    marginBottom: 10,
  },
});
