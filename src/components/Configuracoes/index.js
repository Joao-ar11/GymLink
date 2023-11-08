import { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Pressable, Image, ActivityIndicator } from 'react-native';
import { auth, db, storage } from '../../firebase/firebase';
import { signOut, deleteUser } from 'firebase/auth';
import { deleteObject, ref } from 'firebase/storage';
import { deleteDoc, doc } from 'firebase/firestore';
import User from '../User';

const Configuracoes = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [ modal, setModal ] = useState(false);
  const [ deletar, setDeletar ] = useState(false);
  const usuario = useContext(User);

  useEffect(() => {
    if (deletar) {
      deleteObject(ref(storage, usuario.user.foto))
      .then(() => deleteDoc(doc(db, 'users', usuario.user.idDocumento)))
      .then(() => deleteUser(auth.currentUser))
      .then(() => usuario.setUser(null))
      .then(() => setDeletar(false))
      .catch((error) => {console.log(error); setDeletar(false); setModal(false)})
    }
  }, [deletar])

  return (
    <View style={styles.container}>
      <View style={styles.settingOption}>
        <Text style={styles.settingTitle}>Configurações</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.settingItemText}>Receber Notificações</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={'#4736C6'}
            trackColor={{ true: '#A786FF'}}
          />
        </View>
        <TouchableOpacity
          style={styles.settingLink}
        >
          <Text style={styles.settingLinkText}>Ajuda e Suporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutContainer} onPress={() => {signOut(auth); usuario.setUser(null)}}>
          <Text style={styles.settingLinkText}>Fazer Logout</Text>
          <Image style={styles.logoutImagem} source={require('../../../assets/logout.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Text style={styles.deleteButton}>Excluir a Conta</Text>
        </TouchableOpacity>
      </View>

      {modal? <Pressable style={styles.containerDelete} onPress={() => setModal(false)}>
        <View style={styles.modalDelete}>
          {!deletar ? 
            <>
              <Text style={styles.tituloDelete}>Tem certeza que deseja excluir a sua conta?</Text>
              <View style={styles.containerBotoesDelete}>
                <TouchableOpacity style={styles.botaoDelete} onPress={() => setModal(false)}><Text style={styles.textoCancelar}>Cancelar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botaoDelete} onPress={() => {setDeletar(true)}}><Text style={styles.textoConfirmar}>Confirmar</Text></TouchableOpacity>
              </View>
            </>
            :
            <ActivityIndicator size={'large'} color={'#4736C6'}/>
          }
        </View>
      </Pressable> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  backButton: {
    width: 25,
    height: 25,
    marginTop: 35,
    marginLeft: 1,
    borderWidth: 1,
    borderColor: 'white',
  },
  logo: {
    width: 150,
    height: 43.62,
    marginTop: 35,
    marginRight: 100,
  },
  settingOption: {
    marginTop: 20,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    height: 90,
    marginTop: 20,
    textAlign: 'center',
    borderBottomWidth: 1, // Adiciona uma linha
    borderBottomColor: '#cbcbcb', // Define a cor da linha
    
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1, // Adiciona uma linha
    borderBottomColor: 'lightgray', // Define a cor da linha
    paddingHorizontal: 40,
   
  },
  settingItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 16,
  },
  settingLink: {
    borderBottomWidth:1,
    borderBottomColor: 'lightgray',
  },
  settingLinkText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical:16,
    paddingLeft:40,
    paddingRight: 10
  },
  deleteButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',   // Cor do texto preto
    alignSelf: 'center', // Centraliza horizontalmente
    marginTop: 80,   // Centraliza verticalmente
    padding: 8,         // Espaçamento interno
    borderWidth: 1,      // Largura da borda
    borderColor: '#FFD4D4', // cor da borda
    backgroundColor: '#FFD4D4',  // Cor de preenchimento vermelho
    borderRadius: 15,
  },
  
  
  navigationBar: { //barra de navegação 
    marginTop: 72,
    backgroundColor: 'lightgray',
    // Conteúdo da barra de navegação
  },

  logoutContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  logoutImagem: {
    width: 30,
    height: 30
  },

  containerDelete: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalDelete: {
    width: 300,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tituloDelete: {
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
    width: 200,
    fontSize: 15,
    fontWeight: '700'
  },

  containerBotoesDelete: {
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

  botaoDelete: {
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

export default Configuracoes;
