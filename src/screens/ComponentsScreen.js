import React from 'react';
import {Text,StyleSheet,View}from 'react-native';
 

const ComponentScreen = ()=>{
    const kunal= "my name is kunal "
    
    return  <View>
    <Text style={styles.textStyle}>Geeting started with react native! </Text> 
    <Text style={styles.subHeader}> {kunal}</Text>
    
    </View>
    
 };

const styles = StyleSheet.create({  
    textStyle: {
        fontSize:45
    },
    subHeader:{
        fontSize:20
    }

}); 


export default ComponentScreen;