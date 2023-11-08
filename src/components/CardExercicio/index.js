import { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { db } from "../../firebase/firebase";
import { setDoc } from "firebase/firestore";
import styles from "./styles";

export default function CardExercicio(props) {
  const [ concluido, setConcluido ] = useState(props.item.concluido);

  function mudarExercicio() {
    props.navigation.navigate('TrocaExercicio', {
        id: props.item.id,
        categoria: props.item.categoria,
        nome: props.item.nome,
        ref: props.item.ref
    })
  }

  function mudarConcluido() {
    setDoc(props.item.ref, {concluido: !concluido}, {merge: true})
    .then(setConcluido(!concluido))
  }

  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagemContainer}>
        <Image style={styles.imagem} source={{uri: props.item.foto}}/>
      </View>
      <Text style={styles.texto}>{props.item.nome}</Text>
      <Text style={styles.texto}>{props.item.repeticoes}x{props.item.sets}</Text>
      <TouchableOpacity onPress={mudarConcluido} style={styles.check}>
        {concluido ? <Image style={styles.concluido} source={require('../../../assets/check.png')}/> : <></>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.mudarExercicio} onPress={mudarExercicio}>
        <Image style={styles.mudarImagem} source={require('../../../assets/mudar.png')}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}