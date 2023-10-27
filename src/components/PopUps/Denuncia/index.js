import { useState } from "react";
import { View, TouchableOpacity, Image, Text} from "react-native";
import styles from "./styles";

export default function Denuncia(props) {

  const [ check1, setCheck1 ] = useState(false);
  const [ check2, setCheck2 ] = useState(false);
  const [ check3, setCheck3 ] = useState(false);
  const [ check4, setCheck4 ] = useState(false);

  const tipo = props.tipo === 'personal';
  const motivo1 = tipo ? 'Promoção de técnicas inseguras ou prejudiciais.' : 'Atividades suspeitas ou fraudulentas.';
  const motivo2 = tipo ? 'Realização de alegações médicas infundadas.' : 'Comportamento ofensivo ou discriminatório.';
  const motivo3 = 'Uso indevido de fotos ou conteúdo de terceiros.';
  const motivo4 = tipo ? 'Comportamento inapropriado ou assédio a clientes.' : 'Comportamento inapropriado ou assédio.';

  return (
    <View style={styles.containerDenuncia}>
      <View style={styles.modalDenuncia}>
        <Text style={styles.tituloDenuncia}>Reportar esse Perfil?</Text>
        <Text style={styles.legendDenuncia}>Motivos:</Text>
        <View style={styles.containerCheckDenuncia}>
          <TouchableOpacity onPress={() => setCheck1(!check1)} style={styles.containerMotivo}>
            <View style={styles.checkDenuncia}>
              {check1 ? <Image style={styles.checkImagem} source={require('../../../../assets/check.png')}/> : <></>}
            </View>
            <Text style={styles.textoMotivo}>{motivo1}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCheck2(!check2)} style={styles.containerMotivo}>
            <View style={styles.checkDenuncia}>
              {check2 ? <Image style={styles.checkImagem} source={require('../../../../assets/check.png')}/> : <></>}
            </View>
            <Text style={styles.textoMotivo}>{motivo2}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCheck3(!check3)} style={styles.containerMotivo}>
            <View style={styles.checkDenuncia}>
              {check3 ? <Image style={styles.checkImagem} source={require('../../../../assets/check.png')}/> : <></>}
            </View>
            <Text style={styles.textoMotivo}>{motivo3}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCheck4(!check4)} style={styles.containerMotivo}>
            <View style={styles.checkDenuncia}>
              {check4 ? <Image style={styles.checkImagem} source={require('../../../../assets/check.png')}/> : <></>}
            </View>
            <Text style={styles.textoMotivo}>{motivo4}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBotoesDenuncia}>
          <TouchableOpacity onPress={props.fecharModal} style={styles.botaoDenuncia}><Text style={styles.textoCancelar}>Cancelar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botaoDenuncia}><Text style={styles.textoConfirmar}>Confirmar</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}