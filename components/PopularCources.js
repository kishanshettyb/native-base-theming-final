import React from "react";
import { Text, StyleSheet, Image, FlatList } from "react-native";
import { View } from "native-base";
import data from "../constants/cources";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Spacing, Typography } from "../styles";

export default function PopularCources() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.imageConatiner}>
          <Image style={styles.image} source={item.image} />
          <View style={{ padding: 20 }}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
              {item.title}
            </Text>
          </View>
          {/* <View style={{ padding: 20 }}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
              {item.title}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.subTitle}
            >
              {item.subtitle}
            </Text>
          </View> */}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 185,
    width: 250,
    borderRadius: 10,
  },
  linearGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  imageConatiner: {
    marginRight: 20,
    height: 185,
    width: 250,
    position: "relative",
  },
  title: {
    ...Typography.screenFooter,
    color: Colors.black,
    position: "absolute",
    top: 10,
  },
  subTitle: {
    ...Typography.bodyText,
    position: "absolute",
    top: 10,
  },
});
