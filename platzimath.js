const numbers = [500, 400, 300 , 700]
let result

function sumArray (arr) {
    // for(let i = 0; i < arr.length; i++) {
    //     position += arr[i]
    // }
    // result = position / arr.length

    // function sumarTodosElementos (valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // }
    const sumaLista = arr.reduce((valorAcumulado, nuevoValor) => {return valorAcumulado + nuevoValor;})




    result = sumaLista / arr.length
    console.log(result)
}
sumArray(numbers)

const arrayNumbers = [1,2,3,4,5,3,3,4,5,2];

function EvenOrOdd (arr) {
    if (arr.length % 2 === 1) {
        return arr.length % 2
    }      
}


function calcularMediana (arr) {
    const listaEsImpar = EvenOrOdd(arr)
    
   if(listaEsImpar) {
       const indexMitadListaImpar = Math.floor(arr.length / 2);
       console.log(indexMitadListaImpar)
       console.log(arr[indexMitadListaImpar])
      } else {
        
      }

   }
