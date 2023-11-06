import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import Main from './routes/Main';
import Cadastro from './routes/Stacks/Cadastro/index.js';
import User from './components/User';
import { auth, db } from './firebase/firebase.js';
import { getDocs, where, collection, query } from 'firebase/firestore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },
});

async function carregarDadosUsuario() {
  const colecao = collection(db, 'usuarios');
    console.log(auth.currentUser.uid)
    const q = query(colecao, where('uid', '==', auth.currentUser.user.uid))
    const docs = await getDocs(q);
    let usuario;
    docs.forEach((doc) => {usuario = doc.data(); console.log(doc.data())});
    return usuario;
}

export default function Index() {
  const [ carregando, setCarregando ] = useState(false);
  
  if (auth.currentUser?.user) {
    useEffect(() => {
      setCarregando(true);
      carregarDadosUsuario()
      .then((dados) => setUser(dados))
      .then(setCarregando(false));
    })
  }

  const [ user, setUser ] = useState(null);

  return (
    <View style={styles.container}>
      <User.Provider value={{ user, setUser }}>
        { user === null? 
          <Cadastro />
          :
          carregando ? 
          <ActivityIndicator animating={carregando} size={'large'} color={'#4736C6'} style={{ position: 'absolute', top: '45%', left: '45%', display: carregando ? 'flex' : 'none'}}/>
          :
          <Main />
        }
      </User.Provider>
    </View>
  );
}