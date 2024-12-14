import PillsSvg from "@/assets/images/svg/medKit/PillsSvg";
import SyrupSvg from "@/assets/images/svg/medKit/SyrupSvg";
import TimerSvg from "@/assets/images/svg/medKit/TimerSvg";
import Colors from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet , Text, Pressable, TouchableOpacity} from 'react-native';



const MedKitBar = ({medName, amount ='', expirationDate, medType}) => {
    const navigation = useNavigation();

    const handleIcon = () => {
        if (medType === 'syrup') return <SyrupSvg /> 
        return <PillsSvg />
    }

    return ( 

        <TouchableOpacity style={styles.main} onPress={() => navigation.navigate('TakePillScreen', { medName, amount })}>
            <View style={styles.medNameWrapper}> 
                <Text style={styles.medName}>{medName}</Text>
                {amount && ( <Text style={styles.amount}>{amount || '-'}</Text> )}
            </View>
            <View style={styles.expirationWrap}>
                <TimerSvg />
                <Text style={styles.expirationDate}>{expirationDate}</Text>
            </View>
            <View style={styles.iconWrapper}>
                {handleIcon()}
            </View>
        </TouchableOpacity> 
    )

}



const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.semiWhite,
        marginBottom: 15,
        borderRadius: 17,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    medNameWrapper: {
        alignItems: 'flex-end'
    },
    medName: { 
        fontSize: 30,
        lineHeight: 32,
        marginTop: 10,
        fontFamily: 'DongleBold'
    },
    expirationWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    expirationDate: {
        opacity: 0.41,
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'DongleRegular'
    },
    amount: {
        fontSize: 20,
        opacity: 0.41
    },
    iconWrapper: {
        width: '20%'
    }
});





export default MedKitBar