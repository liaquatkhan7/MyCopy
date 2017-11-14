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


const {width, height} = Dimensions.get('window');



  
export default class ShareAndSave extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Share`,
        headerTitleStyle: { 
            color: 'black',
            fontSize: 14,
            fontWeight: 'normal',
            marginLeft: width*.7
         },
    });
    render(){
        const {state} = this.props.navigation;
        let imageAdress = state.params.imagePath;
        return(
            <View>
                <Image
                    style={{width: width, height: height*.7}}
                    source={{ uri: imageAdress }} />
            </View>
        )
    }

}

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