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
    fontSize: 16,
    fontWeight: '700'
  },

  botao: {
    marginTop: 20,
    width: 300,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4736C6',
    borderRadius: 20
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700'
  },

  lista: {
    marginTop: 20,
    width: '100%',
    paddingBottom: 20,
    gap: 10
  }
});