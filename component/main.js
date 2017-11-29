import React, {Component} from 'react';
import {
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Button, 
    Image, 
    Dimensions
} from 'react-native';
// import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';

var ImagePickerr = require('react-native-image-picker');
const {width, height} = Dimensions.get('window');

var options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    },
    takePhotoButtonTitle: null
};

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            avatarSource: ''
        }
    }
    
    galaryOpen(){
        // ImagePicker.openPicker({}).then(image => {
        //     console.log(image);
        // });


        ImagePickerr.showImagePicker(options, (response) => {
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
              this.setState({
                avatarSource: source
              });
              this.props.navigation.navigate('Croping', { img: source.uri })
            }
        });
    }

    multiple(){
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
            // console.log(images);
            this.props.navigation.navigate('Multiple', {img: images})
          });
    }

    render(){
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.centerAlignCon}>
                <TouchableOpacity 
                    onPress={(user) => this.props.navigation.navigate('Camerarol', { name: 'liaquat ali khan' })}
                    >
                    <Image
                        style={{width: 60, height: 60, marginLeft: 30}}
                        source={require('../asset/camicon.png')}
                    />
                    <Text style={styles.take}>TAKE PICTURE</Text>
                </TouchableOpacity>

                <Text>-------------------------------</Text>

                <TouchableOpacity
                    onPress={this.galaryOpen.bind(this)}>
                    <Image
                        style={{width: 80, height: 80, marginLeft: 30}}
                        source={require('../asset/galarryicon.png')}
                    />
                    <Text style={styles.take}>SELECT PICTURE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {this.multiple()} }
                    style={{width: 150, backgroundColor: 'grey'}}>
                    <Text style={{textAlign: 'center', color: 'black', padding:20}}>Select Multiple</Text>
                </TouchableOpacity>
            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    take: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
    },
    centerAlignCon: { 
        justifyContent: 'center',
        alignItems: 'center',
    }
})