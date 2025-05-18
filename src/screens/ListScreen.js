import React from 'react';
import {View ,Text ,StyleSheet,FlatList } from 'react-native';


const ListScreen = ()=>{
    const friends = [
        {name:"f1",age:22 , key:'1'},
        {name:"f2",age:34,key:'2'},
        {name:"f3",age:45,key:'3'},
        {name:"f4",age:78,key:'4'},
        {name:"f5",age:56,key:'5'},
    ]
    return (
    <FlatList  
    horizontal
    showaHorizontalScrollIndicator={false}      //it removes or hides the scrool bar from user
    // keyExtractor={friend=> friend.name}  another way of assigning unique and different keys to the evry element of list
    data={friends}  
    renderItem={({item})=>{    //element ==={item: {name:"f1"},index:0}
       return <Text style={styles.textStyle}>{item.name}- age{item.age}</Text>
    }}
    />

    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal:70
    }
}); 


export default ListScreen;