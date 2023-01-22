import React, { useState } from "react";
import * as S from "./styles";

import { gerarNumero, validarResposta } from "./functions";

const ModalQuestao = () => {
  const [valor1, setNumero1] = useState(1);
  const [valor2, setNumero2] = useState(1);
  const [resposta, setResposta] = useState(0);

  const criarQuestao = () => {
    setNumero1(gerarNumero());
    setNumero2(gerarNumero());
    setResposta("");
  };

  const responder = () => {
    if (validarResposta(valor1, valor2, resposta)) {
      console.log("acertou miseravi");
    } else {
      console.log("errou manito");
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
        <S.Button
          style={{ backgroundColor: "red" }}
          onPress={() => {
            criarQuestao();
          }}
        >
          <S.TextBtn>PULAR</S.TextBtn>
        </S.Button>

        <S.Button
          style={{ backgroundColor: "green" }}
          onPress={() => {
            responder();
          }}
        >
          <S.TextBtn>RESPONDER</S.TextBtn>
        </S.Button>
      </S.Botoes>
    </S.Container>
  );
};

export default ModalQuestao;
