import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "./Context";

export default function ProfileDetails({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Profile Details Screen</Text>
      <Button title="SignOut" onPress={() => signOut()} />
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
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
