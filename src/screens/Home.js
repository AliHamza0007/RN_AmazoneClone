import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Services from '../components/Services';
import { ScrollView } from 'react-native';
import Deals from '../components/Deals';
import Brands from '../components/Brands';

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <SubHeader />
      <Categories />
      <Slider />
      <Services/>
      <Deals/>
      <Brands/>
    </ScrollView>
  );
};

export default Home;
