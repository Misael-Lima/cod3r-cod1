var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)   //tanto faz dentro como fora do escopo
}                                     //ele apenas sobscreve usando var
console.log('fora =', numero)