import { View } from "react-native";
import ListaPersonais from "./ListaPersonais";

export default function ListaVinculos({ route, navigation }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20, width: '100%', backgroundColor: '#FFFFFF', alignItems: 'center' }}>
      <ListaPersonais navigation={navigation} />
    </View>
  );
}