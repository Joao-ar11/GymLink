import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  titulo: {
    fontSize: 16,
    fontWeight: '600'
  },

  rotinasContainer: {
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: 20
  },

  filtroContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15
  },

  filtroTexto: {
    color: '#AAAAAA',
    fontSize: 14,
    fontWeight: '700'
  },

  filtroBotoesContainer: {
    flexDirection: 'row',
    gap: 5
  },

  filtroBotao: {
    width: 35,
    height: 35,
    backgroundColor: '#D9D9D9',
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  filtroBotaoTexto: {
    color: '#A6A6A6',
    fontSize: 14,
    fontWeight: '700'
  },

  filtroBotaoImagem: {
    width: 25,
    height: 25
  }
});