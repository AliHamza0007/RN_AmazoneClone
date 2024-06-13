import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductScreen = () => {
  const url = 'https://api.escuelajs.co/api/v1/products/';

  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pID, setPIDModal] = useState('');

  const getProducts = async () => {
    const {data} = await axios.get(url);

    data &&
      setProducts(
        data?.filter(f => f?.category?.name === route?.params?.item?.name),
      );
  };
  const handleAddCart = id => {
    console.log(id);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };
  const getFilterProduct = () => {
    setSingleProduct(products.filter(f => f.id === pID));
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getFilterProduct();
    // singleProduct&&
    // console.log(singleProduct)
    // console.log(pID)
  }, [pID]);
  const route = useRoute();

  return (
    <View className="container  p-3 mb-20">
      <Modal animationType="slide" transparent={true} visible={showModal}>
        {singleProduct?.length > 0 ? (
          singleProduct.map(p => (
            <View
              key={p.id}
              className="flex h-full justify-center items-center  ">
              <View className="w-[90%] h-[80%]    bg-white  rounded-2xl overflow-hidden">
                <TouchableOpacity
                  className="absolute right-4 top-3 z-30"
                  onPress={() => setShowModal(false)}>
                  <AntDesign name="closecircle" size={30} color="#E4C083" />
                </TouchableOpacity>
                <ScrollView>
                  <View>
                    <View>
                      <Image className="w-full h-[300px] " src={p.images[0]} />
                    </View>
                    <View className="pl-4 mb-10">
                      <Text className="text-xl font-bold">{p?.title}</Text>
                      <Text className="text-xl font-semibold text-blue-400">
                        {p?.price}$
                      </Text>
                      <Text className="text-lg ">{p?.description}</Text>
                      <TouchableOpacity onPress={() => handleAddCart(p.id)}>
                        <Text className="bg-yellow-500 text-white text-xl font-bold text-center shadow-2xl rounded-2xl py-2 mt-5">
                          Add To Cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          ))
        ) : (
          <ActivityIndicator size={'large'} color={'#E4C083'} />
        )}
      </Modal>

      <Text className="text-3xl font-bold">Results</Text>
      <Text className="text-xl font-semibold mb-3">
        {route?.params?.item?.name} : {products?.length}
      </Text>
      {products?.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
                setPIDModal(item.id);
              }}
              className="flex flex-row items-center border mb-5">
              <View className="w-[45%]  p-1 ">
                <Image
                  src={item.images[0]}
                  className="rounded-2xl  w-full h-[200px]"
                />
              </View>
              <View className="px-1 w-[55%]">
                <Text className="font-bold text-xl flex flex-wrap flex-row">
                  {item.title}
                </Text>
                <Text> {item?.description?.substring(0, 100)}</Text>
                <Text className="text-blue-500 font-semibold">
                  Price : {item.price}$
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator size={'large'} color={'#E4C083'} />
      )}
    </View>
  );
};

export default ProductScreen;
