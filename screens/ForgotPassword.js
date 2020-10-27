import React from "react";

import { AuthContext } from "./Context";
import { Colors, Typography, Spacing } from "../styles";
import { Text, View, Item, Input, Header, Left } from "native-base";
import GradientButton from "react-native-gradient-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

export default function ForgotPassword({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: Colors.white }}
    >
      <SafeAreaView>
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
              radius={16}
              impact
              impactStyle="Light"
              onPressAction={() => navigation.navigate("SignIn")}
            />
          </Left>
        </Header>
        <View style={styles.inner}>
          <Text style={styles.title}>Forgor Password</Text>
          <Text style={styles.subTitle}>
            Don’t worry, resetting your password is easy, just tell us the email
            address you registered with Smart
          </Text>
          <Item rounded style={styles.inputBox}>
            <Input
              placeholderTextColor={Colors.placeholder}
              placeholder="Email"
            />
          </Item>
          <GradientButton
            style={styles.button}
            text="Send"
            textStyle={{ fontSize: 14, fontFamily: "Poppins_semi_bold" }}
            gradientBegin={Colors.primary}
            gradientEnd={Colors.secondary}
            gradientDirection="diagonal"
            height={60}
            width="100%"
            radius={16}
            impact
            impactStyle="Light"
            onPressAction={() => navigation.navigate("SignIn")}
          />
        </View>
      </SafeAreaView>
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
    marginBottom: 20,
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
    marginBottom: 25,
  },
  subTitle: {
    ...Typography.bodyText,
    marginBottom: 50,
  },
});
