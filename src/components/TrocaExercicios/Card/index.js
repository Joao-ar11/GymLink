import { useContext } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { db } from "../../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import styles from "./styles";

export default function Card(props) {

  function mudar() {
    const d = doc(db, props.documento);
    setDoc(d, {nome: props.item.nome}, {merge: true})
    .then(() => {props.navigation.pop(); props.navigation.pop()})
    .catch((error) => console.log(error))
  }

  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.item.foto}}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <TouchableOpacity  style={styles.selecionar} onPress={mudar}>
        <Text>Selecionar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}