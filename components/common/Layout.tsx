import Colors from "@/constants/Colors";
import React, { ReactElement } from "react";
import { View,StyleSheet, useColorScheme  } from "react-native";


const Layout = ({children}:any) => {
 
    return (
        <View style={styles.main}>
            {children}
        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor: Colors.backgroundBlue, 
        paddingHorizontal: 10
    }
});









export default Layout


