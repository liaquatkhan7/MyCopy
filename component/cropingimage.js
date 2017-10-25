import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, Image, Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

export default class Croping extends Component {
    cropingImg(){
        const {state} = this.props.navigation;
        let imgAdress = state.params.img 
        console.log(imgAdress)
        ImagePicker.openCropper({
            path: imgAdress,
            width: 400,
            height: 400
          }).then(image => {
            console.log(image.path, 'insight the picker');
            alert(image.path)
          }).catch( err => this.props.navigation.navigate('Camerarol'));
    }
    render(){
        return (<View>
                    {this.cropingImg()}
                </View>
                )
    }
}