import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Box = styled.View`
  padding: 15px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Text = styled.Text`
  text-align: center;
  font-size: 30px;
  color: #276054;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Botoes = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;
