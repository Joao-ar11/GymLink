import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";

export default function Card(props) {

  function excluir() {
    props.setLista(props.lista.filter((item) => item.nome !== props.item.nome));
  }

  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.item.foto}}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <Text style={{marginRight: 10}}>{props.item.quantidade}x{props.item.sets}</Text>
      <TouchableOpacity  style={styles.selecionar} onPress={excluir}>
        <Text>Excluir</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}