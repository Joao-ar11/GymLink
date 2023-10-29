import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    width: '90%',
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

  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 40,
    height: 40,
  },

  nome: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: '500'
  },

  botao: {
    marginLeft: 'auto',
    padding: 1,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  selecionado: {
    width: 13,
    height: 13,
    backgroundColor: 'green',
    borderRadius: 7
  }
});