
import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';

export default function Paginator() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/logo.png')}/>
            <View style={{marginLeft:10}}  >
                <Text style={styles.text1}>Ttaera</Text>
                <Text style={styles.text2}>All about home fragrance</Text>
            </View>
        </View>
        <View>
            <Image source={require('../assets/menu.png')}/>
        </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center'
  },

  text1:{
    fontSize:30,
    fontWeight:'bold',
  },
  text2:{
      fontSize:14,
      opacity:0.6,
     
},
});
