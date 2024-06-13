import {View, Text, Image} from 'react-native';
import React from 'react';
import Brand1 from '../assets/brand1.jpeg';
import Brand2 from '../assets/brand2.jpeg';
import Brand3 from '../assets/brand3.jpeg';
import Brand4 from '../assets/brand4.jpeg';

const Brands = () => {
  return (
      <View  className="bg-gray-100 border-t-2">
        <Text  className="font-bold text-2xl text-black mb-3" >Brands of the day</Text>
        <View className="flex flex-row justify-between  mb-5" >
          <View className="  w-[48%]"  >
            <Image   className="h-40 w-full"    source={Brand1}  />
            <Text className="pl-4 ">
              Min. 20% off | CaratLane Diamond Nek lace
            </Text>
          </View>
          <View className="w-[48%]"  >
            <Image   className="h-40 w-full "    source={Brand2} />
            <Text className="pl-4 ">
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-between  mb-5" >
        <View className="  w-[48%]"  >
            <Image   className="h-40 w-full"   source={Brand3}  />
            <Text className="pl-4 ">
              Heels - Upto 50% OFF on Heeled Sandals, High Heel            </Text>
          </View> 
           <View className="  w-[48%]"  >
            <Image   className="h-40 w-full"      source={Brand4}  />
            <Text className="pl-4 ">
              Sony 60W Bluetooth SoundBar Speaker Audio Engine
            </Text>
          </View>
        </View>
      </View>
  );
};


export default Brands;
