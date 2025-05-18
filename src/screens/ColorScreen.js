import React,{ useState} from 'react';
import {View,Button,Text,StyleSheet,FlatList}from 'react-native';

const ColorScreen=()=>{
    const [Colors,setColors]=useState([]);
    return <View>
        <Button title="Add a color" onPress={()=>
            setColors([...Colors,randomRgb()])   //...colors =add the previous and new colors in array it does not remove any colors from array unlike the push()
        }/>
       
           <FlatList
           horizontal
            keyExtractor={ (item) => item}
            data={Colors}
            renderItem={({item})=>{
            return  <View style={{ height:100, width:100, backgroundColor: item}}  />
            }}
           /> 
           
    </View> //flatList is a self ending element.
};//<FlatList> component, used for efficiently rendering large lists of itmes and also diplays an array in a list form

const randomRgb=()=>{
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);

    return`rgb(${red},${green},${blue})`;
}


const style =StyleSheet.create({});


export default ColorScreen;