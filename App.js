import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BannerSlider from "./components/BannerSlider";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BannerSlider />
      <StatusBar style="auto" />
      <FeaturedProducts />
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
