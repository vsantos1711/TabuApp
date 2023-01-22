import React from "react";
import * as S from "./styles";
import ImgFundo from "../../assets/fundo.png";
import ModalQuestao from "../../components/ModalQuestao";
import { useNavigation } from "@react-navigation/native";

const TelaInicio = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container source={ImgFundo} resizeMode={"cover"}>
      <ModalQuestao />
      <S.Btn
        onPress={() => {
          navigate("TelaTabuada");
        }}
      >
        <S.TextBtn>VER TABUADA</S.TextBtn>
      </S.Btn>
    </S.Container>
  );
};

export default TelaInicio;
