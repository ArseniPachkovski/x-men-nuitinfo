import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Button } from 'react-native-elements';

export default class SamShuffle extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Shuffle',
    });
    constructor(props) {
        super(props)
        let colors = this.props.navigation.state.params.selectedColors;
        let rand = colors[Math.floor(Math.random() * (colors.length - 1))];
        this.state = {
            rand
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor: this.state.rand,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:25, color:'white'}}>Sam a été choisi :)</Text>
                    <Button
                        large
                        onPress={() =>
                            this.props.navigation.navigate('Home', {name: 'Home', numcolors: this.state.value
                            })}
                        buttonStyle={{marginTop:20}}
                        backgroundColor="gray"
                        title="Retour à l'accueil" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});