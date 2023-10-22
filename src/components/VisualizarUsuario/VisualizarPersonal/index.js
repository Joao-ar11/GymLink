import { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function VisualilzarPersonal() {

  return (
    <View style={styles.container}>
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={require('../../../../assets/user.png')}/>
      </View>
      <Text style={styles.nome}>Usuário</Text>
      <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
  );
}