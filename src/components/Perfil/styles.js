import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  containerImage: {
    marginTop: 20,
    width: 175,
    height: 175,
    borderRadius: 87.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 175,
    height: 175,
    borderRadius: 87.5,
  },

  edicaoImagemBotao: {
    right: 0,
    bottom: 0
  },

  containerNome: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  nome: {
    fontSize: 24,
    fontWeight: '700'
  },

  edicao: {
    position: 'absolute',
    alignItems: 'center',
    right: -25,
  },

  descricao: {
    width: '90%'
  },

  edicaoImagem: {
    width: 20,
    height: 20
  },

  editarDescricao: {
    margin: 20,
    width: 100,
    height: 25,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  editarDescricaoTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700'
  },

  atributoSecaoContainer: {
    paddingHorizontal: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  atributoContainer: {
    marginBottom: 20,
    width: 90,
    height: 90,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    alignItems: 'center'
  },

  atributoNome: {
    marginTop: 5,
    marginBottom: 15,
    color: '#AAAAAA',
    fontSize: 10,
    fontWeight: '700'
  },

  atributoValor: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700'
  },

  modalContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});