
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button(props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={{color:'white', fontSize:19}}>{props.children}</Text>  
        </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10
  },
  button:{
      backgroundColor:'#000000',
      borderRadius:18,
      width:'100%',
      alignItems:'center',
      paddingVertical:18,
    
  }
});
