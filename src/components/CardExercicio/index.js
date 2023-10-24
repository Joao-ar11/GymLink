import { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";

export default function CardExercicio(props) {
  const [ concluido, setConcluido ] = useState(props.item.concluido);

  function mudarConcluido() {
    setConcluido(!concluido);
  }

  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagemContainer}>
        <Image style={styles.imagem} source={{uri: props.item.foto}}/>
      </View>
      <Text style={styles.texto}>{props.item.nome}</Text>
      <Text style={styles.texto}>{props.item.quantidade}</Text>
      <TouchableOpacity onPress={mudarConcluido} style={styles.check}>
        {concluido ? <Image style={styles.concluido} source={require('../../../assets/check.png')}/> : <></>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.mudarExercicio}>
        <Image style={styles.mudarImagem} source={require('../../../assets/mudar.png')}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}