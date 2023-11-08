import { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable, ActivityIndicator } from "react-native";
import { db } from "../../../firebase/firebase";
import { addDoc, collection, setDoc, doc, deleteDoc, } from "firebase/firestore";
import styles from "../styles";
import Denuncia from "../../PopUps/Denuncia";
import User from '../../User';

export default function VisualilzarPersonal(props) {

  const [ modalDenuncia, setModalDenuncia ] = useState(false);
  const usuario = useContext(User);
  const [ solicitar, setSolicitar ] = useState(false);
  const [ modalVincular, setModalVincular ] = useState(false);
  const [ modalEncerrar, setModalEncerrar ] = useState(false);
  const [ encerrar, setEncerrar ] = useState(false);
  const [ carregar, setCarregar ] = useState(false);
  let vinculado = false;
  let requisitado = false;

  if (usuario.user.vinculos.includes(props.item.uid)) {
    vinculado = true;
  }

  if (usuario.user.solicitacoes.includes(props.item.uid)) {
    requisitado = true;
  }

  function mudarModalDenuncia() {
    setModalDenuncia(!modalDenuncia);
  }

  useEffect(() => {
    if (solicitar) {
      setCarregar(true)
      const c = collection(db, 'vinculos');
      addDoc(c, {
        aluno: usuario.user.uid,
        personal: props.item.uid,
        alunoVisualizado: true,
        estado: 'em aguardo',
        personalVisualizado: false
      })
      .then((ref) => {
        const c = collection(db, 'notificacoes');
        addDoc(c, {
          uid: props.item.uid,
          assunto: 'Vínculo',
          solicitador: usuario.user.uid,
          texto: `${usuario.user.nome} requisitou um vínculo com você`,
          visualizado: false,
          idVinculo: ref.id
        })
      })
      .then(() => {
        const d = doc(db, 'users', usuario.user.idDocumento);
        setDoc(d, {...usuario.user, solicitacoes: [...usuario.user.solicitacoes, props.item.uid]})
      })
      .then(() => usuario.setUser({...usuario.user, solicitacoes: [...usuario.user.solicitacoes, props.item.uid]}))
      .then(() => {
        setCarregar(false);
        setModalVincular(false);
        setSolicitar(false);
      })
      .catch((error) => {
        setCarregar(false);
        setModalVincular(false);
        setSolicitar(false);
        console.log(error);
      })
    }
  }, [solicitar]);

  useEffect(() => {
    if (encerrar) {
      setCarregar(true)
      const c = collection(db, 'vinculos');
      const q = query(c, where('aluno', '==', usuario.user.uid), where('personal', '==', props.item.uid));
      getDocs(q)
      .then((docs) => {
        let vinculo;
        docs.forEach((d) => {
          vinculo = d.ref;
        });
        deleteDoc(vinculo);
      })
      .then(() => {
        const c = collection(db, 'notificacoes');
        addDoc(c, {
          uid: props.item.uid,
          assunto: 'Encerramento',
          texto: `${usuario.user.nome} encerrou o vínculo com você`,
          visualizado: false
        })
      })
      .then(() => {
        usuario.setUser({...usuario.setUser, solicitacoes: [...solicitacoes], vinculos: vinculos.filter((item) => item !== props.item.uid)})
      })
      .then(() => {
        setCarregar(false);
        setModalEncerrar(false);
        setEncerrar(false);
      })
      .catch((error) => {
        setCarregar(false);
        setModalEncerrar(false);
        setEncerrar(false);
        console.log(error);
      })
    }
  }, [encerrar]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={mudarModalDenuncia} style={styles.botaoDenuncia}><Image style={styles.imagemDenuncia} source={require('../../../../assets/flag.png')}/></TouchableOpacity>
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={{ uri: props.item.foto }}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <Text style={styles.descricao}>{props.item.descricao}</Text>
      { vinculado ?
        <TouchableOpacity style={{...styles.botao, backgroundColor: '#FFAAAA'}} disabled={requisitado}>
          <Text style={styles.solicitarTexto}>Encerrar Vínculo</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.botao} disabled={requisitado} onPress={() => setModalVincular(true)}>
          <Text style={styles.solicitarTexto}>{requisitado ? 'Enviado' : 'Solicitar Vínculo'}</Text>
        </TouchableOpacity>
      }
      { modalDenuncia ?
          <Denuncia id={props.item.id} tipo={props.item.tipo} fecharModal={mudarModalDenuncia}/>
        : <></>
      }
      {modalVincular?
        <Pressable style={styles.containerModal} onPress={() => setModalVincular(false)}>
          <View style={styles.modal}>
            {!carregar ? 
              <>
                <Text style={styles.titulo}>Solicitar Vínculo?</Text>
                <View style={styles.containerBotoes}>
                  <TouchableOpacity style={styles.botaoModal} onPress={() => setModalVincular(false)}><Text style={styles.textoCancelar}>Cancelar</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.botaoModal} onPress={() => {setSolicitar(true)}}><Text style={styles.textoConfirmar}>Confirmar</Text></TouchableOpacity>
                </View>
              </>
              :
              <ActivityIndicator size={'large'} color={'#4736C6'}/>
            }
          </View>
        </Pressable>
        :
      <></>
      }
      {modalEncerrar?
        <Pressable style={styles.containerModal} onPress={() => setModalEncerrar(false)}>
          <View style={styles.modal}>
            {!carregar ? 
              <>
                <Text style={styles.titulo}>Encerrar Vínculo?</Text>
                <View style={styles.containerBotoes}>
                  <TouchableOpacity style={styles.botaoModal} onPress={() => setModalEncerrar(false)}><Text style={styles.textoCancelar}>Cancelar</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.botaoModal} onPress={() => {setEncerrar(true)}}><Text style={styles.textoConfirmar}>Confirmar</Text></TouchableOpacity>
                </View>
              </>
              :
              <ActivityIndicator size={'large'} color={'#4736C6'}/>
            }
          </View>
        </Pressable>
        :
      <></>
      }
    </View>
  );
}