import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Button } from 'react-native-elements';
import SamShuffle from './samshuffle';

export default class SamColors extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Colors',
    });
    constructor(props) {
        super(props)
        const colors = ['red','gray','orange','blue','purple','green','pink'];
        const buttons = [];
        const selectedColors = [];
        for(let i=0; i<props.navigation.state.params.numcolors; i++) {
            let rand = colors[Math.floor(Math.random() * (colors.length - 1))];
            let index = colors.indexOf(rand);
            colors.splice(index, 1);
            selectedColors.push(rand);
        }
        this.state = {
            numcolors: props.navigation.state.params.numcolors,
            selectedColors: selectedColors
        }
    }

    render() {
        return (
            <View>
                <Text>Choisissez une couleur chacun</Text>
                {this.state.selectedColors.map((i) => (
                    <Button key={i} large backgroundColor={i} buttonStyle={{marginTop:20, height:30}}/>
                ))}
                <Button
                    large
                    onPress={() => this.props.navigation.navigate('SamShuffle', {name: 'SamShuffle', selectedColors: this.state.selectedColors})}
                    buttonStyle={{marginTop:20}}
                    backgroundColor="green"
                    icon={{name: 'send'}}
                    title='VALIDER' />
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