let numero = 1
{
    let numero =2       //com let e possivel criar duas variaves uma dentro de escopo e outra fora
    console.log('dentro =', numero)      //let tem um escopo a mais que e e o escopo de bloco
}

console.log('fora =', numero)