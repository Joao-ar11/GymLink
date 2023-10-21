import { TouchableOpacity, Image } from "react-native";

export default function Botao() {
  return (
    <>
      <TouchableOpacity style={{marginLeft: 20, height: 24}}>
        <Image style={{height: 24, width: 12}}source={require('../../../../assets/voltar.png')}/>
      </TouchableOpacity>
    </>
  );
}