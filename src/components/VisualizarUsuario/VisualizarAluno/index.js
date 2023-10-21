import { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function VisualilzarAluno({ route, navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={require('../../../../assets/user.png')}/>
      </View>
      <Text style={styles.nome}>Usuário</Text>
      <Text style={styles.objetivo}>Objetivo a ser alcançado</Text>
      <View style={styles.atributosSecao}>
        <View style={styles.atributoContainer}>
          <Text style={styles.atributoNome}>Peso</Text>
          <Text style={styles.atributoValor}>62KG</Text>
        </View>
        <View style={styles.atributoContainer}>
          <Text style={styles.atributoNome}>Altura</Text>
          <Text style={styles.atributoValor}>1,72m</Text>
        </View>
        <View style={styles.atributoContainer}>
          <Text style={styles.atributoNome}>Tipo fisico</Text>
          <Text style={{...styles.atributoValor, marginTop: 14,fontSize: 15}}>Sedentário</Text>
        </View>
      </View>
      <View style={styles.graficoContainer}>
        <Image style={styles.grafico} source={require('../../../../assets/grafico.jpg')}/>
      </View>
    </View>
  );
}