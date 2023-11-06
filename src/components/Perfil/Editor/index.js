import { useState, useContext, useEffect } from "react";
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { db } from '../../../firebase/firebase';
import { doc, setDoc } from "firebase/firestore";
import styles from "./styles";

import User from "../../User";

export default function Editor(props) {
  const [ valor, setValor ] = useState(props.valor);
  const [ enviar, setEnviar ] = useState();
  const [ carregar, setCarregar ] = useState(false);
  const usuario = useContext(User);

  function confirmar() {
    setEnviar(true);
  }

  const usuarioModificado = {...usuario.user}

  useEffect(() => {
    if (enviar) {
      setCarregar(true);
      usuarioModificado[props.atributo] = valor;
      usuario.setUser(usuarioModificado);
      const documento = doc(db, 'users', usuario.user.idDocumento);
      setDoc(documento, usuarioModificado, { merge: true })
      .then(() => {
        setCarregar(false);
        props.modal(false);
      }) 
      .catch((error) => {
        console.log(error)
      })
    }
  }, [enviar]);

  return(
    <KeyboardAvoidingView style={styles.modal} behavior="padding">
      {!carregar ? <><Text style={styles.editar}>Editar</Text>
      <TextInput style={styles.input} value={valor} onChangeText={setValor} multiline={true}></TextInput>
      <View style={styles.containerBotoesModal}>
        <TouchableOpacity style={styles.botaoModal} onPress={() => props.modal(false)}><Text style={styles.cancelar}>Cancelar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botaoModal} onPress={confirmar}><Text style={styles.confirmar}>Confirmar</Text></TouchableOpacity>
      </View>
      </>
      :
      <ActivityIndicator size={'large'} color={'#4736C6'} animating={carregar} style={{display: carregar ? 'flex' : 'none'}} />}
    </KeyboardAvoidingView>
  )
}