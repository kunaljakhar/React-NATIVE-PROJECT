import React from "react";
import { Text, StyleSheet, View,Button , TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  
  return <View>
  <Text style={styles.text}>Hii there</Text>
   <Button
   onPress={()=> props.navigation.navigate("Component") }
    title="Go to components demo"
    /> 

<TouchableOpacity onPress={()=> props.navigation.navigate("Image") }>
      <Text>Go to Image demo</Text>
      
      </TouchableOpacity>   
      
    <TouchableOpacity onPress={()=> props.navigation.navigate("List") }>
      <Text>Go to list demo</Text>
      
      </TouchableOpacity>   

      <Button
   onPress={()=> props.navigation.navigate("Counter") }
    title="Go to Counter demo"
    /> 


<Button
   onPress={()=> props.navigation.navigate("Square") }
    title="Go to square demo"
    /> 


<Button
   onPress={()=> props.navigation.navigate("Color") }
    title="Go to Color demo"
    /> 

  </View>
   /*for strings we dont need curly brackets while assigning a property as done in title */
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
