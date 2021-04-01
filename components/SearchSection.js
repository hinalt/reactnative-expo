
import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, Image } from 'react-native';
import DeliverySvg from '../assets/delivery'
import StoreSvg from '../assets/store'

export default function SearchSection() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
     
     <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{backgroundColor:'#F0F3F5', width:'68%',borderRadius:10}}
    />
    <View/>
    <View style={styles.iconContainer}>
    <DeliverySvg/>
    <Text style={styles.textStyle}>Delivery</Text>
    </View>
    <View style={styles.iconContainer}> 
    <StoreSvg/>
    <Text style={styles.textStyle}>Pickup</Text>
    </View>
    
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:20,
    flexDirection:'row',
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'space-between',
    
  },
  iconContainer:{
    backgroundColor:'#F0F3F5',
    padding:8,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle:{
    fontSize:11
  }
});
