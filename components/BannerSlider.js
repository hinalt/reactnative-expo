
import React, {useState, useRef} from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import Paginator from './Paginator'

const {width, height } = Dimensions.get('window')
const  SPACING = 20
const data = [
    {id:1, image:require('../assets/banner.png')},
    {id:2, image:require('../assets/banner.png')},
    {id:3, image:require('../assets/banner.png')},
    {id:4, image:require('../assets/banner.png')},
]


export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
 const slidesRef = useRef(null)
  const viewableItemsChanged = useRef(({viweableItems})=>{

  }).current
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current
  return (
    <View style={styles.container}>
     <FlatList 
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        keyExtractor={(item,index)=>item.id.toString()}
        onScroll ={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],
          {useNativeDriver:false})}
          onViewableItemsChanged = {viewableItemsChanged}
          viewabilityConfig = {viewConfig}
          scrollEventThrottle = {32}
          bounces={false}
          ref={slidesRef}
        renderItem={({item, key})=>{
         return   <View>
                 <Image source={item.image} style={{width:width -2*SPACING, height:300,marginLeft:SPACING, marginRight:SPACING}}/>
            </View>
           
        }}
       />
        <Paginator data={data} scrollX = {scrollX}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:20
  },
});
