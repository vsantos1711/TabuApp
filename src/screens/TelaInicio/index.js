import React from "react";
import * as S from "./styles";
import ImgFundo from "../../assets/fundo.png";
import ModalQuestao from "../../components/ModalQuestao";
import Btn from "../../components/Btn";
import { useNavigation } from "@react-navigation/native";

const TelaInicio = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container source={ImgFundo} resizeMode={"cover"}>
      <ModalQuestao />
      <Btn
        width={300}
        fontSize={20}
        bgColor="#33658a"
        TextBtn="VER TABUADA"
        onPress={() => {
          navigate("TelaTabuada");
        }}
      />
    </S.Container>
  );
};

export default TelaInicio;
