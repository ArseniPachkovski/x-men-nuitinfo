import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, PricingCard } from 'react-native-elements';
import call from 'react-native-phone-call';


export default class Sam extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Secours',
    });
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Ici tu peux appeler les secours</Text>
                <PricingCard
                    wrapperStyle={{width: 300}}
                    color='darkblue'
                    title='Police'
                    info={['17']}
                    button={{ title: 'APPELER', icon: 'phone' }}
                    onButtonPress={() => {call({number:'17', prompt: false})}}
                />
                <PricingCard
                    wrapperStyle={{width: 300}}
                    color='#4f9deb'
                    title='Samu'
                    info={['16']}
                    button={{ title: 'APPELER', icon: 'phone' }}
                    onButtonPress={() => {call({number:'16', prompt: false})}}
                />
                <PricingCard
                    wrapperStyle={{width: 300}}
                    color='red'
                    title='Pompiers'
                    info={['18']}
                    button={{ title: 'APPELER', icon: 'phone' }}
                    onButtonPress={() => {call({number:'18', prompt: false})}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});