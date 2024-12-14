import { SectionList, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, Image } from 'react-native';
import Layout from '@/components/common/Layout';
import MedKitBar from '@/components/medkit/MedKitBar';
import SectionHeader from '@/components/medkit/SectionHeader';
import FilterSvg from '@/components/medkit/FilterSvg';
import { Link } from 'expo-router';


const DATA = [
  {
    title: 'Leki bez recepty',
    data: [
      {
        medName: 'Ibuprom',
        amount: '200mg',
        expirationDate: '12.2026',
        medType: 'pill'
      },
      {
        medName: 'Ibum forte\nsyrop',
        amount: '',
        expirationDate: '07.2026',
        medType: 'syrup'
      }
    ],
  },
  {
    title: 'Leki na recepte',
    data: [
      {
        medName: 'Prestarium',
        amount: '5mg',
        expirationDate: '12.2026',
        medType: 'pill'
      },
      {  
        medName: 'Bisocard',
        amount: '10mg',
        expirationDate: '06.2025' ,
        medType: 'pill'
      }
    ],
  },
];

export default function TabOneScreen() {
  return (
    <Layout> 
        <View>
          <View style={styles.filter}><FilterSvg /></View>
          <View style={styles.header}>

            <Image
              style={styles.image}
              source={require('../../assets/images/png/indexHeader.png')}
            />
          </View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Link href="/TakePillScreen" asChild>
            <MedKitBar  {...item} />
            </Link>
          )}
          renderSectionHeader={({section: {title}}) => (
            <SectionHeader sectionName={title} />
          )} 
        />
        </View>
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
    top: 20
  },
  header: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter: {
    position: 'absolute',
    top: 40,
    right: 10,

  },
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
