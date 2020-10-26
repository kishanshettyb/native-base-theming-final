import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "./Context";

export default function SignUp() {
  const { signUp } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <Button onPress={() => signUp()} title="Register" />
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
