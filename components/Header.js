import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from '../constants/Color';

function Header(props) {
        return (
            <View style={ styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
           </View>
        );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:Color.primary,
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight:"bold"
    },
});

export default Header;
