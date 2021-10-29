import React from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function CarouselPartners() {
  const carouselItems = [
    {
      image: "https://tt.ge/logos/omedia.png",
    },
    {
      image: "https://tt.ge/logos/phubber.png",
    },
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <Text>{item.image}</Text>
      </View>
    );
  };
  return (
    <>
      <Carousel
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
      />
    </>
  );
}
