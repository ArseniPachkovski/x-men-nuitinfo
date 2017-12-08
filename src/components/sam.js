import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Button } from 'react-native-elements';
import SamColors from './samcolors';

export default class Sam extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'SAM',
    });
    constructor(props) {
        super(props)
        this.state = {
            value: 2
        }
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', marginLeft: 20, marginRight: 20,}}>
                <Text>Choisi le nombre de participants</Text>
                <Slider
                    thumbTintColor='green'
                    minimumValue={2}
                    maximumValue={7}
                    step={1}
                    value={this.state.value}
                    onValueChange={(value) => this.setState({value})} />
                <Text>Participants: {this.state.value}</Text>
                <Button
                    large
                    onPress={() => this.props.navigation.navigate('SamColors', {name: 'SamColors', numcolors: this.state.value})}
                    buttonStyle={{marginTop:20}}
                    backgroundColor="green"
                    icon={{name: 'send'}}
                    title='BUTTON WITH ICON' />
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