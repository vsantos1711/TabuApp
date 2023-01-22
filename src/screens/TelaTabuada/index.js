import React from "react";
import * as S from "./styles";
import ImgFundo from "../../assets/tabuada.jpeg";
import { useNavigation } from "@react-navigation/native";

const TelaTabuada = () => {
  const { navigate } = useNavigation();
  return (
    <S.Container source={ImgFundo} resizeMode={"contain"}>
      <S.Button
        style={{ backgroundColor: "green" }}
        onPress={() => {
          navigate("Inicio");
        }}
      >
        <S.TextBtn>RESPONDER</S.TextBtn>
      </S.Button>
    </S.Container>
  );
};

export default TelaTabuada;
