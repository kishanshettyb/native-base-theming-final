import React from "react";
import { Text, StyleSheet, Image, FlatList } from "react-native";
import { View } from "native-base";
import data from "../constants/cources";
import { LinearGradient } from "expo-linear-gradient";
import { Spacing, Typography, Colors } from "../styles";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function FeaturedCourses() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.featureCard}>
          <Image style={styles.image} source={item.image} />
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>
            {item.subtitle}
          </Text>
          <Text style={styles.ratingText}>
            4.5{""}{" "}
            <MaterialIcons name="star" size={12} color={Colors.warning} />
            <MaterialIcons name="star" size={12} color={Colors.warning} />
            <MaterialIcons name="star" size={12} color={Colors.warning} />
            <MaterialIcons name="star" size={12} color={Colors.warning} />
            <MaterialIcons name="star-half" size={12} color={Colors.warning} />
          </Text>
          <Text style={{ marginTop: 10 }}>
            <Text style={styles.price}>
              <FontAwesome name="dollar" size={15} color="black" /> {item.price}{" "}
            </Text>{" "}
            <Text style={styles.discountPrice}>
              {" "}
              <FontAwesome name="dollar" size={15} color={Colors.gray} />
              {item.price}
            </Text>
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 135,
    borderRadius: 5,
    marginRight: 20,
    marginBottom: 20,
  },
  featureCard: {
    width: 200,
    marginRight: 20,
  },
  linearGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  imageConatiner: {
    margin: Spacing.sectionPadding,
    position: "relative",
  },
  title: {
    ...Typography.screenFooter,
    marginBottom: 10,
  },
  price: {
    ...Typography.screenFooter,
  },
  discountPrice: {
    ...Typography.screenFooter,
    color: Colors.grayLight,
    fontFamily: "Poppins_semi_bold",
    textDecorationLine: "line-through",
  },
  subTitle: {
    ...Typography.bodyText,
  },
  ratingText: {
    paddingTop: 10,
    ...Typography.titleBoldSmall,
    color: Colors.warning,
  },
});
