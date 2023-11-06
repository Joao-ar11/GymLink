import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, BackHandler, Text, TouchableOpacity } from 'react-native';
import Main from './routes/Main';
import Cadastro from './routes/Stacks/Cadastro/index.js';
import User from './components/User';
import { auth, db } from './firebase/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDocs, where, collection, query } from 'firebase/firestore';
import { useNetInfo, refresh } from "@react-native-community/netinfo";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },

  containerConexao: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalConexao: {
    width: 300,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tituloConexao: {
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
    width: 200,
    fontSize: 15,
    fontWeight: '700'
  },

  containerBotoesConexao: {
    marginTop: 'auto',
    overflow: 'hidden',
    width: '100%',
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  botaoConexao: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoCancelar: {
    color: '#C6C6C6',
    fontSize: 15,
    fontWeight: '700'
  },

  textoConfirmar: {
    color: '#00899B',
    fontSize: 15,
    fontWeight: '700'
  },
});

async function carregarDadosUsuario() {
  const uid = auth.currentUser.uid;
  const colecao = collection(db, 'users');
  const q = query(colecao, where('uid', '==', uid))
  const docs = await getDocs(q);
  let usuario;
  docs.forEach((doc) => {usuario = doc.data()});
  return usuario;
}

export default function Index() {
  const [ carregando, setCarregando ] = useState(true);
  const [ user, setUser ] = useState(null)
  const netInfo = useNetInfo();
  
  useEffect(() => onAuthStateChanged(auth, () => {
    if (auth.currentUser) {
      setCarregando(true);
      carregarDadosUsuario()
      .then((dados) => setUser(dados))
      .then(() => setCarregando(false))
      .catch(() => setCarregando(false));
    } else {
      setCarregando(false);
    }
  }), []);

  return (
    <View style={styles.container}>
      <User.Provider value={{ user, setUser }}>
        { !netInfo.isConnected ?
          <View style={styles.containerConexao}>
            <View style={styles.modalConexao}>
              <Text style={styles.tituloConexao}>Sem conexão com a internet, tentar de novo?</Text>
              <View style={styles.containerBotoesConexao}>
                <TouchableOpacity style={styles.botaoConexao} onPress={() => BackHandler.exitApp()}><Text style={styles.textoCancelar}>Cancelar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botaoConexao} onPress={() => refresh()}><Text style={styles.textoConfirmar}>Confirmar</Text></TouchableOpacity>
              </View>
            </View>
          </View>
          :
          carregando ?
          <ActivityIndicator animating={carregando} size={'large'} color={'#4736C6'} style={{ position: 'absolute', top: '45%', left: '45%', display: carregando ? 'flex' : 'none'}}/>
          :
          user !== null? 
          <Main />
          :
          <Cadastro />
        }
      </User.Provider>
    </View>
  );
}