//flag

/*
g: procura em todo texto
i: não diferencia maiuscula de minuscula
m: multilinhas
*/


//expressão regular construtor

let padrão = 'love'
let sinalizador = 'gi'
let regEx = new RegExp(padrão, sinalizador)

// sem construtor

let regExTwo = /love/gi

//metodos com Expressão Regular

// test()

const string = 'I Love Java Script'
const flag = /love/i
const resultado = flag.test(string) // verifica se existe tal substring na string que você quiser 
console.log(resultado) // retorna valor booleano

// match()

const str = 'I love love javascript'
const flagTwo = /love/g // retorna em forma de array se não especificarmos a flag global 
const noFlag = /love/
const noResult = str.match(noFlag)
const result = str.match(flagTwo) 
console.log(noResult)
console.log(result)

// search()

const strTwo = 'I love javascript'
const padrãoTwo = /love/g
const resultadoTwo = strTwo.search(padrãoTwo) // retorna o valor do indicie onde começa a palavra
console.log(resultadoTwo)

// replace()

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
const replace = txt.replace(/Python/gi, 'JavaScript') // substituindo no escopo global do texto python por js
console.log(replace)

// meta characters
                        //  '|' SERVE PARA DIZER OU
const padrãoTree = /[Aa]pple|[Bb]anana/g // [] especifica minuscula e maiusculas tanto faz
const txtTwo = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away.'
console.log(txtTwo.match(padrãoTree))

 // '+' significa uma ou mais vezes 
 // '*' significa nenhuma ou muitas vezes
const padrãoFour = /\d+/g // buscar digitos no texto
const text = 'Este exemplo de expressão regular foi feito em 16 de dezembro de 2022.'
console.log(text.match(padrãoFour))

const padrãoQuinto = /[a]./g // '.' busca 'a' e um digito depois dele se houver, caso queria a palavra toda, digite '+'
const textTwo = 'Apple and banana are fruits'
console.log(textTwo.match(padrãoQuinto))

const txtSix = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const padrãoSix = /[Ee]-?mail/g // ? : significa que vai procurar com  e sem o '-'
console.log(txtSix.match(padrãoSix))

const txtTree = 'This regular expression example was made in December 6,  2019.'
const patternTwo = /\b[a-zA-Z]{4}\b/g // exatamente 4 caracters mas, sem contar numeros
const pattern = /\b\w{4}\b/g  //  vai mostrar exatamente todas as palavras que tem 4 letras
const patternTree = /\d{4}/g //  mostar exatamente 4 caracter, mas, só se for numero 
const patternFour = /\d{1,4}/g // mostrar todos os digitidos de 1 a 4 cacteres no texto
console.log(txtTree.match(pattern))
console.log(txtTree.match(patternTwo))
console.log(txtTree.match(patternTree))
console.log(txtTree.match(patternFour))

const texto = 'This regular expression example was made in December 6,  2019.'
const padraoTwo = /[^A-Za-z,. ]+/g // significa que não quer letras, não quer virgulas, pontos nem espaços
const padrao = /^This/g // ^ significa começa com
console.log(texto.match(padrao))
console.log(texto.match(padraoTwo))


// $ significa terminando




    
    


