import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class ShareAndLogo extends Component {
    render(){
        const {state} = this.props.navigation;
        let imageAdress = state.params.imagePath
        return(
            <View>
                {console.log(state.params.imagePath, 'place logo')}

                <Text>Share and Place Logo</Text>
                <Image
                    style={{width: width, height: height*.8}}
                    source={{ uri: imageAdress }} />

            </View>)
    }
}