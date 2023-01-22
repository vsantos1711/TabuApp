import React from "react";
import * as S from "./styles";
import ImgFundo from "../../assets/errou.jpg";
import Btn from "../../components/Btn";
import { useNavigation } from "@react-navigation/native";

const TelaRespostaErrada = () => {
  const { navigate } = useNavigation();
  return (
    <S.Container source={ImgFundo}>
      <S.Box>
        <S.Text>OPS! RESPOSTA ERRADA QUE TAL VER A TABUADA?</S.Text>
        <S.Botoes>
          <Btn
            bgColor="green"
            TextBtn="VER TABUADA"
            fontSize={20}
            onPress={() => {
              navigate("TelaTabuada");
            }}
          />
          <Btn
            bgColor="red"
            fontSize={20}
            TextBtn="TENTAR OUTRO"
            onPress={() => {
              navigate("Inicio");
            }}
          />
        </S.Botoes>
      </S.Box>
    </S.Container>
  );
};

export default TelaRespostaErrada;
