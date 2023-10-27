import { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function VisualilzarAluno() {

  const [ modalDenuncia, setModalDenuncia ] = useState(false);

  function modal() {
    setModalDenuncia(!modalDenuncia);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={modal} style={styles.botaoDenuncia}><Image style={styles.imagemDenuncia} source={require('../../../../assets/flag.png')}/></TouchableOpacity>
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={require('../../../../assets/user.png')}/>
      </View>
      <Text style={styles.nome}>Usuário</Text>
      <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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
      { modalDenuncia ?
          <Denuncia id={props.item.id} tipo={props.item.tipo} fecharModal={modal}/>
          : <></>
      }
    </View>
  );
}