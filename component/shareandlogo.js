import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, Image, Dimensions} from 'react-native';

var ImagePicker = require('react-native-image-picker');

const {width, height} = Dimensions.get('window');


// More info on all the options is below in the README...just some common use cases shown here
var options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    },
    takePhotoButtonTitle: null
  };
  
export default class ShareAndLogo extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Select Logo`,
        headerTitleStyle: { 
            color: 'black',
            fontSize: 14,
            fontWeight: 'normal',
            marginLeft: 200
         },
    });
    constructor(){
        super()
        this.state = {
            SeletedLogo: false,
            logoUrl: '',
            avatarSource: ''

        }
    }
    alr(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
          
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source
              });
            }
          });
        
    }
    
    render(){
        const {state} = this.props.navigation;
        let imageAdress = state.params.imagePath;
        return(
            <View style={{marginTop: 5}}>
                <View style={{position:'relative'}}>
                    <Image
                        style={{width: width, height: height*.7}}
                        source={{ uri: imageAdress }} />
                    <Image 
                        source={this.state.avatarSource} 
                        style={{width: 30, height: 30, position:'absolute'}} />
                </View>
                <TouchableOpacity
                    onPress={this.alr.bind(this)}
                    style={{alignItems: 'center'}}>
                    <Text style={styles.btn}>Select Logo</Text>
                </TouchableOpacity>
            </View>
        )

}}



const styles = StyleSheet.create({
    btn: {
        width: width*.7,
        marginTop: 10,
        backgroundColor: '#F58120', 
        textAlign: 'center',
        borderRadius: 5,
        padding: 20
    }
})