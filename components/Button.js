import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Button(props) {
  return (
    <View style={styles.container}>
      <Text>
      {props.show ? (
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontSize: 19 }}>{props.children}</Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#000000",
    borderRadius: 18,
    width: "100%",
    alignItems: "center",
    paddingVertical: 18,
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
  },
});
