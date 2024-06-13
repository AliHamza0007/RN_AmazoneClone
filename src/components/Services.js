import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import amazonPay from '../assets/amazon-pay.png'
import sendMoney from '../assets/send-money.jpg'
import payBill from '../assets/pay-bills.jpeg'
import scanQR from '../assets/scan-qr.jpeg'
import { ServicesData } from '../Utils'
const Services = () => {
  return (<View className="flex flex-row  py-5 h-56 ">
<View className=" w-[40%] flex flex-row flex-wrap justify-around items-center ">

<View className="flex mb-8 items-center justify-center">

  <Image source={amazonPay} className="w-12 h-12 rounded-full" />
  <Text className="text-center text-md">Amazon Pay</Text>
</View>

<View className="flex mb-8 items-center justify-center">

  <Image source={payBill} className="w-12 h-12 rounded-full" />
  <Text className="text-center text-md"> Pay Bills</Text>
</View>
<View className="flex mb-8 items-center justify-center">

<Image source={sendMoney} className="w-12 h-12 rounded-full" />
<Text className="text-center text-md">Send money</Text>
</View>
<View className="flex mb-8 items-center justify-center">

  <Image source={scanQR} className="w-12 h-12 rounded-full" />
  <Text className="text-center text-md">ScanQR</Text>
</View>
</View>
 <View className="px-3 w-[60%]">
      {ServicesData.length > 0 ? (
        <FlatList
          data={ServicesData}
          horizontal={true}
          autoplay
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Text className="text-lg font-bold w-[85%] flex flex-wrap">{item.title}</Text>
              <Image source={item.image} className="w-[85%] h-full  " />
            </View>
          )}
        />
      ) : (
        <ActivityIndicator size={'large'} color={'#E4C083'} />
      )}
</View>
</View>
    )
}

export default Services