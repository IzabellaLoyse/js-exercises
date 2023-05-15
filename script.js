const prompt = require('prompt-sync')();

const chooseConversion = () => {
  const optionsToSelect = `
  Escolha uma opção:
  1 - Decimal para Binário
  2 - Decimal para Octal
  3 - Decimal para Hexadecimal
  4 - Binário para Decimal
  5 - Sair
  `;

  console.log(optionsToSelect);

  const userChoose = parseInt(prompt('Escolha uma opção: '));

  switch (userChoose) {
    case 1:
      decimalToBinary();
      break;
    case 2:
      decimalToOctal();
      break;
    case 3:
      decimalToHexadecimal();
      break;
    case 4:
      binaryToDecimal();
      break;
    case 5:
      break;
    default:
      console.log('Opção inválida');
  }
};

// Decimal para binário
const decimalToBinary = () => {
  const decimal = parseInt(prompt('Digite um número decimal: '));
  const binary = decimal.toString(2);
  console.log(`O número ${decimal} em binário é ${binary}`);
};

// Decimal para Octal
const decimalToOctal = () => {
  const decimal = parseInt(prompt('Digite um número decimal: '));
  const octal = decimal.toString(8);
  console.log(`O número ${decimal} em octal é ${octal}`);
};

// Decimal para Hexadecimal
const decimalToHexadecimal = () => {
  const decimal = parseInt(prompt('Digite um número decimal: '));
  const hexadecimal = decimal.toString(16);
  console.log(`O número ${decimal} em hexadecimal é ${hexadecimal}`);
};

// Binário para Decimal
const binaryToDecimal = () => {
  const binary = prompt('Digite um número binário: ');
  const decimal = parseInt(binary, 2);
  console.log(`O número ${binary} em decimal é ${decimal}`);
};

chooseConversion();
