import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import React, { useState } from 'react'; 
import CheckboxBar from '../../components/common/takePill/CheckboxBar' 
import Layout from '@/components/common/Layout';
export default function CalendarScreen() {

  const optionsArr = [
    'Terapia krotkotrwala',
    'Terapia dlugotrwala',
    'Przypominanie o\nkonczoncych sie lekach'
  ]

  const [selected, setSelected] = useState();
  return (
    <Layout>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {optionsArr.map((item =>  <CheckboxBar title={item} checked={selected === item} toggleCheckbox={()=> setSelected(item)} />) )}
    </Layout> 
  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
