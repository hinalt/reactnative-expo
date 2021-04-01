import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TransparentButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.clicked}>
        <Text style={{ fontSize: 19 }}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5    
  },
  button: {
    color: "#000000",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth:  1,  
    borderStyle:  'solid',
    borderColor: "#CDCDD6",
  },
});
