// let num = +prompt("Digite um número:\n0 - Para sair"), soma = 0;

// while (num != 0) {
//     soma += num;
//     num = +prompt("Digite um número:\n0 - Para sair");
//     console.log(num);
// }

// console.log(`A soma dos números digitados é: ${soma}`);

// let soma = 0, num;

// while (num != 0) {
//     let num;
//     soma += num;
//     num = +prompt('Digite um numero:\n0 - Para sair')
// }

///////////////// EXERCÍCO 1 ///////////////////

let user = prompt('Digite seu tipo de usuário:\n(A) Administrador;\n(B) Usuário comum;\n(C) Usuário assinante;').toUpperCase();

// A = Administrador;
// B = Usuário comum;
// C = Usuário assinante;
console.log('- EXERCÍCIO 1');
while (user != "A") {
    console.log('Acesso negado!');
    user = prompt('OPÇÃO INVÁLIDA! Digite seu tipo de usuário:\n(A) Administrador;\n(B) Usuário comum;\n(C) Usuário assinante;').toUpperCase();
}

console.log('Boas-vindas, Admin!');
console.log('');
alert('Boas-vindas, Admin!');

///////////////// EXERCÍCO 2 ///////////////////

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10

let numero = +prompt('Digite qual tabuada você quer ver:\n(x1)\n- x2\n- x3\n- x4\n- x5\n- 6x\n 7x\n- 8x\n- 9x\n- 10x');

console.log('- EXERCÍCIO 2');
while (numero < 1 || numero > 10) {
    numero = +prompt('Digite um número entre 1 e 10:\n- x1\n- x2\n- x3\n- x4\n- x5\n- 6x\n 7x\n- 8x\n- 9x\n- 10x');
}

console.log(`- Tabuada de ${numero}`);
for (let i = 1; i <= 10; i++) {
    console.log(`- ${numero} * ${i} = ${numero * i}`);
}

console.log('');

///////////////// EXERCÍCO 3 ///////////////////

let arrayStrings = ['Bruno', 'Gabriel', 'Silva', 'Ferreira', '', 'Maria', 'Eduarda', 'Ferreira', 'Santos', '', 'Wanessa', 'Monique', 'da Silva', 'Santos'];

console.log('- EXERCÍCIO 3');
for (let i = 0; i < arrayStrings.length; i++) {
    console.log(arrayStrings[i].toUpperCase());
}