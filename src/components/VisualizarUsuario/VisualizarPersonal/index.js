import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles";
import Denuncia from "../../PopUps/Denuncia";

export default function VisualilzarPersonal(props) {

  const [ modalDenuncia, setModalDenuncia ] = useState(false);

  function modal() {
    setModalDenuncia(!modalDenuncia);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={modal} style={styles.botaoDenuncia}><Image style={styles.imagemDenuncia} source={require('../../../../assets/flag.png')}/></TouchableOpacity>
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={{ uri: props.item.foto }}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <Text style={styles.descricao}>{props.item.descricao}</Text>
      <TouchableOpacity style={styles.solicitar}>
        <Text style={styles.solicitarTexto}>Solicitar Vínculo</Text>
      </TouchableOpacity>
      { modalDenuncia ?
          <Denuncia id={props.item.id} tipo={props.item.tipo} fecharModal={modal}/>
        : <></>
      }
    </View>
  );
}