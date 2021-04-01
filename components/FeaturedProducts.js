import React, {useState} from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import TransparentButton from "./TransparentButton";
import AddSubtract from "./AddSubtract";

const { width, height } = Dimensions.get("window");
const SPACING = 10;


export default function FeaturedProducts(props) {
  let data = [
    {
      id: 1,
      image: require("../assets/Image.png"),
      title: "Ttaera fragrance",
      price: "6",
      addToCart: false,
    },
    {
      id: 2,
      image: require("../assets/Image-1.png"),
      title: "Lean fragrance",
      price: "6",
      addToCart: false,
    },
    {
      id: 3,
      image: require("../assets/Image-2.png"),
      title: "Lateen fragrance",
      price: "6",
      addToCart: false,
    },
  ];
  const [productData, setProductData] = useState(data);

  const addToCart = (item) => {
    let newArray = [...productData];
    let addedItemObj = newArray.find((x) => {
      if (x.id === item.id) {
        return (item.addToCart = true);
      }
    });
    setProductData(newArray);
    props.updateCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Featured</Text>
      <FlatList
        data={productData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, key }) => {
          return (
            <View
              key={item.id}
              style={{ marginLeft: SPACING, marginRight: SPACING }}
            >
              <Image
                source={item.image}
                style={{
                  width: 142,
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price} KWD</Text>
              {item.addToCart ? (
                <AddSubtract />
              ) : (
                <TransparentButton clicked={() => addToCart(item)}>
                  Add to Order
                </TransparentButton>
              )}
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
    justifyContent: "center",
    paddingTop: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
  },
  price: {
    color: "#FD8F25",
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: SPACING,
    includeFontPadding: false,
  },
});
