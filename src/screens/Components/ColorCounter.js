import react ,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


const ColorCounter=({color,onIncrease,onDecrease})=>{
    return <View>
        <Text>{color}</Text>
        <Button  onPress ={()=> onIncrease()}  title={`Increase ${color}`}/>   
        <Button onpress ={()=> onDecrease()} title={`Decrease ${color}`}/>

        </View> //buttom is a react defined variable  so we have to us onPress(a already defined variable)
                //but ColorCounter that is in the parent componnt is made by us so we can use any variabl for providing title or onPress( like we used onIncrese)
};


const styles= StyleSheet.create({})

 
export default ColorCounter;