import { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import CardTreino from './CardTreino';
import User from '../User';
import styles from './styles';

export default function TreinosMontados({ route, navigation }) {
  const [ treinos, setTreinos ] = useState([]);
  const usuario = useContext(User);

  useEffect(() => {
    const novos = [];
    const c = collection(db, 'users');
    const q = query(c, where('uid', 'in', usuario.user.vinculos));
    getDocs(q)
    .then((docs) => {
      docs.forEach((item) => {
        novos.push(item.data());
      })
    })
    .then(() => setTreinos(novos))
    .catch((error) => console.log(error))
  }, [usuario.user])

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Treinos montados</Text>
      { treinos.length > 0 ?
        <FlatList
          style={styles.lista}
          contentContainerStyle={{alignItems: 'center', paddingTop: 5}}
          data={treinos}
          renderItem={({ item }) => <CardTreino item={item} navigation={navigation}/>}
          keyExtractor={item => item.uid}
          extraData={treinos}
        /> :
        <View>
          <Text>Você não tem nenhum treino no momento</Text>
        </View>
      }
    </View>
  );
}