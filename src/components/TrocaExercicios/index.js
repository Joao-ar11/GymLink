import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import Card from "./Card";

export default function TrocaExercicios(){
  const dadosTeste = [
    {
      id: 1,
      nome: 'Agachamento Sumô',
      foto: 'https://img.icons8.com/ios-glyphs/90/squats.png'
    },

    {
      id: 2,
      nome: 'Agachamento Búlgaro',
      foto: 'https://img.icons8.com/ios-glyphs/90/squats.png'
    },

    {
      id: 3,
      nome: 'Pistol Squat',
      foto: 'https://img.icons8.com/ios-glyphs/90/squats.png'
    },

    {
      id: 4,
      nome: 'Step-ups',
      foto: 'https://img.icons8.com/ios-glyphs/90/squats.png'
    },

    {
      id: 5,
      nome: 'Agachamento de Parede',
      foto: 'https://img.icons8.com/ios-glyphs/90/squats.png'
    }
  ]

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Troca de Exercícios</Text>
      <Text style={styles.sugerido}>Sugeridos</Text>
      <FlatList
        data={dadosTeste}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => <Card item={item}/>}
      />
    </View>
  );
}