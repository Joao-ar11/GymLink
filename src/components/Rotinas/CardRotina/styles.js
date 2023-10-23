import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    width: '98%',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },

  foto: {
    width: 30,
    height: 30
  },

  textoContainer: {
    marginLeft: 20
  },

  nome: {
    color: '#575757',
    fontSize: 16,
    fontWeight: '600'
  },

  instrutor: {
    color: '#575757',
    fontSize: 10,
    fontWeight: '500'
  },

  data: {
    color: '#575757',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'italic'
  },

  menuContainer: {
    marginLeft: 'auto'
  },

  menuFoto: {
    width: 20,
    height: 20
  }
});