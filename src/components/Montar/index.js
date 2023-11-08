import { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { db } from "../../firebase/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import styles from "./styles";
import Card from "./Card";
import User from "../User";

export default function Montar({ route, navigation }) {
  const [ listaExercicios, setListaExercicios ] = useState([]);
  const [ enviar, setEnviar ] = useState(false);
  const [ carregar, setCarregar ] = useState(false);
  const usuario = useContext(User);

  useEffect(() => {
    if (enviar) {
      setCarregar(true);
      const c = collection(db, 'treinos');
      addDoc(c, {
        aluno: route.params.id,
        personal: usuario.user.uid,
        nomeA: route.params.nome,
        nomeP: usuario.user.nome,
        data: Timestamp.fromDate(new Date())
      })
      .then((ref) => {
        const c = collection(db, 'treinos', ref.id, 'exercicios');
        listaExercicios.forEach((item) => {
          addDoc(c, item)
        })
      })
      .then(() => {
        const c = collection(db, 'notificacoes');
        addDoc(c, {
          assunto: 'Novo Treino',
          texto: `${usuario.user.nome} enviou um novo treino para você`,
          uid: route.params.id,
          visualizado: false
        })
        .then(() => {
          setCarregar(false);
          setEnviar(false);
        })
        .catch((error) => {console.log(error); setCarregar(false); setEnviar(false);})
      })
    }
  }, [enviar]);

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Montar Treino</Text>
      <TouchableOpacity style={styles.botao} onPress={() => setEnviar(true)}><Text style={styles.botaoTexto} >Enviar Treino</Text></TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Lista', { listaExercicios, setListaExercicios })}><Text style={styles.botaoTexto} >Adicionar Exercício</Text></TouchableOpacity>
      <FlatList contentContainerStyle={styles.lista} data={listaExercicios} extraData={listaExercicios} renderItem={({ item }) => <Card item={item} setLista={setListaExercicios} lista={listaExercicios}/>}/>
      {carregar ?
          <ActivityIndicator animating={carregar} size={'large'} color={'#4736C6'} style={{ position: 'absolute', bottom: 10, right: 10}}/>
          :
          <></>
      }
    </View>
  )
}