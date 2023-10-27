import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import VisualilzarAluno from "./VisualizarAluno";
import VisualilzarPersonal from "./VisualizarPersonal";

export default function VisualizarUsuario({ route, navigation }){
  return (
    <ScrollView contentContainerStyle={{ flex: 1, width: '100%', backgroundColor: '#FFFFFF'}}>
      {
        route.params.item.tipo === 'personal' ?
        <VisualilzarPersonal item={route.params.item}/> :
        <VisualilzarAluno />
      }
    </ScrollView>
  );
}