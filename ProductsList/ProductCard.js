import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function Product({name, desc}) {
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>{name}</Text>
            <Text style={styles.descriptionTitle}>Descripción:</Text>
            <Text style={styles.description}>{desc}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titulo:{
        fontSize: 20
    },
    descriptionTitle:{
        fontSize: 15
    },
    card:{
        backgroundColor: '#d1e000',
        borderRadius: 10,
        marginBottom: 15,
        opacity: 1,
        padding: 10
    }
})
