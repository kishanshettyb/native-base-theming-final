import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text, CardItem } from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import { Colors, Typography, Spacing } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

const cards = [
  {
    id: 1,
    title: "Marketting",
    subTitle: "60 Cources",
    image: require("../assets/imgs/cat-1.png"),
    color1: "#A84BEA",
    color2: "#9918F6",
  },
  {
    id: 2,
    title: "Finance",
    subTitle: "40 Cources",
    image: require("../assets/imgs/cat-2.png"),
    color1: "#4136F1",
    color2: "#5F56EB",
  },
  {
    id: 3,
    title: "Web Designing",
    subTitle: "20 Cources",
    image: require("../assets/imgs/cat-3.png"),
    color1: "#4136F1",
    color2: "#5F56EB",
  },
  {
    id: 4,
    title: "UI & UX",
    subTitle: "20 Cources",
    image: require("../assets/imgs/cat-4.png"),
    color1: "#A84BEA",
    color2: "#9918F6",
  },
];

export default function Categories() {
  return (
    <View>
      <Grid>
        {cards.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <Row key={index}>
                <Col>
                  <LinearGradient
                    colors={[cards[index].color1, cards[index].color2]}
                    style={{
                      height: 200,
                      borderRadius: 20,
                      marginRight: 15,
                      marginBottom: 30,
                    }}
                  >
                    <CardItem
                      style={[styles.cardRight, styles.card]}
                      key={cards[index].id}
                    >
                      <Text style={styles.title}>{cards[index].title}</Text>
                      <Text style={styles.subTitle}>
                        {cards[index].subTitle}
                      </Text>
                      <Image style={styles.image} source={cards[index].image} />
                    </CardItem>
                  </LinearGradient>
                </Col>
                <Col style={{ marginTop: -20 }}>
                  <LinearGradient
                    colors={[cards[index + 1].color1, cards[index + 1].color2]}
                    style={{
                      borderRadius: 20,
                      marginLeft: 15,
                      marginTop: 20,
                      height: 200,
                    }}
                  >
                    <CardItem
                      key={cards[index + 1].id}
                      style={[styles.cardLeft, styles.card]}
                    >
                      <Text style={styles.title}>{cards[index + 1].title}</Text>
                      <Text style={styles.subTitle}>
                        {cards[index + 1].subTitle}
                      </Text>
                      <Image
                        style={styles.image}
                        source={cards[index + 1].image}
                      />
                    </CardItem>
                  </LinearGradient>
                </Col>
              </Row>
            );
          }
        })}
      </Grid>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    height: 200,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 7.65,
    elevation: 7,
  },
  cardRight: {
    backgroundColor: "transparent",
    marginBottom: 10,
    width: "100%",
    marginRight: 20,
  },
  cardLeft: {
    marginLeft: 20,
    backgroundColor: "transparent",
    marginBottom: 10,
    width: "100%",
  },
  image: {
    height: 120,
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    resizeMode: "contain",
    alignItems: "baseline",
  },
  title: {
    ...Typography.title,
    color: Colors.white,
    position: "absolute",
    top: 25,
    left: 25,
  },
  subTitle: {
    ...Typography.bodyText,
    color: Colors.white,
    opacity: 0.6,
    position: "absolute",
    top: 55,
    left: 25,
  },
});
