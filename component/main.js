import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, Image, Dimensions} from 'react-native';
  
// import Camera from 'react-native-camera';

const {width, height} = Dimensions.get('window');

export default class Main extends Component {
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
                    onPress={(user) =>  this.props.navigation.navigate('Galary')} >
                    <Image
                        style={{width: 80, height: 80, marginLeft: 30}}
                        source={require('../asset/galarryicon.png')}
                    />
                    <Text style={styles.take}>SELECT PICTURE</Text>
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