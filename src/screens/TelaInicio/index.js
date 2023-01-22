import React from "react";
import * as S from "./styles";
import ImgFundo from "../../assets/fundo.png";
import ModalQuestao from "../../components/ModalQuestao";

const TelaInicio = () => {
  return (
    <S.Container source={ImgFundo} resizeMode={"cover"}>
      <ModalQuestao />
    </S.Container>
  );
};

export default TelaInicio;
