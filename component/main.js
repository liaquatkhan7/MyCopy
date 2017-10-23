import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
  
// import Camera from 'react-native-camera';

export default class Main extends Component {
    render(){
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <TouchableOpacity 
                    onPress={(user) => this.props.navigation.navigate('Camerarol', { name: 'liaquat ali khan' })}
                    >
                    <Text style={styles.take, styles.borderbottom}>TAKE PICTURE</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={(user) =>  this.props.navigation.navigate('Galary')} >
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
    borderbottom: {
        borderBottomColor: '#47315a',
        borderBottomWidth: 1
    }
})