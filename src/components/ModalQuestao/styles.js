import styled from "styled-components/native";

export const Container = styled.View`
  width: 300px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
export const Titulo = styled.Text`
  font-size: 30px;
  color: #276054;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
export const Questao = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const Conta = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-right: 20px;
`;
export const TextInput = styled.TextInput`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  width: 100px;
  height: 50px;
  border: 2px solid gray;
  border-radius: 5px;
`;
export const Botoes = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
export const Button = styled.Pressable`
  width: 130px;
  height: auto;
  padding: 5px;
`;
export const TextBtn = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;
