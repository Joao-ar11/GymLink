import { ScrollView } from "react-native";
import PerfilAluno from "./PerfilAluno";
import PerfilPersonal from "./PerfilPersonal";
import User from "../User";
import { useContext } from "react";

export default function Perfil() {
  const usuario = useContext(User);

  return (
    <>
      {usuario.user.tipo === 'aluno' ?
        <PerfilAluno />
        :
        <PerfilPersonal />
      }
    </>
  );
}