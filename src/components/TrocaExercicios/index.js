import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import Card from "./Card";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

export default function TrocaExercicios({ route, navigation }){
  const [ exercicios, setExercicios] = useState([]); 


  useEffect(() => {
    const novos = [];
    const c = collection(db, 'exercicios');
    const q = query(c, where('categoria', '==', route.params.categoria));
    getDocs(q)
    .then((docs) => {
      docs.forEach((doc) => {
        if (doc.data().nome !== route.params.nome) {
          novos.push({...doc.data(), id: doc.id});
        }
      })
      setExercicios(novos);
    })
    .catch((error) => console.log(error))
  }, []);

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Troca de Exercícios</Text>
      <Text style={styles.sugerido}>Sugeridos</Text>
      <FlatList
        data={exercicios}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => <Card item={item} documento={route.params.ref}  navigation={navigation}/>}
        extraData={exercicios}
      />
    </View>
  );
}