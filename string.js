const escola = "cod3r";

console.log;

console.log(escola.charAt(4)); //vai dar a quarta letra do indice
console.log(escola.charAt(5)); //fora dos indice
console.log(escola.charCodeAt(3)); //pegar o valor dentro da tabela unicode
console.log(escola.indexOf(3)); //pegar o valor do digito direcionado

console.log(escola.substring(1)); // começa apartir do indice 1
console.log(escola.substring(0, 3)); //vai do indice 1 ao indice 3

console.log("escola".concat(escola).concat("!"));
console.log("escola" + escola + "!");
console.log("escola" + escola + "!");
console.log(escola.replace(3, "e")); //vai pegar o valor 3 e tranforma em e

console.log("ana,maria,pedro".split());
