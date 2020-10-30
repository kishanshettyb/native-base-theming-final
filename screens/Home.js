import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import {
  Header,
  Left,
  Right,
  Container,
  Content,
  Input,
  Item,
  Icon,
  Grid,
  Col,
} from "native-base";
import GradientButton from "react-native-gradient-buttons";
import { Colors, Typography, Spacing } from "../styles";
import Profile from "../assets/imgs/profile.jpg";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <Container style={styles.container}>
      <Header transparent>
        <Left>
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
        </Left>
        <Right>
          <Image
            source={require("../assets/imgs/profile.jpg")}
            style={styles.profile}
          />
        </Right>
      </Header>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Content style={styles.innerContent}>
        <Text style={styles.title}>Hello, John !</Text>
        <Text style={styles.text}>Find a course you want to learn</Text>
        <Grid>
          <Col style={{ width: "85%" }}>
            <Item rounded style={[styles.inputBox, styles.inputMargin]}>
              <Feather name="search" size={24} style={styles.searchIcon} />
              <Input
                placeholderTextColor={Colors.placeholder}
                placeholder="Search Anything ..."
              />
            </Item>
          </Col>
          <Col style={{ width: "10%" }}>
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
          </Col>
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayLight,
    // flex: 1,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 16,
  },
  title: {
    ...Typography.title,
    marginTop: 10,
    marginBottom: 15,
  },
  text: {
    ...Typography.bodyText,
    color: Colors.grayDark,
  },
  innerContent: {
    margin: Spacing.sectionPadding,
  },
  inputBox: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    marginLeft: 0,
  },
  inputMargin: {
    marginTop: 30,
    borderWidth: 0,
    borderColor: Colors.white,
    width: "100%",
  },
  searchIcon: {
    color: Colors.placeholder,
    marginLeft: 20,
  },
  button: {
    ...Platform.select({
      ios: {
        shadowColor: Colors.primary,
        shadowOffset: {
          width: 0,
          height: 20,
        },
        shadowOpacity: 0.5,
        shadowRadius: 19.0,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
