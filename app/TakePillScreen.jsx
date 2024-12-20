import AnimatedDropdown from "@/components/common/AnimatedDropdown";
import Layout from "@/components/common/Layout";
import InteractionCard from "@/components/common/takePill/InteractionCard";
import FilterSvg from "@/components/medkit/FilterSvg";
import Colors from "@/constants/Colors";
import { useRoute } from "@react-navigation/native";
import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native'
  

const TakePillScreen = () => {
    const route = useRoute();
    let medName = route?.params?.medName || 'Domyślna wartość';
    let amount = route?.params?.amount || 0;  
 
    const hasDanger = medName === 'Ibuprom' || medName === 'Ibum forte\nsyrop'
    return (
        <Layout>
            <View>
          <View style={styles.header}>
            <Image 
               style={styles.image}
              source={require('../assets/images/png/infoHeader.png')}
            />
          </View>
          <View style={styles.bigPill}>
            <Text style={styles.pillText}>{`${medName} ${amount}`}</Text>
          </View>
          {hasDanger && (<InteractionCard />)}
          <AnimatedDropdown title={'Dawkowanie'} />
          <AnimatedDropdown title={'Przeciwskazania'} />
          <AnimatedDropdown title={'Środki ostrożności'} />
          </View> 
        </Layout>
    )

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
    top: 10,
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
  bigPill: {
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.mainBlue,
    marginBottom: 30,
    marginTop: 30
  },
  pillText: {
    color: '#fff',
    fontFamily: 'DongleBold',
    fontSize: 40
}
});


export default TakePillScreen;