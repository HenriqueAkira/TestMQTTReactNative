import MQTT from 'sp-react-native-mqtt';

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {

  let [temperature, setTemperature] = useState(0);
  let [humidity, setHumidity] = useState(0);

  /* create mqtt client */
MQTT.createClient({
  //192.168.56.1
  uri: 'ws://ioticos.org:1883',
  clientId: 'user=24iFJYlSQfP4y2A&password=2uQJJ3JTE4BAbYA',
  user: '24iFJYlSQfP4y2A', //ADICIONAR NA BIBLIOTECA DENTRO DE index.d.ts, NO METODO VAI ESTAR SEM ESSE PARAMETRO
  pass: '2uQJJ3JTE4BAbYA',//ADICIONAR NA BIBLIOTECA DENTRO DE index.d.ts, NO METODO VAI ESTAR SEM ESSE PARAMETRO
  auth: true//ADICIONAR NA BIBLIOTECA DENTRO DE index.d.ts, NO METODO VAI ESTAR SEM ESSE PARAMETRO

}).then(function(client) {

  client.on('closed', function() {
    console.log('MQTT FECHADO');
  });

  client.on('error', function(msg) {
    console.log('MQTT ERRO', msg);
  });

  client.on('message', function(msg) {
    let obj = JSON.parse(msg.data);
    setTemperature(obj["temperature"]);
    setHumidity(obj["humidity"]);
    console.log('mqtt.event.message', msg);
  });

  client.on('connect', function() {
    console.log('CONECTADO');
    client.subscribe('11FkGoi1g8h6cP8', 0);
  });

  client.connect();
}).catch(function(err){
  console.log(err);
});

  return (
    <SafeAreaView >
      <Text>Temperatura {temperature}</Text>
      <Text>Umidade {humidity}</Text>
    </SafeAreaView>
  );
};

export default App;
