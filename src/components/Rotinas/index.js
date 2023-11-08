import { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import CardRotina from "./CardRotina";
import User from "../User";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function Rotinas({ route, navigation }) {
  
  const [ rotinas, setRotinas ] = useState([]);
  const usuario = useContext(User);
  let titulo;

  if (route.params) {
    titulo = 'Rotinas'
  } else {
    titulo = 'Histórico de Treinos'
  }

  useEffect(() => {
    if (route.params) {
      const novos = [];
      const c = collection(db, 'treinos');
      const q = query(c, where('aluno', '==', usuario.user.uid), where('personal', '==', route.params.id));
      getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => novos.push({...doc.data(), id: doc.id}))
      })
      .then(() => setRotinas(novos.reverse()))
      .catch((error) => console.log(error));
    } else {
      const novos = [];
      const c = collection(db, 'treinos');
      const q = query(c, where('aluno', '==', usuario.user.uid));
      getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => novos.push({...doc.data(), id: doc.id}))
      })
      .then(() => setRotinas(novos.reverse()))
      .catch((error) => console.log(error));
    }
  }, [usuario.user])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.rotinasContainer}>
        <View style={styles.filtroContainer}>
          <Text style={styles.filtroTexto}>Filtrar:</Text>
          <View style={styles.filtroBotoesContainer}>
            <TouchableOpacity style={styles.filtroBotao}><Text style={styles.filtroBotaoTexto}>7D</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filtroBotao}><Text style={styles.filtroBotaoTexto}>15D</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filtroBotao}><Text style={styles.filtroBotaoTexto}>1M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filtroBotao}><Image style={styles.filtroBotaoImagem} source={require('../../../assets/filtro.png')}/></TouchableOpacity>
          </View>
        </View>
        <FlatList 
          data={rotinas}
          contentContainerStyle={{alignItems: 'center', width: '100%', paddingBottom: 40}}
          renderItem={({ item }) => <CardRotina item={item} navigation={navigation}/>}
          keyExtractor={(item) => item.id}
          extraData={rotinas}
        />
      </View>
    </View>
  );
}