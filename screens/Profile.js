import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "./Context";

export default function Profile({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to profile details"
        onPress={() => navigation.navigate("ProfileDetails")}
      />
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
