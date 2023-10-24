import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import CardExercicio from "../CardExercicio";

export default function ExerciciosAluno({ route, navigation }) {

  const exercicios = [
    {
      id: 1,
      nome: 'Alongamento',
      quantidade: '2 minutos',
      foto: 'https://img.icons8.com/ios-filled/100/gymnastics.png',
      concluido: true
    },

    {
      id: 2,
      nome: 'Supino',
      quantidade: '12x3 Repetições',
      foto: 'https://img.icons8.com/ios-filled/100/bench-press.png',
      concluido: false
    },

    {
      id: 3,
      nome: 'Flexão',
      quantidade: '12x3 Repetições',
      foto: 'https://img.icons8.com/ios-filled/100/pushups.png',
      concluido: false
    },

    {
      id: 4,
      nome: 'Levantamento',
      quantidade: '12x3 Repetições',
      foto: 'https://img.icons8.com/ios-glyphs/90/deadlift--v1.png',
      concluido: false
    },

    {
      id: 5,
      nome: 'Agachamento',
      quantidade: '12x3 Repetições',
      foto: 'https://img.icons8.com/ios-glyphs/90/squats.png',
      concluido: false
    },

    {
      id: 6,
      nome: 'Bicicleta',
      quantidade: '30  Minutos',
      foto: 'https://img.icons8.com/ios-glyphs/90/spinning.png',
      concluido: false
    }
  ]

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Exercicios</Text>
      <FlatList 
        data={exercicios}
        renderItem={({ item }) => <CardExercicio item={item}/>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
          padding: 5,
          paddingTop: 15,
          alignItems: 'center',
          gap: 20
        }}
      />
    </View>
  );
}