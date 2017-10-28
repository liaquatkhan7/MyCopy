import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, Image, Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

export default class Croping extends Component {
    cropingImg(){
        const {state} = this.props.navigation;
        let imgAdress = state.params.img 
        ImagePicker.openCropper({
            path: imgAdress,
            width: 400,
            height: 400
          }).then(image => {            
            alert(image.path);
            this.props.navigation.navigate('ShareAndLogo', { imagePath: image.path })
          }).catch( err => this.props.navigation.navigate('Camerarol'));
    }
    render(){
         return ( <View>
                     {this.cropingImg()} 
                 </View>
                
                )
    }
}