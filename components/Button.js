import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Button(props) {
  return (
    <View style={styles.container}>
    
      {props.show ? (
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontSize: 19 }}>{props.children}</Text>
        </TouchableOpacity>
      ) : (
      null
      )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:10
  },
  button: {
    backgroundColor: "#000000",
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 18,
    width:'100%',
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
  },
});
