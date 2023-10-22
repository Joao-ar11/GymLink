import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 25,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  fotoContainer: {
    width: 175,
    height: 175,
    borderRadius: 92.5,
    overflow: 'hidden'
  },
  
  foto: {
    width: 175,
    height: 175,
  },

  nome: {
    fontSize: 24,
    fontWeight: '700'
  },

  descricao: {
    maxWidth: '90%',
    fontSize: 16,
    fontWeight: '400'
  },

  atributosSecao: {
    marginTop: 30,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  atributoContainer: {
    padding: 7,
    width: 90,
    height: 90,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    alignItems: 'center'
  },

  atributoNome: {
    color: '#AAAAAA',
    fontSize: 10,
    fontWeight: '700'
  },

  atributoValor: {
    marginTop: 8,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700'
  },

  graficoContainer: {
    marginTop: 30,
    width: 350,
    height: 150,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    overflow: 'hidden'
  },

  grafico: {
    width: 350,
    height: 150
  }
});