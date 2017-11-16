import React, {Component} from 'react';
import {
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Button, 
    Image, 
    Dimensions, 
    TouchableHighlight,
    ScrollView
} from 'react-native';
import ViewShot from "react-native-view-shot";
import { captureRef } from "react-native-view-shot";
// import Canvas from 'react-native-canvas';

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
            marginLeft: width*.6
         },
    });

    constructor(){
        super()
        this.state = {
            SeletedLogo: false,
            logoUrl: '',
            avatarSource: '',
            logoPosition: '',
            finalImageUrl:''
        }
    }

    slectLogo(){
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
              this.setState({
                avatarSource: source
              });
            }
          });
    }

    selectPosition(pos){
        this.setState({
            logoPosition: pos
        })
    }
    
    placelogo(){
        {switch(this.state.logoPosition) {
            case '':
                return( <Image 
                    source={this.state.avatarSource} 
                    style={{width: 80, height: 80, position:'absolute', top: 20, left: 20}} /> )
                break;
            case 'topleft':
                return( <Image 
                    source={this.state.avatarSource} 
                    style={{width: 80, height: 80, position:'absolute', top: 20, left: 20}} />)
                break;
            case 'topright':
                return( <Image 
                    source={this.state.avatarSource} 
                    style={{width: 80, height: 80, position:'absolute', top: 20, left: 240}} />)
            break;
            case 'bottomleft':
                return(<Image 
                    source={this.state.avatarSource} 
                    style={{width: 80, height: 80, position:'absolute', top: 300, left: 20}} />)
            break;
            case 'bottomright':
                return(<Image 
                    source={this.state.avatarSource} 
                    style={{width: 80, height: 80, position:'absolute', top: 300, left: 240}} />)
            default:
                alert('please select picture before proced')
        }}
    }

    done(e){
        this.refs.viewShot.capture().then(uri => {
            console.log("do something with ", uri);
            this.setState({finalImageUrl: uri})
            this.props.navigation.navigate('ShareAndSave', { imagePath: uri })
          });
    }
    
    render(){
        const {state} = this.props.navigation;
        let imageAdress = state.params.imagePath;
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={{marginTop: 5}}>
            <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>              
                <View style={{position:'relative'}}>
                    <Image
                        style={{width: width, height: height*.7}}
                        source={{ uri: imageAdress }} />
                    
                    <TouchableHighlight 
                        onPress={this.selectPosition.bind(this,'topleft')}
                        style={{position: 'absolute', top: 20, left: 20, padding:50, width: width*.5, height: 50}}>
                        <Text></Text>
                    </TouchableHighlight>
                        
                    <TouchableHighlight 
                        onPress={this.selectPosition.bind(this,'topright')}
                        style={{position: 'absolute', top: 20, left: 240, padding: 50, width: width*.5, height: 50}}>
                        <Text></Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        onPress={this.selectPosition.bind(this,'bottomleft')}
                        style={{position: 'absolute', top: 300, left: 0, padding:50, paddingLeft:30, width: width*.5, height: 50}}>
                        <Text></Text>
                    </TouchableHighlight >

                    <TouchableHighlight 
                        onPress={this.selectPosition.bind(this,'bottomright')}
                        style={{position: 'absolute', top: 300, left: 240, padding: 50, width: width*.5, height: 50}}>
                        <Text></Text>
                    </TouchableHighlight>                   
                    {this.placelogo()}
                </View>
                </ViewShot>

                <TouchableOpacity
                    onPress={this.slectLogo.bind(this)}
                    style={{alignItems: 'center'}}>
                    <Text style={styles.btn}>Select Logo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.done.bind(this)}
                    style={{alignItems: 'center'}}>
                    <Text style={styles.btn}>Done</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
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
    },
    contentContainer: {
        paddingVertical: 20
      }
})