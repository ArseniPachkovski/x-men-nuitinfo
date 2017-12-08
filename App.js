import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Sam from './src/components/sam';
import Emergency from './src/components/emergency';
import Traffic from './src/components/traffic';
import SamShuffle from './src/components/samshuffle';
import SamColors from './src/components/samcolors';
import { Card, ListItem, Button } from 'react-native-elements'

class Home extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Bienvenue',
    });


  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <Card
              title='DÉSIGNE TON SAM'
              image={require('./src/img/car.png')}
              imageWrapperStyle={{flex:1,justifyContent:'center'}}
              imageStyle={{width: Card.width}}
              imageProps={{resizeMode:'contain'}}>
              <Text style={{marginBottom: 10}}>
                  Vous n'arrivez pas à désigner votre SAM ? Laissez nous faire.
              </Text>
              <Button
                  icon={{name: 'shuffle'}}
                  backgroundColor='purple'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  onPress={() => this.props.navigation.navigate('Sam', {name: 'Sam'})}
                  title="DÉSIGNER" />
          </Card>
          <Card
              title='APPELER LES URGENCES'
              image={require('./src/img/emergency.png')}
              imageStyle={{width: Card.width}}
              wrapperStyle={{justifyContent:'center'}}
              imageProps={{resizeMode:'contain'}}>
              <Text style={{marginBottom: 10}}>
                  Numéros utiles en cas d'urgences.
              </Text>
              <Button
                  icon={{name: 'phone'}}
                  backgroundColor='red'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  onPress={() => this.props.navigation.navigate('Emergency', {name: 'Emergency'})}
                  title='APPELER' />
          </Card>
          <Card
              title='TRAFFIC'
              image={require('./src/img/traffic.png')}
              imageStyle={{width: Card.width}}
              imageProps={{resizeMode:'contain'}}>
              <Text style={{marginBottom: 10}}>
                  Ici vous trouverez des informations sur le traffic aux alentours.
              </Text>
              <Button
                  icon={{name: 'map'}}
                  backgroundColor='orange'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  onPress={() => this.props.navigation.navigate('Traffic', {name: 'Traffic'})}
                  title="INFORMATIONS TRAFFIC" />
          </Card>
          <Image
              source={require('./src/img/sfr.png')}
              resizeMode={'contain'}
              style={styles.homeImg}
          />
      </ScrollView>
    );
  }
}

export default StackNavigator({
    Home: {screen: Home},
    Sam: {screen: Sam},
    Emergency: {screen: Emergency},
    SamShuffle: {screen: SamShuffle},
    SamColors: {screen: SamColors},
    Traffic: {screen: Traffic}
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
    buttonStyle: {
      marginTop:10,
    },
    homeImg: {
      width: 80,
        height: 50
    }
});
