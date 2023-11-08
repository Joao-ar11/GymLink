import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import CardExercicio from "../CardExercicio";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function ExerciciosAluno({ route, navigation }) {

  const [exercicios, setExercicios] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
      const novos = [];
      const c = collection(db, 'treinos', route.params.id, 'exercicios');
      getDocs(c)
      .then((docs) => {
        docs.forEach((doc) => {
          novos.push({...doc.data(), ref: doc.ref.path, id: doc.id});
        })
      })
      .then(() => {setExercicios(novos); setRefresh(false);})
      .catch((error) => console.log(error));
    }
  }, [refresh]);

  return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Exercicios</Text>
        <FlatList 
          data={exercicios}
          renderItem={({ item }) => <CardExercicio item={item} navigation={navigation}/>}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            width: '100%',
            height: 'auto',
            padding: 5,
            paddingTop: 15,
            alignItems: 'center',
            gap: 20
          }}
          extraData={exercicios}
        />
    </View>
  );
}