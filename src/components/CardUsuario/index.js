import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";

export default function CardUsuario(props) {

  function selecionarUsuario() {
    props.navigation.navigate({
      name: 'VisualizarUsuario',
      screen: 'VisualizarUsuario',
      params: {
        uid: props.item.uid,
        tipo: props.item.tipo
      }
    });
  }

  return(
    <TouchableOpacity style={styles.container} onPress={selecionarUsuario}>
      <View style={styles.imagemContainer}>
        <Image style={styles.foto} source={{ uri: props.item.foto }}/>
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.nome}>{props.item.nome}</Text>
        <Text numberOfLines={1} style={styles.descricao}>{props.item.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}