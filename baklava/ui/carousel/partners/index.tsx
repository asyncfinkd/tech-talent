import Actions from "../../../actions/ui/carousel/partners";
import React from "react";

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
      <Actions.View style={styles.carouselItemContainer}>
        <Actions.Image
          source={{ uri: `${item.image}` }}
          style={styles.carouselImageContainer}
        />
      </Actions.View>
    );
  };
  return (
    <>
      <Actions.View
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
        <Actions.Carousel
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
        />
      </Actions.View>
    </>
  );
}

const styles = Actions.StyleSheet.create({
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
