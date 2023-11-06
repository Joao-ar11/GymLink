import { View, Text } from "react-native";

export default function Erro(props) {
  return(
    <View style={{ marginTop: 5, marginBottom: 10 }}>
      <Text style={{ color: '#FF0000', fontSize: 15, fontWeight: '700'}}>{props.erro}</Text>
    </View>
  );
}