import WarningSvg from '@/assets/images/svg/takePill/WarningSvg';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const InteractionCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.warningIconContainer}>
        <WarningSvg />
        <Text style={styles.title}>Interakcja istotna</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Ibuprom + Prestarium</Text>
        <Text style={styles.description}>
          Osłabienie działania obniżającego ciśnienie, możliwość wystąpienia objawów niewydolności nerek.
        </Text>
        <Text style={styles.footer}>
          W razie wątpliwości skonsultuj się z lekarzem lub farmaceutą.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF1F9',
    borderRadius: 10,
    padding: 20,
    borderWidth: 4,
    borderColor: '#E39AC8',
    marginVertical: 10,
  },
  warningIconContainer: {
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  warningIcon: {
    fontSize: 40,
    color: '#E0005A',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'DongleBold',
    color: '#000',
    marginBottom: 5,
    marginLeft: 10
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'DongleRegular',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: 'DongleRegular',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  footer: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'DongleRegular',
  },
});

export default InteractionCard;
