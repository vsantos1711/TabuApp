import React from "react";
import * as S from "./styles";

const Btn = ({ bgColor, TextBtn, onPress, width, fontSize }) => {
  return (
    <S.Button
      style={{ backgroundColor: bgColor, width: width }}
      onPress={onPress}
    >
      <S.TextBtn style={{ fontSize: fontSize }}>{TextBtn}</S.TextBtn>
    </S.Button>
  );
};

export default Btn;
