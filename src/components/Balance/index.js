import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function Balance({saldo, gastos}) {
 return (
   <View style={styles.container}>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>SALDO</Text>

        <View style={styles.content}>
            <Text style={styles.currencySymbol}>
                R$
            </Text>
            <Text style={styles.balance}>{saldo}</Text>
        </View>
    </View>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>GASTOS</Text>

        <View style={styles.content}>
            <Text style={styles.currencySymbol}>
                R$
            </Text>
            <Text style={styles.expenses}>{gastos}</Text>
        </View>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ccc',
        // opacity: 0.78,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -25,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 6,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    itemTitle:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    content:{
       flexDirection: 'row',
       alignItems: 'center'
    },
    currencySymbol:{
        color: 'black',
        fontWeight: 'bold',
        marginRight: 6,       
    },
    balance:{
        fontSize:22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: 'red'
    },
    currencySymbol:{
        fontSize: 22,
        marginVertical: 5,
    }


})