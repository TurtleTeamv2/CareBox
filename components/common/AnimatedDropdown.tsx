import React, { useState, useRef } from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AnimatedDropdown({title}) {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    const toValue = expanded ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setExpanded(!expanded);
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], 
  });

  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], 
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <Text style={styles.headerText}>{title || ' '}</Text>
        <Animated.View
          style={{
            transform: [{ rotate: rotateInterpolation }],
          }}
        >
          <MaterialIcons name="keyboard-arrow-down" size={24} color="gray" />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={[styles.contentContainer, { height: heightInterpolation }]}>
        <View style={styles.contentInner}>
          <Text style={styles.contentText}>Item 1</Text>
          <Text style={styles.contentText}>Item 2</Text>
          <Text style={styles.contentText}>Item 3</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'DongleBold'
  },
  contentContainer: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  contentInner: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  contentText: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 5,
  },
});
