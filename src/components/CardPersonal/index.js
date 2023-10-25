import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";

export default function CardPersonal(props) {

  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagemContainer}>
        <Image style={styles.foto} source={{ uri: props.item.foto }}/>
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.nome}>{props.item.nome}</Text>
        <Text numberOfLines={1} style={styles.descricao}>{props.item.descricao}</Text>
      </View>
      <TouchableOpacity style={styles.botaoAvaliacao}>
        <Image style={styles.fotoAvaliacao} source={require('../../../assets/star-outline.png')}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}