const texto = '\‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.\’'
const padrao = /\d+/g
const int = texto.match(padrao).map( num => parseInt(num)).reduce((soma, num) => soma + num, 0)
console.log(int)