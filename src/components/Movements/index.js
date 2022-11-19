import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Movements({data}) {
 return (
   <TouchableOpacity style={styles.container}>

    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        <Text style={data.type === 1 ? styles.value : styles.expenses}>
            {data.type === 1 ? `${data.value}` : `-${data.value}`}
        </Text>

    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       marginTop: 15,
       marginBottom: 24,
       borderBottomWidth: 0.5,
       borderBottomColor: '#ccc' 
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
        marginBottom: 8
    },
    date:{
        color: 'red',
        fontWeight: 'bold'
    },
    label:{
        fontWeight: 'bold',
        fontSize: 18
    },
    value:{
        fontSize: 18,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expenses:{
        fontSize: 18,
        color: '#e74c3c',
        fontWeight: 'bold'
    }
})