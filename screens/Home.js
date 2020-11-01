import React from "react";
import { Text, StyleSheet, Image, Platform, ScrollView } from "react-native";
import {
  Header,
  Left,
  Right,
  Container,
  Content,
  Input,
  Item,
} from "native-base";
import GradientButton from "react-native-gradient-buttons";
import { Colors, Typography, Spacing } from "../styles";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Col, Grid } from "react-native-easy-grid";
import MyCarousel from "../components/Carousel";
import Heading from "../components/Heading";
import PopularCources from "../components/PopularCources";
import FeaturedCourses from "../components/FeaturedCourses";

const data = [
  {
    uri:
      "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg",
    imageSize: {
      margin: 200,
    },
  },
  {
    uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg",
  },
  {
    uri:
      "https://stimg.cardekho.com/images/carexteriorimages/360x240/Ferrari/Ferrari-Portofino/047.jpg",
  },
  {
    uri: "https://rollr.io/wp-content/uploads/2017/02/mini-home-car.jpg",
  },
];

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Content style={styles.innerContent}>
          <Text style={styles.title}>Hello, John !</Text>
          <Text style={styles.text}>Find a course you want to learn</Text>
          <Grid style={styles.inputGridMargin}>
            <Col size={85}>
              <Item rounded style={styles.inputBox}>
                <Feather name="search" size={24} style={styles.searchIcon} />
                <Input
                  placeholderTextColor={Colors.placeholder}
                  placeholder="Search Anything ..."
                />
              </Item>
            </Col>
            <Col size={15}>
              <GradientButton
                style={styles.buttonLight}
                text={
                  <MaterialCommunityIcons
                    name="filter-variant"
                    size={24}
                    color="white"
                  />
                }
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
          <MyCarousel />
          <Heading
            heading="Popular Cources"
            btn="View All"
            link="HomeDetails"
          />
          <PopularCources />
          <Heading
            heading="Featured Cources"
            btn="View All"
            link="HomeDetails"
          />

          <FeaturedCourses />
          <Heading
            heading="Popular Cources"
            btn="View All"
            link="HomeDetails"
          />
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayThin,
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
    height: 56,
    borderWidth: 0,
    borderColor: Colors.white,
    width: "110%",
  },
  inputGridMargin: {
    marginTop: 30,
    marginBottom: 50,
  },
  searchIcon: {
    color: Colors.placeholder,
    marginLeft: 20,
  },
  buttonLight: {
    marginTop: 8,
    marginRight: 0,
    alignSelf: "flex-end",
  },
  heading: {
    marginTop: 60,
    marginBottom: 30,
  },
  link: { color: Colors.primary },
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
