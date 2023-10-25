import { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function VisualilzarPersonal(props) {

  return (
    <View style={styles.container}>
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={{ uri: props.item.foto }}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <Text style={styles.descricao}>{props.item.descricao}</Text>
    </View>
  );
}