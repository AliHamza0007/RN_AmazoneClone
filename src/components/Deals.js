import {View, Text,  Image, TouchableOpacity} from 'react-native';
import React from 'react';
import RecommendProduct from '../assets/recommend.jpg';

const Deals = () => {
  return (
    <View >
      <Text className="font-bold text-2xl text-black mb-3"
       >Recommended Deal for you</Text>
      <Image className="w-full h-52" source={RecommendProduct} />
      <View >
        <View  className="flex flex-row items-center gap-3 pt-3">
          <TouchableOpacity>
            <Text   className="bg-red-600 px-3 text-lg text-white rounded-xl font-semibold">18% off</Text>
          </TouchableOpacity>
          <Text  className="font-semibold text-lg">Deal</Text>
        </View>
        <View className="flex flex-row items-center gap-2" >
          <Text className="font-extrabold text-lg">₹ 1,549.00</Text>
          <Text>M.R.P.</Text>
          <Text className="font-extrabold ">₹ 1895.00</Text>
        </View>
        <Text className="font-extrabold text-lg">
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>
        <Text className="text-blue-500 text-lg  mb-2">See all deals</Text>
      </View>
    
    </View>
  );
};


export default Deals;
