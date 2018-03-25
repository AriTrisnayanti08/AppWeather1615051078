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
          temp: 0,
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
      <View style={styles.box1}>
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
            title="Cari"
            color="#004D40"
            accessibilityLabel="Cari"
          />
      </View>
      <View style={styles.box3}>
          <Text style={{ padding: 10, fontSize: 18 }}>
          Kota  : {this.state.kota}{'\n'}{'\n'}
          Suhu  : {this.state.forecast.temp} {'\n'}{'\n'}
          Cuaca : {this.state.forecast.main} {'\n'}{'\n'}
          Deskripsi : {this.state.forecast.description}{'\n'}</Text>
      </View>
      <View style={styles.box4}>
        <Text style={{ padding: 10, fontSize: 15, color: 'white' }}>Copyright@Ari_Trisnayanti</Text>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#B2EBF2',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    marginTop: 15,
    flex: 0.5,
    backgroundColor: '#1A237E',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 1.8,
    margin: 20,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 3,
    backgroundColor: '#80CBC4',
    margin: 20,
    marginTop: 10
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA80FC'
  },
  box4: {
    flex: 0.5,
    backgroundColor: '#1A237E',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  }
});
AppRegistry.registerComponent('AppForm2', () => AppWeather);
