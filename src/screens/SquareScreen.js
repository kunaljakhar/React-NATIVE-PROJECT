import react ,{useReducer} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import ColorCounter from './Components/ColorCounter';

const COLOR_INCREMENT=15;   


    const reducer=(state,action)=>{              //define reducer funtion outsidee of SquareScreen
        switch(action.colorToChange){
            case 'red':
                 return{...state, red : state.red+action.amount};    //IF WE WANT TO CHANGE ANY PROPRTY OF OUR STATE OBJECT than WE HAVE TO RE CREATE THAT STATE OBJECT FROM SCRATCH.
            case 'green':
                return{...state, green : state.green+action.amount}; // always return a new object for state 
            case 'blue':
                return{...state, blue : state.blue+action.amount}; 
            default:
                return state;

        }
    };
             
    const SquareScreen=()=>{
    const[state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});  //STATE==={red:0,green:0,blue:0} ->state object  //w can also use runMyReducer insted of dispatch or anything that makes snse to us.
      //Action==={colorToChange:'red'||'green'||'blue', amount:15||-15}
    const{red,green,blue}=state; 
    
    return <View>

   <ColorCounter 
       onIncrease={()=> dispatch({colorToChange:'red',amount:COLOR-INCREMENT})}  
       onDecrease ={()=>dispatch({colorToChange:'red',amount:-1*COLOR-INCREMENT})}
       color="Red"
        />
       <ColorCounter 
       onIncrease={()=> dispatch({colorToChange:'green',amount:COLOR-INCREMENT})}  
       onDecrease ={()=>dispatch({colorToChange:'green',amount:-1*COLOR-INCREMENT})}
       color="Blue"
       />
       <ColorCounter 
       onIncrease={()=> dispatch({colorToChange:'blue',amount:COLOR-INCREMENT})}  
       onDecrease ={()=> dispatch({colorToChange:'blue',amount:-1*COLOR-INCREMENT})}
       color="Green"
       />
       <View style={{height:150 , width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>

};


const styles= StyleSheet.create({})

 
export default SquareScreen;




















// import react ,{useState} from 'react';
// import {View,Text,StyleSheet,Button} from 'react-native';
// import ColorCounter from './Components/ColorCounter';

// const COLOR_INCREMENT=15;   //This suyntac assigns a constatn value  whuch is not a prop

// const SquareScreen=()=>{
//     const[red,setRed]=useState(0);
//     const[green,setGreen]=useState(0);
//     const[blue,setBlue]=useState(0);

//     const setColor= (color,change)=>{

//          switch (color){
//             case 'red':                      //you can also us if else statements but that would be lengthy code
//             red + change > 255 || red + change < 0 ?null : setRed(red+change);
//             return;

//             case 'green':                     
//             green + change > 255 || green + change < 0 ?null : setGreen(green+change);
//             return;

//             case 'blue':                      
//             blue + change > 255 || blue + change < 0 ?null : setBlue(blue+change);
//             return;

//             default:
//                 return;
               
//            }
//     };
    
    
//     return <View>
//        <ColorCounter 
//        onIncrease={()=> setColor('red',COLOR_INCREMENT)}  //if a arrow function has single expression then there is no need of extra {} but if you want to add extra piece of code then we do need ths curly braces.
//        onDecrease ={()=>setColor('red', -1 * COLOR_INCREMENT)}
//        color="Red"
//         />
//        <ColorCounter 
//        onIncrease={()=> setColor('green',COLOR_INCREMENT)}  
//        onDecrease ={()=>setColor('green',-1 * COLOR_INCREMENT)}
//        color="Blue"
//        />
//        <ColorCounter 
//        onIncrease={()=> setColor('blue',COLOR_INCREMENT)}  
//        onDecrease ={()=>setColor('blue',-1*COLOR_INCREMENT)}
//        color="Green"
//        />
//        <View style={{height:150 , width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
//     </View>

// };


// const styles= StyleSheet.create({})

 
// export default SquareScreen;