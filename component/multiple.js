import React, {Component} from 'react';
import {
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Button, 
    Image, 
    Dimensions,
    SegmentedControlIOS,
    ScrollView
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Multiple extends Component {
    constructor(){
        super();
        this.state = {
            images: []
        }
    }

    componentWillMount(){
        const {state} = this.props.navigation;
        this.setState({
            images: state.params.img
        })
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <Text>multiple Component</Text>
                    {this.state.images.map((val, ind)=> { 
                        return(
                            <View key={ind}>
                                <Image 
                                    source={{ uri: val.path}} 
                                    style={{width: width, height: 400, marginBottom: 20}} />
                            </View>
                        )
                     })}
                </View>
            </ScrollView>
        )
    }
}