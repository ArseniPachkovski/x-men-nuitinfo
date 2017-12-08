import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import MapView from 'react-native-maps'

const LATITUDE_DELTA = 0.000894375;
const LONGITUDE_DELTA = 0.000894375;

export default class Sam extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Traffic',
    });
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.refs.map.animateToRegion({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    },
                    2000)
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                         ref="map"
                         showsUserLocation={true}
                         followUserLocation={true}
                         showsBuildings={true}
                         showsTraffic={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0
    }
});