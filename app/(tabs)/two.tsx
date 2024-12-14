import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import CheckboxBar from '@/components/common/takePill/CheckboxBar';
import { useState } from 'react';
import Layout from '@/components/common/Layout';
import Colors from '@/constants/Colors';

export default function TabTwoScreen() {
  const optionsArr = [
    'Chcę użyć skanera',
    'Chcę dodać ręcznie',
  ]
  const [selected, setSelected] = useState();

  return (
    <Layout>
       <View style={styles.header}>
      
                  <Image
                  style={styles.image}
                    source={require('../../assets/images/png/twoHeader.png')}
                  />
                </View>
      <View style={styles.separator} lightColor={Colors.backgroundBlue} darkColor="rgba(255,255,255,0.1)" />
      {optionsArr.map((item =>  <CheckboxBar key={item} title={item} checked={selected === item} toggleCheckbox={()=> setSelected(item)} />) )}

    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    position: 'absolute', 
    left: 80,
    top: 50
  },
  header: {
    backgroundColor:Colors.backgroundBlue 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    marginBottom: 250
  },
});
