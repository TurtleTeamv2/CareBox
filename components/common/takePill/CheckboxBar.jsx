import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckboxBar = ({title, checked, toggleCheckbox}) => {
//   const [checked, setChecked] = useState(false);

//   const toggleCheckbox = () => {
//     setChecked(!checked);
//   };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
        <View
          style={[
            styles.checkbox,
            { backgroundColor: checked ? Colors.pink : 'transparent' },
          ]}
        />
        <Text style={styles.label}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 11,
    marginBottom: 25,
    backgroundColor: Colors.semiWhite,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 25,
    fontFamily: 'DongleBold',
  },
});

export default CheckboxBar;
