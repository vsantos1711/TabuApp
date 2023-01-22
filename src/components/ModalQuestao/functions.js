export const gerarNumero = () => {
  return Math.floor(Math.random() * (10 - 1) + 1);
};

export const validarResposta = (numero1, numero2, respostaDoUsuario) => {
  return numero1 * numero2 == respostaDoUsuario;
};
