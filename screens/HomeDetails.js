import React from "react";
import { AuthContext } from "./Context";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeDetails({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Home Details Screen</Text>
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
