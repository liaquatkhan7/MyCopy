import React, {Component} from 'react';
import {Text, 
        View, 
        TouchableOpacity, 
        StyleSheet, 
        Dimensions,
        Image} from 'react-native';

import Camera from 'react-native-camera';

const {width, height} = Dimensions.get('window');

export default class Camerarol extends Component {
    render(){
        // {alert('camera compoent')}
        return (
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
        )
    }
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => <View>
                            {console.log(data)}
                            <Image
                                source={{
                                isStatic: true,
                                uri: 'data:image/jpeg;base64,' + base64image,
                                }}
                                style={{height: 100, width:100}}
                                />
                            </View>)
            .catch(err => console.error(err, 'its error'));
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    }
  });