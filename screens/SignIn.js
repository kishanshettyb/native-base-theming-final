import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "./Context";

export default function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button title="SignIn" onPress={() => signIn()} />
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});
