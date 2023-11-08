import { useState, useContext, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Pressable, ActivityIndicator } from "react-native";
import { db } from "../../../firebase/firebase";
import { setDoc, doc, addDoc, collection, query, where } from "firebase/firestore";
import Denuncia from "../../PopUps/Denuncia";
import User from '../../User';
import styles from "../styles";

export default function VisualilzarAluno(props) {

  const [ modalDenuncia, setModalDenuncia ] = useState(false);
  const [ modalVincular, setModalVincular ] = useState(false);
  const [ modalEncerrar, setModalEncerrar ] = useState(false);
  const [ encerrar, setEncerrar ] = useState(false);
  const [ vincular, setVincular ] = useState(false);
  const [ negar, setNegar ] = useState(false);
  const [ carregar, setCarregar ] = useState(false);


  const usuario = useContext(User);
  let vinculado = false;

  if (usuario.user.vinculos.includes(props.item.uid)) {
    vinculado = true;
  }

  useEffect(() => {
    if (vincular) {
      setCarregar(true)
      const r = doc(db, 'vinculos/' + props.vinculo);
      setDoc(r, {
        aluno: props.item.uid,
        personal: usuario.user.uid,
        alunoVisualizado: true,
        estado: 'concluido',
        personalVisualizado: true
      }, {merge: true})
      .then(() => {
        const c = collection(db, 'notificacoes');
        addDoc(c, {
          uid: props.item.uid,
          assunto: 'Aceito de vínculo',
          texto: `${usuario.user.nome} Confirmou a solicitação de vínculo com você`,
          visualizado: false
        })
      })
      .then(() => usuario.setUser({...usuario.user, vinculos: [...usuario.user.vinculos, props.item.uid]}))
      .then(() => {
        const q = query(c, where('uid', '==', usuario.user.uid), where('solicitador', '==', props.item.uid));
        getDocs(q)
        .then((docs) => {
          let vinculo;
          docs.forEach((d) => {
            vinculo = d.ref;
          });
          usuario.setNotificoes(usuario.notificacoes.filter((item) => item.id !== vinculo.id));
          deleteDoc(vinculo);
      })})
      .then(() => {
        setCarregar(false);
        setModalVincular(false);
        setVincular(false);
      })
      .catch((error) => {
        setCarregar(false);
        setModalVincular(false);
        setVincular(false);
        console.log(error);
      })
    }
  }, [vincular]);

  useEffect(() => {
    if (encerrar) {
      setCarregar(true)
      const c = collection(db, 'vinculos');
      const q = query(c, where('personal', '==', usuario.user.uid), where('aluno', '==', props.item.uid));
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
        const c = collection(db, 'notificacoes');
        const q = query(c, where('uid', '==', usuario.user.uid), where('solicitador', '==', props.item.uid));
        getDocs(q)
        .then((docs) => {
          let vinculo;
          docs.forEach((d) => {
            vinculo = d.ref;
          });
          usuario.setNotificoes(usuario.notificacoes.filter((item) => item.id !== vinculo.id));
          deleteDoc(vinculo);
      })})
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

  useEffect(() => {
    if (negar) {
      setCarregar(true)
      const c = collection(db, 'vinculos');
      const q = query(c, where('personal', '==', usuario.user.uid), where('aluno', '==', props.item.uid));
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
          assunto: 'Recusa de Vínculo',
          texto: `${usuario.user.nome} recusou o vínculo com você`,
          visualizado: false
        })
      })
      .then(() => {
        const c = collection(db, 'notificacoes');
        const q = query(c, where('uid', '==', usuario.user.uid), where('solicitador', '==', props.item.uid));
        getDocs(q)
        .then((docs) => {
          let vinculo;
          docs.forEach((d) => {
            vinculo = d.ref;
          });
          deleteDoc(vinculo);
      })})
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
  }, [negar]);

  function modal() {
    setModalDenuncia(!modalDenuncia);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={modal} style={styles.botaoDenuncia}><Image style={styles.imagemDenuncia} source={require('../../../../assets/flag.png')}/></TouchableOpacity>
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={{uri: props.item.foto}}/>
      </View>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <Text style={styles.descricao}>{props.item.descricao}</Text>
      <View style={styles.atributosSecao}>
        <View style={styles.atributoContainer}>
          <Text style={styles.atributoNome}>Peso</Text>
          <Text style={styles.atributoValor}>{props.item.peso}</Text>
        </View>
        <View style={styles.atributoContainer}>
          <Text style={styles.atributoNome}>Altura</Text>
          <Text style={styles.atributoValor}>{props.item.altura}</Text>
        </View>
      </View>
      { vinculado ?
        <TouchableOpacity style={{...styles.botao, backgroundColor: '#FFAAAA'}}>
          <Text style={styles.solicitarTexto}>Encerrar Vínculo</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.botao} onPress={() => setModalVincular(true)}>
          <Text style={styles.solicitarTexto}>Confirmar Vínculo</Text>
        </TouchableOpacity>
      }
      { modalDenuncia ?
          <Denuncia id={props.item.uid} tipo={props.item.tipo} fecharModal={modal}/>
          : <></>
      }
      {modalVincular?
        <Pressable style={styles.containerModal} onPress={() => setModalVincular(false)}>
          <View style={styles.modal}>
            {!carregar ? 
              <>
                <Text style={styles.titulo}>Confirmar Vínculo?</Text>
                <View style={styles.containerBotoes}>
                  <TouchableOpacity style={styles.botaoModal} onPress={() => setNegar(true)}><Text style={styles.textoCancelar}>Recusar</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.botaoModal} onPress={() => {setVincular(true)}}><Text style={styles.textoConfirmar}>Confirmar</Text></TouchableOpacity>
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