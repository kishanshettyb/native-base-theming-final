import React from "react";
import { Text } from "native-base";
import { StyleSheet } from "react-native";
import { Colors, Typography } from "../styles";
import { Col, Grid } from "react-native-easy-grid";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Heading(props) {
  const navigation = useNavigation();

  return (
    <Grid style={styles.heading}>
      <Col size={8}>
        <Text style={styles.title}>{props.heading}</Text>
      </Col>
      <Col size={2}>
        <TouchableOpacity onPress={() => navigation.navigate(props.link)}>
          <Text style={[styles.title, styles.link]}>{props.btn}</Text>
        </TouchableOpacity>
      </Col>
    </Grid>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    ...Typography.title,
  },
  text: {
    ...Typography.bodyText,
    color: Colors.grayDark,
  },
  link: { color: Colors.primary },
});
