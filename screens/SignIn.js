import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "./Context";
import { Spacing, Typography, Colors } from "../styles";
import { Button, View, Text, Item, Input } from "native-base";
import GradientButton from "react-native-gradient-buttons";

export default function SignIn({ navigation }) {
  const { signUp } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Let's start with {"\n"}Login!</Text>
        <Image
          style={styles.image}
          source={require("../assets/imgs/intro-1.jpg")}
        />
        <Item rounded style={styles.inputBox}>
          <Input placeholderTextColor="#909090" placeholder="Email" />
        </Item>
        <Item rounded style={styles.inputBox}>
          <Input
            secureTextEntry={true}
            placeholderTextColor="#909090"
            placeholder="Password"
          />
        </Item>

        <Text style={styles.lightText}>Forgot Password</Text>
        <GradientButton
          style={{ marginVertical: 25 }}
          text="Login"
          textStyle={{ fontSize: 14, fontFamily: "Poppins_semi_bold" }}
          gradientBegin="#4136F1"
          gradientEnd="#8743FF"
          gradientDirection="diagonal"
          height={60}
          width="100%"
          radius={16}
          impact
          impactStyle="Light"
          onPressAction={() => alert("You pressed me!")}
        />
        <View style={styles.textCenter}>
          <Text style={styles.footerTitle}>
            Don't have an Account ?
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={[styles.footerTitle, styles.link]}> Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  screenContainer: {
    marginHorizontal: Spacing.sectionPadding,
    backgroundColor: Colors.white,
  },
  title: {
    ...Typography.titleText,
    marginTop: 85,
  },
  footerTitle: {
    ...Typography.screenFooter,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 58,
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
  placeholder: {
    color: Colors.primary,
  },
  inputBox: {
    borderColor: Colors.placeholder,
    backgroundColor: Colors.placeholder,
    borderRadius: 14,
    paddingLeft: 22,
    marginBottom: 30,
  },
});
