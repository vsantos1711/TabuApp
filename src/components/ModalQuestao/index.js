import React, { useState } from "react";
import * as S from "./styles";
import { gerarNumero, validarResposta } from "./functions";
import Btn from "../Btn";
import { useNavigation } from "@react-navigation/native";

const ModalQuestao = () => {
  const { navigate } = useNavigation();
  const [valor1, setNumero1] = useState(gerarNumero());
  const [valor2, setNumero2] = useState(gerarNumero());
  const [resposta, setResposta] = useState(0);

  const criarQuestao = () => {
    setNumero1(gerarNumero());
    setNumero2(gerarNumero());
    setResposta("");
  };

  const responder = () => {
    if (validarResposta(valor1, valor2, resposta)) {
      navigate("TelaRespostaCorreta");
    } else {
      navigate("TelaRespostaErrada");
    }
    criarQuestao();
  };

  return (
    <S.Container>
      <S.Titulo>DUVIDO VOCÊ ACERTAR!</S.Titulo>
      <S.Questao>
        <S.Conta>
          {valor1} X {valor2} =
        </S.Conta>
        <S.TextInput
          keyboardType="numeric"
          onChangeText={(text) => setResposta(text)}
        />
      </S.Questao>

      <S.Botoes>
        <Btn
          width={100}
          fontSize={20}
          bgColor="red"
          TextBtn="PULAR"
          onPress={() => {
            criarQuestao();
          }}
        />

        <Btn
          width={150}
          fontSize={20}
          bgColor="green"
          TextBtn="RESPONDER"
          onPress={() => {
            responder();
          }}
        />
      </S.Botoes>
    </S.Container>
  );
};

export default ModalQuestao;
