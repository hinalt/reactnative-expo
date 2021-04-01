import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import BannerSlider from "./components/BannerSlider";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import Button from "./components/Button";

export default function App() {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const updateCart = () => {
    setIsCartEmpty(false);
    console.log(isCartEmpty);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerSlider />
        <SearchSection />
        <FeaturedProducts updateCart={updateCart}/>
        <Categories />
        <Text>
         {!isCartEmpty ? <Button>Order Now</Button> : ''}
         </Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
});
