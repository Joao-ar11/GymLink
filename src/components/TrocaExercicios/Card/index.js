import { useState } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import styles from "./styles";

export default function Card(props) {
  const [ selecionado, setSelecionado ] = useState(false);

  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.item.foto}}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => setSelecionado(!selecionado)}>
        {selecionado ? <View style={styles.selecionado}></View> : <></>}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}