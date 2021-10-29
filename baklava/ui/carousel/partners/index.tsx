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
    {
      image: "https://tt.ge/logos/lavapi.png",
    },
    {
      image: "https://tt.ge/logos/redberry.png",
    },
    {
      image: "https://tt.ge/logos/singular.png",
    },
    {
      image: "https://tt.ge/logos/echolize.png",
    },
    {
      image: "https://tt.ge/logos/meama.png",
    },
    {
      image: "https://tt.ge/logos/europebet.png",
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
      <View
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f6f8fb",
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
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
