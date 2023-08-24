import { Text, SafeAreaView, StyleSheet, input, view } from 'react-native';
import React, { useState, useEffect} from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [n1, setN1] = useState (0)
  const [n2, setN2] = useState (0)
  const [n3, setN3] = useState (0)

  const [n4, setN4] = useState (0)
  const [n5, setN5] = useState (0)
  const [n6, setN6] = useState (0)
  const [n7, setN7] = useState (0)
  const [n8, setN8] = useState (0)
  const [n9, setN9] = useState (0)
  
   function calcRegraTres() {
     const vl1 = n2 * n3
     const result = vl1/n1
     return document.getElementById("result").innerHTML = result;
     }



return (
  <view>
   <SafeAreaView style={styles.div}>
    <h1> CALCULADORA REGRA DE 3 </h1>
    <label> Digite o primeiro valor: </label>
    <input type='number' value={n1} onChange={(e) => setN1(e.target.value)}/>
    <label> Digite o segundo valor: </label>
    <input type='number' value={n2} onChange={(e) => setN2(e.target.value)}/>
    <label> Digite o terceiro valor: </label>
    <input type='number' value={n3} onChange={(e) => setN3(e.target.value)}/>
    <input type='submit' value='Calcular' onClick={calcRegraTres}/>
    <label id='result' style={styles.label}> </label>
    </SafeAreaView>

    </view>
  );
 } 


const styles = StyleSheet.create({
  label: {
    
  }
});
