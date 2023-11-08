import { useContext } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import User from '../User';
import { db } from '../../firebase/firebase';
import { setDoc, doc } from "firebase/firestore";

export default function Notificacoes({ navigation }) {
  const usuario = useContext(User);
  const notificacoes = usuario.notificacoes;

  function verUsuario(uid, idVinculo) {
    if (usuario.user.tipo === 'personal') {
      navigation.navigate('Solicitador', {
        tipo: 'aluno',
        uid: uid,
        idVinculo: idVinculo
      })
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Notificações</Text>
      <FlatList 
        data={notificacoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => {
          setDoc(doc(db, 'notificacoes/' + item.id), { visualizado: true }, {merge: true})
          return (<TouchableOpacity style={styles.notificacaoContainer} onPress={() => verUsuario(item?.solicitador, item?.idVinculo)}>
            <Image source={require('../../../assets/bell.png')} style={styles.imagem}/>
            <View style={styles.textoContainer}>
              <Text style={styles.assunto}>{item.assunto}</Text>
              <Text style={styles.texto}>{item.texto}</Text>
            </View>
          </TouchableOpacity>)
          }
        }
      />
    </View>
  );
}