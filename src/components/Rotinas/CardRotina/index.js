import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function CardRotina(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image style={styles.foto} source={{uri: props.item.foto}}/>
      </View>
      <View style={styles.textoContainer}>
        <Text style={styles.nome}>{props.item.nome}</Text>
        <Text style={styles.instrutor}>{props.item.instrutor}</Text>
        <Text style={styles.data}>{props.item.data}</Text>
      </View>
      <TouchableOpacity style={styles.menuContainer}>
        <Image style={styles.menuFoto} source={require('../../../../assets/pontos-verticais.png')}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}