import Colors from "@/constants/Colors";
import React from "react";
import {View, Text, StyleSheet} from 'react-native' 

const SectionHeader = ({sectionName}: string) => {

    return (
        <View style={styles.main}> 
            <View style={styles.separator} />
            <Text style={styles.header}>{sectionName}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        height: 20,
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginVertical: 20,
    },
    separator: {
       width: '100%',
       height: 2,
       borderRadius: 10,
       backgroundColor: Colors.mainBlue,
       opacity: 0.28
    },
    header: {
        flex: 1,
        position: 'absolute',
        backgroundColor: Colors.backgroundBlue,
        paddingHorizontal: 10,
        color: '#000',
        fontFamily: 'DongleLight',
        fontSize: 30,
    }
});


export default SectionHeader