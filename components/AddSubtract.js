import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TransparentButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 24, color: "#FD8F25" }}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 24, color: "#FD8F25" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row'   
  },
  button: {
    color: "#FD8F25",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth:  1, 
    fontWeight: 'bold', 
    borderStyle:  'solid',
    borderColor: "#CDCDD6",
  },
});
