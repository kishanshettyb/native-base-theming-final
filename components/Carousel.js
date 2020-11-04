import * as React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel";
import { Colors, Typography } from "../styles/index";

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
          desc: "Complete Blender Creator: Learn 3D Modelling for Beginners",
          color: "#4136F1",
        },
        {
          title: "Item 2",
          text: "Text 2",
          desc: "Photography Masterclass: A Complete Guide to Photography",
          color: "#8543FF",
        },
        {
          title: "Item 3",
          text: "Text 3",
          desc: "Java Programming Masterclass for Software Developers",
          color: "#4136F1",
        },
        {
          title: "Item 4",
          text: "Text 4",
          desc: "Complete Blender Creator: Learn 3D Modelling for Beginners",
          color: "#8543FF",
        },
        {
          title: "Item 5",
          text: "Text 5",
          desc: "Complete Blender Creator: Learn 3D Modelling for Beginners",
          color: "#4136F1",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={[
          styles.carouselView,
          {
            backgroundColor: item.color,
          },
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.text}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            layout={"stack"}
            layoutCardOffset={18}
            data={this.state.carouselItems}
            sliderWidth={320}
            itemWidth={320}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  carouselImage: {
    width: 320,
    borderRadius: 5,
    height: 375,
    padding: 50,
    borderRadius: 20,
  },
  title: {
    ...Typography.titleText,
    color: Colors.white,
  },
  subTitle: {
    ...Typography.title,
    color: Colors.white,
    marginBottom: 5,
    marginTop: 5,
  },
  carouselView: {
    borderRadius: 5,
    height: 375,
    padding: 50,
    borderRadius: 20,
  },
  desc: {
    ...Typography.bodyText,
    color: Colors.white,
  },
});
