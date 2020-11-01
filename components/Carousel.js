import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";
import { Colors } from "../styles/index";
function stackScrollInterpolator(index, carouselProps) {
  const range = [1, 0, -1, -2, -3];
  const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  const outputRange = range;
  return { inputRange, outputRange };
}

function stackAnimatedStyles(index, animatedValue, carouselProps) {
  const sizeRef = carouselProps.vertical
    ? carouselProps.itemHeight
    : carouselProps.itemWidth;
  const translateProp = carouselProps.vertical ? "translateY" : "translateX";

  const cardOffset = 18;
  const card1Scale = 0.9;
  const card2Scale = 0.8;

  const getTranslateFromScale = (index, scale) => {
    const centerFactor = (1 / scale) * index;
    const centeredPosition = -Math.round(sizeRef * centerFactor);
    const edgeAlignment = Math.round((sizeRef - sizeRef * scale) / 2);
    const offset = Math.round((cardOffset * Math.abs(index)) / scale);

    return centeredPosition - edgeAlignment - offset;
  };

  return {
    opacity: animatedValue.interpolate({
      inputRange: [-3, -2, -1, 0],
      outputRange: [0, 0.5, 0.75, 1],
      extrapolate: "clamp",
    }),
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [-2, -1, 0, 1],
          outputRange: [card2Scale, card1Scale, 1, card1Scale],
          extrapolate: "clamp",
        }),
      },
      {
        [translateProp]: animatedValue.interpolate({
          inputRange: [-3, -2, -1, 0, 1],
          outputRange: [
            getTranslateFromScale(-3, card2Scale),
            getTranslateFromScale(-2, card2Scale),
            getTranslateFromScale(-1, card1Scale),
            0,
            sizeRef * 0.5,
          ],
          extrapolate: "clamp",
        }),
      },
    ],
  };
}
export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: Colors.primary,
          borderRadius: 5,
          height: 250,
          padding: 50,
          borderRadius: 20,
          // scaleX: -1,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            layout={"stack"}
            layoutCardOffset={18}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}
