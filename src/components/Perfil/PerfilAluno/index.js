import { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, Pressable, ActivityIndicator } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { storage, db } from "../../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import styles from "../styles";
import Editor from "../Editor";
import User from '../../User';


export default function PerfilAluno() {
  const usuario = useContext(User);
  const [ modal, setModal ] = useState(false);
  const [ valor, setValor ] = useState('');
  const [ atributo, setAtributo ] = useState('');
  const [ novaFoto, setNovaFoto ] = useState(false);
  let novaFotoNome;

  function abrirModal(novoValor, campo) {
    setValor(novoValor);
    setAtributo(campo)
    setModal(!modal);
  }

  useEffect(() => {
    if (novaFoto) {
      ImagePicker.getMediaLibraryPermissionsAsync()
      .then((permissao) => {
        if (!permissao.granted) {
          return ImagePicker.requestMediaLibraryPermissionsAsync()
          .then((resposta) => {
            if (resposta.granted) {
              return ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images
              })
            } else {
              return Promise.reject('Solicitação de acesso a galeria negada');
            }
          })
        } else {
          return ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
          })
        }
      })
      .then((imagem) => {
        if (!imagem.canceled) {
          const uri = imagem.assets[0].uri;
          const novaFotoExtensao = uri.substring(uri.lastIndexOf('.'));
          novaFotoNome = Date.now() + Math.ceil(Math.random() * 1000) + novaFotoExtensao;
          return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
              resolve(xhr.response);
            };
            
            xhr.onerror = function() {
              reject(new Error('uriToBlob failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
          });
        } else {
          return Promise.reject('Cancelamento da operação');
        }
      })
      .then((blob) => {
        const r = ref(storage, 'usuarios/' + novaFotoNome);
        return uploadBytes(r, blob);
      })
      .then(() => deleteObject(ref(storage, usuario.user.foto)))
      .then(() => {
        const r = ref(storage, 'usuarios/' + novaFotoNome);
        return getDownloadURL(r);
      })
      .then((url) => {
        const usuarioModificado = {...usuario.user};
        usuarioModificado.foto = url;
        const d = doc(db, 'users', usuario.user.idDocumento);
        usuario.setUser(usuarioModificado);
        setDoc(d, usuarioModificado, {merge: true});
      })
      .then(() =>
        setNovaFoto(false)
      )
      .catch((error) => {
        console.log(error);
        setNovaFoto(false);
      })
    }
  }, [novaFoto]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerImage}>
        { !novaFoto ? 
        <>
          <Image style={styles.image} source={{ uri: usuario.user.foto }}/>
        </>
        :
          <ActivityIndicator size={'large'} color={'#4736C6'}/>
        }
        <TouchableOpacity onPress={() => setNovaFoto(true)} style={{...styles.edicao, ...styles.edicaoImagemBotao}}>
          <Image style={styles.edicaoImagem} source={require('../../../../assets/edicao.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.containerNome}>
        <Text style={styles.nome}>{usuario.user.nome}</Text>
        <TouchableOpacity style={styles.edicao} onPress={() => abrirModal(usuario.user.nome, 'nome')}>
          <Image style={styles.edicaoImagem} source={require('../../../../assets/edicao.png')}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.descricao}>{usuario.user.descricao}</Text>
      <TouchableOpacity style={styles.editarDescricao} onPress={() => abrirModal(usuario.user.descricao, 'descricao')}><Text style={styles.editarDescricaoTexto}>Editar Bio</Text></TouchableOpacity>
      <View style={styles.atributoSecaoContainer}>
        <TouchableOpacity style={styles.atributoContainer} onPress={() => abrirModal(usuario.user.peso, 'peso')}>
          <Text style={styles.atributoNome}>Peso</Text>
          <Text style={styles.atributoValor}>{usuario.user.peso}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.atributoContainer} onPress={() => abrirModal(usuario.user.altura, 'altura')}>
          <Text style={styles.atributoNome}>Altura</Text>
          <Text style={styles.atributoValor}>{usuario.user.altura}</Text>
        </TouchableOpacity>
      </View>
      { modal ?
        <Pressable style={styles.modalContainer} onPress={() => setModal(false)}>
          <Editor valor={valor} modal={setModal} atributo={atributo}/>
        </Pressable> :
        <></>
      }
    </ScrollView>
  );
}