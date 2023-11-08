import { useContext } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { db } from "../../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import styles from "./styles";

export default function Card(props) {

  function adicionar() {
    props.setLista([...props.lista, {...props.item, quantidade: 10, sets: 10, concluido: false}]);
    props.navigation.pop();
  }

  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.item.foto}}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <TouchableOpacity  style={styles.selecionar} onPress={adicionar}>
        <Text>Selecionar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}