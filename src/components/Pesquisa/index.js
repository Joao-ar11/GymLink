import { useState, useEffect } from "react";
import { Pressable, FlatList, TextInput, TouchableOpacity, Keyboard, View, Image } from "react-native";
import { db } from "../../firebase/firebase";
import { getDocs, query, where, collection, limit } from "firebase/firestore";
import styles from "./styles";
import CardUsuario from '../CardUsuario';

export default function Pesquisa({ navigation }) {

  const [ pesquisa, setPesquisa ] = useState(false);
  const [ pesquisado, setPesquisado ] = useState(false);
  const [ input, setInput ] = useState('');
  const [personais, setPersonais] = useState([]);

  useEffect(() => {
    const novosPersonais = [];
    const c = collection(db, 'users');
    if (pesquisa) {
      const resultados = [];
      const q1 = query(c, where('tipo', '==', 'personal'), where('nome', '>=', input), where('nome', '<=', input + '\uf8ff'));
      getDocs(q1)
      .then((docs) => {
        docs.forEach((doc) => {novosPersonais.push({...doc.data()}); resultados.push(doc.data().uid), console.log(doc.data())})
      })
      .then(() => {
        const q2 = query(c, where('tipo', '==', 'personal'), where('descricao', '>=', input), where('descricao', '<=', input + '\uf8ff'));
        getDocs(q2)
        .then((docs) => {
          docs.forEach((doc) => {
            if (!resultados.includes(doc.data().uid)){
              novosPersonais.push({...doc.data()})
            }
          })
          setPersonais(novosPersonais);
        })
        .catch((error) => new Promise.reject(error));
      })
      .then(() => setPersonais(novosPersonais))
      .then(() => setPesquisado(true))
      .then(() => setPesquisa(false))
      .catch((error) => console.log(error))
    } else if (!pesquisado) {
      const q = query(c, where('tipo', '==', 'personal'), limit(20));
      getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => novosPersonais.push({...doc.data()}))
      })
      .then(() => setPersonais(novosPersonais))
      .catch((error) => console.log(error));
    }
  }, [pesquisa]);


  return(
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <View style={styles.pesquisaContainer}>
        <TextInput style={styles.pesquisaInput} placeholder="Pesquise por um instrutor" value={input} onChangeText={setInput}/>
        <TouchableOpacity onPress={() => setPesquisa(true)}>
          <Image style={styles.pesquisaImagem} source={require('../../../assets/pesquisar.png')}/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={personais}
        extraData={personais}
        keyExtractor={(item) => item.uid}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => <CardUsuario item={item} navigation={navigation}/>}
      />
    </Pressable>
  );
}