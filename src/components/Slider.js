import React, {useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SliderData} from '../Utils';

const MyCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item}) => {
    return (
      <View>
        <Image source={item.image} className="w-full h-60" />
      </View>
    );
  };

  const sliderWidth = Dimensions.get('screen').width;

  return (
    <View className="relative">
      <Carousel
        data={SliderData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        autoplayInterval={2000}
        autoplay
        loop
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={SliderData.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          left: '15%',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{width: 15, height: 15, borderRadius: 10}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="green"
        inactiveDotColor="#FFFFFF"
      />
    </View>
  );
};

export default MyCarousel;
