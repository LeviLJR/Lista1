// Nome: Levi Liberman Junior RA: 2346478
//Questão 1
function fatorial(n) {
  total = 1;
  if (n < 0) return undefined;
  while (n > 0) {
    total *= n;
    n--;
  }
  return total;
}

//Questão 2
function repeatMessage(n, m) {
  if (n < 0) return null;
  if (n === 1) return m;
  else {
    m += " " + m;
  }
  return repeat(n - 1, m);
}

//Questão 3
function operation(x, y, s) {
  if (isNaN(x) || isNaN(y) || !["+", "-", "/", "*"].includes(s)) return null;
  if (s === "+") {
    return x + y;
  }
  if (s === "-") {
    return x - y;
  }
  if (s === "*") {
    return x * y;
  }
  if (s === "/") {
    if (y !== 0) {
      return x / y;
    } else return null;
  }
  return null;
}

//Questão 4
function tabuada(x) {
  let resultado = [];
  for (let i = 0; i <= 10; i++) {
    resultado.push(x * i);
  }
  return resultado;
}

//Questão 5
function inverterNumero(x) {
  if (!Number.isInteger(x)) {
    x = Math.floor(x);
  }
  let invertido = 0;
  while (x != 0) {
    invertido = invertido * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return invertido;
}

//Questão 6
function contarVogais(palavra) {
  let contador = 0;
  const vogais = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
      contador++;
    }
  }
  return contador;
}

//Questão 7
function verificarSequencia(s) {
  const pilha = [];
  const pares = {
    ")": "(",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "[") {
      pilha.push(char);
    } else if (char === ")" || char === "]") {
      if (pilha.length === 0 || pilha.pop() !== pares[char]) {
        return false;
      }
    }
  }
  return pilha.length === 0;
}

//Questão 8
function gerarListaDeObjetos(n) {
  const nomes = [
    "Ana",
    "Bruno",
    "Carlos",
    "Diana",
    "Eduardo",
    "Fernanda",
    "Gabriel",
    "Helena",
    "Igor",
    "Juliana",
  ];
  const lista = [];

  for (let i = 1; i <= n; i++) {
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const idadeAleatoria = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

    lista.push({
      id: Math.floor(Math.random() * 1000),
      nome: nomeAleatorio,
      idade: idadeAleatoria,
    });
  }
  return lista;
}

//Questão 9
function mediaIdades(lista) {
  let somaIdades = 0;
  for (let i = 0; i < lista.length; i++) {
    somaIdades += lista[i].idade;
  }
  return Math.round(somaIdades / lista.length);
}

//Questão 10
function ordenarLista(lista, atributo) {
  const atributos = ["id", "nome", "idade"];

  if (!atributos.includes(atributo)) {
    return null;
  }

  return lista.sort((a, b) => {
    if (a[atributo] < b[atributo]) return -1;
    if (a[atributo] > b[atributo]) return 1;
    return 0;
  });
}
