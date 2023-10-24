import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import CardRotina from "./CardRotina";

export default function Rotinas({ route, navigation }) {
  const rotinas = [
    {
      id: 1,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '22/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: 2,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '21/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: 3,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '20/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: 4,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '19/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: 5,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '18/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: 6,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '17/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: 7,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '16/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: 8,
      nome: 'Treino de Musculação',
      instrutor: 'Machio Naruzo',
      data: '15/10/2023',
      foto: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rotinas</Text>
      <View style={styles.rotinasContainer}>
        <View style={styles.filtroContainer}>
          <Text style={styles.filtroTexto}>Filtrar:</Text>
          <View style={styles.filtroBotoesContainer}>
            <TouchableOpacity style={styles.filtroBotao}><Text style={styles.filtroBotaoTexto}>7D</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filtroBotao}><Text style={styles.filtroBotaoTexto}>15D</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filtroBotao}><Text style={styles.filtroBotaoTexto}>1M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filtroBotao}><Image style={styles.filtroBotaoImagem} source={require('../../../assets/filtro.png')}/></TouchableOpacity>
          </View>
        </View>
        <FlatList 
          data={rotinas}
          contentContainerStyle={{alignItems: 'center', width: '100%', paddingBottom: 40}}
          renderItem={({ item }) => <CardRotina item={item} navigation={navigation}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}