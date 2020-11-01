import React from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { AuthContext } from "./Context";
import { StatusBar } from "expo-status-bar";
import { Colors, Typography, Spacing } from "../styles";
import GradientButton from "react-native-gradient-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, Item, Input, Header, Left, Body } from "native-base";

export default function SignUp({ navigation }) {
  const { signUp } = React.useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: Colors.white }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Header transparent>
            <Left>
              <GradientButton
                style={styles.headerButton}
                text={
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={24}
                    color={Colors.white}
                  />
                }
                textStyle={{ fontSize: 14, fontFamily: "Poppins_semi_bold" }}
                gradientBegin={Colors.primary}
                gradientEnd={Colors.secondary}
                gradientDirection="diagonal"
                height={40}
                width={40}
                radius={12}
                impact
                impactStyle="Light"
                onPressAction={() => navigation.navigate("SignIn")}
              />
            </Left>
            <Body />
          </Header>
          <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
          <View style={styles.inner}>
            <Text style={styles.title}>Let’s start with {"\n"}Register !</Text>
            <Item rounded style={styles.inputBox}>
              <Input
                placeholderTextColor={Colors.placeholder}
                placeholder="Full Name"
              />
            </Item>
            <Item rounded style={[styles.inputBox, styles.inputMargin]}>
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
            <GradientButton
              style={styles.button}
              text="Sign Up"
              textStyle={{ fontSize: 14, fontFamily: "Poppins_semi_bold" }}
              gradientBegin={Colors.primary}
              gradientEnd={Colors.secondary}
              gradientDirection="diagonal"
              height={60}
              width="100%"
              radius={16}
              impact
              impactStyle="Light"
              onPressAction={() => signUp()}
            />
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.footerTitle}>
              Already have an Account?
              <Text
                onPress={() => navigation.navigate("SignIn")}
                style={[styles.footerTitle, styles.link]}
              >
                {" "}
                Sign In
              </Text>
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  title: {
    ...Typography.titleText,
    marginTop: 45,
    marginBottom: 55,
    justifyContent: "flex-start",
  },
  inner: {
    justifyContent: "flex-end",
    marginHorizontal: Spacing.sectionPadding,
    backgroundColor: Colors.white,
  },
  inputBox: {
    borderColor: Colors.input,
    backgroundColor: Colors.input,
    borderRadius: 14,
    paddingLeft: 22,
    height: 56,
    marginLeft: 0,
  },
  inputMargin: {
    marginTop: 30,
  },
  button: {
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 0,
  },
  headerButton: {
    marginLeft: 15,
  },
  textCenter: {
    ...Typography.centerText,
    marginTop: 50,
  },
  footerTitle: {
    ...Typography.screenFooter,
  },
  link: {
    color: Colors.primary,
  },
});
