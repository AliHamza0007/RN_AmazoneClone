import {View, Text, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
const api = 'https://api.escuelajs.co/api/v1/categories';
import axios from 'axios';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native'
const Categories = () => {
  const [category, setCategory] = useState([]);
  const getCategories = async () => {
    const {data} = await axios.get(api);
    data && setCategory(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const navigation=useNavigation();
  return (
    <View className="py-3 ">
      {category.length > 0 ? (
        <FlatList
          data={category}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>{
              navigation.navigate('ProductScreen',{item})

              
            }} className="mx-2">
              <Image src={item.image} className="w-20 h-20 rounded-2xl  " />
              <Text className="text-center text-md">{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator size={'large'} color={'#E4C083'} />
      )}
    </View>
  );
};

export default Categories;
