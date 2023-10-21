import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  barra: {
    marginTop: 500,
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    elevation: 15,
    backgroundColor : "#FFFFFF",
    zIndex: 20
  },

  icone: {
    width: 25,
    height: 25
  },

  iconePrincipal: {
    width: 50,
    height: 50
  },

  botaoPrincipal: {
    position: "relative",
    top: -25,
    height: 60,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    elevation: 15,
    backgroundColor : "#FFFFFF"
  }

});