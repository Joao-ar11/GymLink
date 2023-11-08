import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  titulo: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '700'
  },

  lista: {
    paddingTop: 10,
    paddingBottom: 20,
    minWidth: '100%',
    alignItems: 'center',
    gap: 10
  },

  notificacaoContainer: {
    paddingHorizontal: 10,
    width: '90%',
    height: 80,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  imagem: {
    marginRight: 'auto',
    width: 60,
    height: 60
  },

  textoContainer: {
    marginRight: 30,
    width: 200
  },

  assunto: {
    fontSize: 14,
    fontWeight: '700'
  },

  texto: {
    fontSize: 12,
    fontWeight: '500'
  }
});