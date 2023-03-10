import React from "react";
import * as S from "./styles";
import ImgFundo from "../../assets/tabuada.jpeg";
import Btn from "../../components/Btn";
import { useNavigation } from "@react-navigation/native";

const TelaTabuada = () => {
  const { navigate } = useNavigation();
  return (
    <S.Container source={ImgFundo} resizeMode={"contain"}>
      <Btn
        width={200}
        fontSize={20}
        TextBtn="RESPONDER OUTRA QUESTÃO"
        bgColor="green"
        onPress={() => {
          navigate("Inicio");
        }}
      />
    </S.Container>
  );
};

export default TelaTabuada;
