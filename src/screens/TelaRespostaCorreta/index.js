import React from "react";
import * as S from "./styles";
import ImgFundo from "../../assets/trofeu.jpg";
import Btn from "../../components/Btn";
import { useNavigation } from "@react-navigation/native";

const TelaRespostaCorreta = () => {
  const { navigate } = useNavigation();
  return (
    <S.Container source={ImgFundo} resizeMode={"contain"}>
      <S.Text1>PARABÉNS, VOCÊ ACERTOU!</S.Text1>
      <Btn
        TextBtn="RESPONDER OUTRA"
        width={200}
        bgColor="green"
        fontSize={20}
        onPress={() => navigate("Inicio")}
      />
    </S.Container>
  );
};

export default TelaRespostaCorreta;
