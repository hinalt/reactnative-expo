
import React from 'react';
import { StyleSheet, Text, View, Animated, useWindowDimensions} from 'react-native';

export default function Paginator({data, scrollX}) {
  const { width } = useWindowDimensions()
 
  return (
    <View style={styles.container}>
     {data.map((_,i)=>{
       const inputRange = [(i-1)*width, i*width, (i+1)*width]
       const dotWidth = scrollX.interpolate({
         inputRange,
         outputRange:[12,25,12],
         extrapolate:'clamp'
       })
       return <Animated.View style={[styles.dot,{width:dotWidth}]} key={i}>

       </Animated.View>
     })}
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flexDirection:'row',
 paddingLeft:30,
 paddingRight:15,
  position:'absolute',
  bottom:10
  },
  dot:{
    height:3,
    backgroundColor:'#FFFFFF',
    marginHorizontal:8,
    borderRadius:8
  }
});
