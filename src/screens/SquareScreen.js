import react ,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import ColorCounter from './Components/ColorCounter';

const COLOR_INCREMENT=15;   //This suyntac assigns a constatn value  whuch is not a prop

const SquareScreen=()=>{
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

    const setColor= (color,change)=>{

         switch (color){
            case 'red':                      //you can also us if else statements but that would be lengthy code
            red + change > 255 || red + change < 0 ?null : setRed(red+change);
            return;

            case 'green':                     
            green + change > 255 || green + change < 0 ?null : setGreen(green+change);
            return;

            case 'blue':                      
            blue + change > 255 || blue + change < 0 ?null : setBlue(blue+change);
            return;

            default:
                return;
               
           }
    };
    
    
    return <View>
       <ColorCounter 
       onIncrease={()=> setColor('red',COLOR_INCREMENT)}  //if a arrow function has single expression then there is no need of extra {} but if you want to add extra piece of code then we do need ths curly braces.
       onDecrease ={()=>setColor('red', -1 *COLOR_INCREMENT)}
       color="Red"
        />
       <ColorCounter 
       onIncrease={()=> setColor('green',COLOR_INCREMENT)}  
       onDecrease ={()=>setColor('green',-1*COLOR_INCREMENT)}
       color="Blue"
       />
       <ColorCounter 
       onIncrease={()=> setColor('blue',COLOR_INCREMENT)}  
       onDecrease ={()=>setColor('blue',-1*COLOR_INCREMENT)}
       color="Green"
       />
       <View style={{height:150 , width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>

};


const styles= StyleSheet.create({})

 
export default SquareScreen;