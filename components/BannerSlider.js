
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('window')
const  SPACING = 20
const data = [
    {id:1, image:require('../assets/banner.png')},
    {id:2, image:require('../assets/banner.png')},
    {id:3, image:require('../assets/banner.png')},
    {id:4, image:require('../assets/banner.png')},
]


export default function BannerSlider() {
  return (
    <View style={styles.container}>
     <FlatList 
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        renderItem={({item, key})=>{
         return   <View>
                 <Image source={item.image} style={{width:width -2*SPACING, height:300,marginLeft:SPACING, marginRight:SPACING}}/>
            </View>
           
        }}
        keyExtractor={(item,index)=>item.id.toString()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20
  },
});
