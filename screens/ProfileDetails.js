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
      <GradientButton
        style={styles.button}
        text={<Feather name="menu" size={24} color={Colors.white} />}
        textStyle={{ fontSize: 14, fontFamily: "Poppins_semi_bold" }}
        gradientBegin={Colors.primary}
        gradientEnd={Colors.secondary}
        gradientDirection="diagonal"
        height={40}
        width={40}
        radius={12}
        impact
        impactStyle="Light"
        onPressAction={() => navigation.toggleDrawer()}
      />
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
