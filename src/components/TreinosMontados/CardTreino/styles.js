import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
    width: '90%',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10
  },

  head: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icone: {
    width: 30,
    height: 30
  },

  treinoNome: {
    fontSize: 16,
    fontWeight: '700'
  },

  descricao: {
    width: 290,
    fontSize: 12,
    fontWeight: '500'
  },

  bottom: {
    marginTop: 15,
    flexDirection: 'row'
  },

  fotoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },

  foto: {
    width: 40,
    height: 40
  },

  nomeContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },

  nomeInstrutor: {
    fontSize: 12,
    fontWeight: '500'
  },

  botao: {
    alignSelf: 'flex-end',
    marginLeft: 'auto'
  },

  botaoTexto: {
    color: '#6CC175',
    fontSize: 12,
    fontWeight: '800'
  }
});