import react from 'react';
import {View, Text,Button,TouchableOpacity,StyleSheet} from 'react-native';
import ImageDetails from './Components/ImageDetails';

const ImageScreen=()=>{
    return <View>
    <ImageDetails name="Image Score-9" title="Forst" imageSource={require('../../assets/forest.jpg')}/>
    <ImageDetails name="Image Score-7"  title="Beach" imageSource={require('../../assets/beach.jpg')}/>
    <ImageDetails name="Image Score-4"  title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
}            //components created by you (like image Details) can have any property name that you feel good but thr components that are created by react need some specific predfined property names with proper capatilization
 
const styles = StyleSheet.create({});


export default ImageScreen;