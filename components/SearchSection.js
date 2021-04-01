
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
      style={{backgroundColor:'#F0F3F5', borderWidth:1, borderColor:'#707070', width:'65%',borderRadius:10}}
    />
    <View/>
    <View style={styles.iconContainer}>
    <DeliverySvg/>
    </View>
    <View style={styles.iconContainer}> 
    <StoreSvg/>
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
    padding:15,
    borderRadius:10
  }
});
