import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
// import * as Svg from 'react-native-svg';
// import Image1 from "./image1";

const { width, height } = Dimensions.get("window");
const SPACING = 20;
const data = [
  { id: 1, image: require("../assets/image.svg"), title: 'Ttaera fragrance', price: '6' },
  { id: 2, image: require("../assets/image-1.svg"), title: 'Lean fragrance', price: '6' },
  { id: 3, image: require("../assets/image-2.svg"), title: 'Lateen fragrance', price: '6' },
];

export default function FeaturedProducts() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
        renderItem={({ item, key }) => {
          return (
            <View>
              <Image
                source={item.image}
                style={{
                  width: width - 2 * SPACING,
                  height: 300,
                  marginLeft: SPACING,
                  marginRight: SPACING,
                }}
              />
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
