import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import Card from "./Card";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, limit } from "firebase/firestore";

export default function ListaExerciciosPersonal({ route, navigation }){
  const [ exercicios, setExercicios] = useState([]); 

  useEffect(() => {
    const novos = [];
    const c = collection(db, 'exercicios');
    getDocs(c)
    .then((docs) => {
      docs.forEach((doc) => {
        novos.push({...doc.data(), id: doc.id});
      })
      setExercicios(novos);
    })
    .catch((error) => console.log(error))
  }, []);

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecione um Exercício</Text>
      <FlatList
        data={exercicios}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => <Card item={item} lista={route.params.listaExercicios} setLista={route.params.setListaExercicios} navigation={navigation}/>}
        extraData={exercicios}
      />
    </View>
  );
}