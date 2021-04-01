import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import BannerSlider from "./components/BannerSlider";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import Button from "./components/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <BannerSlider />
        <SearchSection />
        <FeaturedProducts />
        <Categories />
        <Button>Order Now</Button>
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
