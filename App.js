import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  AppRegistry,
  View } from 'react-native';

export default class AppWeather extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        kota: '',
        forecast: {
          temp: ' ',
          main: ' ',
          description: ' '
        }
      };
   }

 getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota + '&appid=15919cdce67c7ea2b912f9adfe6d005e&units=metric';
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        temp: responseJson.main.temp,
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description
      }
    });
    }
    );
    }

  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.header}>
          <Text style={{ padding: 20, fontSize: 22, color: 'white' }}>
          PRAKIRAAN CUACA</Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ padding: 10, fontSize: 20 }}> Masukkan Nama Kota</Text>
          <TextInput
            style={{
              height: 50,
              width: 200,
              margin: 10,
              backgroundColor: 'white',
              textAlign: 'center'
            }}
            onChangeText={(kota) => this.setState({ kota })}
            keyboardType='ascii-capable'
          />
          <Button
            onPress={() => this.getWeather()}
            title="Telusuri"
            color="#01579B"
            accessibilityLabel="Telusuri"
          />
      </View>
      <View style={styles.box3}>
          <Text style={{ padding: 10, fontSize: 18 }}>
          Kota  : {this.state.kota}{'\n'}{'\n'}
          Suhu  : {this.state.forecast.temp} {'\n'}{'\n'}
          Cuaca : {this.state.forecast.main} {'\n'}{'\n'}
          Deskripsi : {this.state.forecast.description}{'\n'}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ padding: 10, fontSize: 15, color: 'white' }}>Copyright@Ari_Trisnayanti</Text>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E3F2FD',
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    marginTop: 15,
    flex: 0.5,
    backgroundColor: '#1A237E',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 1.8,
    margin: 20,
    backgroundColor: '#1E88E5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 3,
    backgroundColor: '#64B5F6',
    margin: 20,
    marginTop: 10
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.5,
    backgroundColor: '#1A237E',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  }
});
AppRegistry.registerComponent('AppForm2', () => AppWeather);
