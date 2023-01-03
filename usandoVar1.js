{
    {
        {
            {                           
                var sera = 'sera????'      //var usar tanto dentro como fora
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {         //so faz diferença dentro da função usando dentro da fnção não usa fora
    var local = 123
    console.log(local)
}

teste()
console.log(local)