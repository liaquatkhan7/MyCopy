import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Splash extends Component {
    render (){
        return (
            <View >
                <Image
                    style={{width: width, height: height}}
                    source={require('../asset/splash.jpeg')}
                />
            </View>
        )
    }
}