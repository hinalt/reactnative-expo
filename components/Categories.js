
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('window')
const SPACING = 10
const data = [
    {id:1, image:require('../assets/Image-3.png')},
    {id:2, image:require('../assets/Image-4.png')},
    {id:3, image:require('../assets/Image-5.png')},
    {id:4, image:require('../assets/Image-6.png')}
]

export default function Categories() {
  return (
    <View style={styles.container}>
      
        <Text style={styles.textStyle}>Categories</Text>
       
        
    <FlatList
    horizontal={true}
    data={data}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item, index)=>item.id.toString()}
    renderItem={({item, index})=>{
       return <View style={{ marginHorizontal:SPACING}}>
           <Image source={item.image} style={{width:width/2 -2.5*SPACING}}/>
        </View>
    }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    backgroundColor: '#fff',
  },
  textStyle:{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:SPACING,
      includeFontPadding:false
  }
});
