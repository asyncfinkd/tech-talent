import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
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
      <View style={styles.carouselItemContainer}>
        <Image
          source={{ uri: `${item.image}` }}
          style={styles.carouselImageContainer}
        />
      </View>
    );
  };
  return (
    <>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Carousel
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  carouselItemContainer: {
    borderColor: "red",
    borderWidth: 1,
    padding: 20,
    display: "flex",
    alignItems: "center",
  },
  carouselImageContainer: {
    width: "100%",
    height: 70,
    display: "flex",
    resizeMode: "contain",
    alignItems: "center",
  },
});
