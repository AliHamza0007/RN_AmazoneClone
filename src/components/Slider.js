import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SliderData } from '../Utils'; // Ensure you have your SliderData defined in Utils or replace this with your actual data

const MyCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(Dimensions.get('screen').width);

  useEffect(() => {
    const handleResize = () => {
      setSliderWidth(Dimensions.get('screen').width);
    };

    Dimensions.addEventListener('change', handleResize);

    return () => {
      Dimensions.removeEventListener('change', handleResize);
    };
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={SliderData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        autoplayInterval={3000}
        autoplay
        loop
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={SliderData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="green"
        inactiveDotColor="#FFFFFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200, // You can adjust this height based on your needs
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    left: '15%',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  inactiveDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
});

export default MyCarousel;
