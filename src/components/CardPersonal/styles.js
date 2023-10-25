import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    height: 80,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  imagemContainer: {
    marginRight: 'auto',
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden'
  },

  foto: {
    width: 60,
    height: 60
  },

  containerTexto: {
    width: 200
  },

  nome: {
    fontSize: 12,
    fontWeight: '500'
  },

  descricao: {
    fontSize: 10,
    fontWeight: '500'
  },

  botaoAvaliacao: {
    marginLeft: 'auto',
    width: 24,
    height: 24,
    overflow: 'hidden'
  },

  fotoAvaliacao: {
    width: 24,
    height: 24
  }
});