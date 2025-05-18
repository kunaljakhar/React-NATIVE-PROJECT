import React , {useState} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';


const CounterScreen=()=>{
    const[Counter,setCounter]=useState(0);
     return(
      <View>
        <Button title='Increase count' 
        
        onPress={()=>{
            setCounter(Counter+1);
        }}/>

        <Button title='Decrease count' 
        onPress={()=>{
           setCounter(Counter-1);
        }}/>


        <Text>Current Count: {Counter}</Text>
     </View>
     );
};
const styles= StyleSheet.create({});



export default CounterScreen;

