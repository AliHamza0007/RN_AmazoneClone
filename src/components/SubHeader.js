import {Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SubHeader = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#CEA968', '#E4C083']}>
      <View className="flex flex-row  items-center gap-2 px-5 py-2">
        <EvilIcons name="location" size={25} color="#232F3E" />
        <Text className="text-lg">Deliver to Ali Price 0124 </Text>
        <FontAwesome name="angle-down" size={25} color="#232F3E" />
      </View>
    </LinearGradient>
  );
};

export default SubHeader;
