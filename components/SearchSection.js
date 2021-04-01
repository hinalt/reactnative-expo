
import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, Image } from 'react-native';
import SvgUri from "expo-svg-uri";

export default function SearchSection() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
     
     <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{backgroundColor:'#F0F3F5', borderWidth:1, borderColor:'#707070', width:200}}
    />
    <View>
    <SvgUri
      width="200"
      height="200"
      source={{
        uri: "../assets/delivery.svg"
      }}
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:20,
    flexDirection:'row',
    paddingHorizontal:10
    
  },
});
