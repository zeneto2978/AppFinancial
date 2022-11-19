import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: 'Boleto Conta de Luz',
        value: 'R$ 300,90',
        date: '17/09/2022',
        type: 0 // despesas 
    },
    {
        id: 2,
        label: 'Salário',
        value: 'R$ 7.500,00',
        date: '05/09/2022',
        type: 1 // receitas / entradas 
    },
    {
        id: 3,
        label: 'Pix Cliente X',
        value: 'R$ 300,90',
        date: '22/09/2022',
        type: 2 // receitas / entradas 
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='José Neto'/>
      
      <Balance saldo='9.250,90' gastos='-527,00'/>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList style={styles.list}
      data={list} keyExtractor={ (item) => String(item.id)} showsHorizontalScrollIndicator={false} renderItem={ ({item}) => <Movements data={item}/>} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fafafa',
    // alignItems:'center',
    // justifyContent: 'center'
  },
  title:{
    color: '#ccc',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});


// PAREI NO MINUTO 39:45
// LINK https://www.youtube.com/watch?v=REulDg3JzzQ&t=39s