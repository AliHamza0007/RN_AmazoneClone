import {View, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      colors={['#CEA968', '#E4C083']}>
      <View className="my-2 flex flex-row  px-4  justify-between items-center">
        <View className="relative w-[88%]">
          <TextInput
            className="text-lg  px-12 border  rounded-xl bg-white "
            placeholder="Search"
          />
          <View className="absolute inset-0 left-3 top-2">
            <Ionicons name="search" size={30} color="#232F3E" />
          </View>
          <View className="absolute inset-0 right-3 top-2">
            <AntDesign name="scan1" size={30} color="#232F3E" />
          </View>
        </View>
        <Feather name="mic" size={30} color="#232F3E" />
      </View>
    </LinearGradient>
  );
};

export default Header;
