import { ScrollView } from "react-native";
import VisualilzarAluno from "./VisualizarAluno";
import VisualilzarPersonal from "./VisualizarPersonal";

export default function VisualizarUsuario({ route, navigation }){
  return (
    <ScrollView style={{ flex: 1, width: '100%', backgroundColor: '#FFFFFF'}}>
      {
        route.params.tipo === 'personal' ?
        <VisualilzarPersonal /> :
        <VisualilzarAluno />
      }
    </ScrollView>
  );
}