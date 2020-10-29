import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import * as Colors from "../styles/colors";

const slides = [
  {
    key: "one",
    title: "Digital Marketing",
    text:
      "We provide best digital marketing services and we design best e-Com website in bangalore.",
    image: require("../assets/imgs/intro-1.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: "two",
    title: "Social Marketing",
    text:
      "Detailed client reviews of the leading social media marketing agencies and consultants.",
    image: require("../assets/imgs/intro-1.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: "three",
    title: "SEO Optimization",
    text:
      "We don't work just for profit as other SEO Companies, rather we take pride in our values.",
    image: require("../assets/imgs/intro-1.jpg"),
    backgroundColor: "#fff",
  },
];

export default class WelcomeScreen extends Component {
  _renderItem = ({ item }) => {
    return (
      <SafeAreaView
        style={{
          backgroundColor: item.backgroundColor,
          height: "100%",
        }}
      >
        <View style={styles.centerContent}>
          <Image style={styles.centerImage} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </SafeAreaView>
    );
  };
  _onSkip = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.navigate("SignIn");
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.navigate("SignIn");
  };
  render() {
    return (
      <View style={{ height: "100%" }}>
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          dotStyle={styles.dots}
          activeDotStyle={styles.activeDot}
          onDone={this._onDone}
          onSkip={this._onSkip}
          skipLabel={<Text style={styles.skipBtn}>Skip</Text>}
          nextLabel={<Text style={styles.nextBtn}>Next</Text>}
          doneLabel={<Text style={styles.nextBtn}>Sign Up</Text>}
          showSkipButton={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "Poppins_semi_bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    color: Colors.primary,
    marginTop: 40,
  },
  text: {
    fontFamily: "Poppins_medium",
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
    color: "#000",
  },
  centerImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  dots: {
    backgroundColor: "#ddd",
  },
  activeDot: {
    backgroundColor: Colors.primary,
  },
  nextBtn: {
    fontSize: 15,
    color: Colors.primary,
    fontFamily: "Poppins_semi_bold",
  },
  skipBtn: {
    fontSize: 15,
    color: Colors.primary,
    fontFamily: "Poppins_semi_bold",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
