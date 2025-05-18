import react from 'react';
import {View, Text,Button,TouchableOpacity,StyleSheet,Image} from 'react-native';


const ImageDetails=(Props)=>{
    return <View>
        <Image source={Props.imageSource}/>
    <Text>{Props.title}</Text>
    <Text>{Props.name}</Text>
    </View>
};

const styles = StyleSheet.create({});


export default ImageDetails;