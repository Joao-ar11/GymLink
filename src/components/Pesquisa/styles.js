import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  pesquisaContainer: {
    marginTop: 20,
    padding: 10,
    width: '90%',
    height: 50,
    backgroundColor: '#FBFBFB',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  pesquisaImagem: {
    width: 30,
    height: 30
  },

  lista: {
    marginTop: 10,
    padding: 10
  }
});