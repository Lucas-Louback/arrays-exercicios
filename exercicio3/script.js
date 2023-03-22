// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.
const arrayNumeros = [ 1, 5, 6, 3, 7, 8]
const arrayStrings = ["Lucas", "casa", "Labenu"]
const arrayTudo = [ 67, "Lucas", true]
// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
const arrayNumerosCopia = arrayNumeros.slice()
arrayNumerosCopia.unshift(4)
console.log(arrayNumeros)
console.log(arrayNumerosCopia)
// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
const arrayStringsCopia = arrayStrings.slice()
arrayStringsCopia.pop()
console.log(arrayStrings)
console.log(arrayStringsCopia)
// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
const arrayTudoCopia = arrayTudo.slice()
arrayTudoCopia.splice(1,1)
console.log(arrayTudo)
console.log(arrayTudoCopia)
// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.


