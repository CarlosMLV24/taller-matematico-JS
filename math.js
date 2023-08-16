console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lado) {
    return{
        perimetro: lado * 4,
        area: (lado * lado) / 2,
    };
}
console.groupEnd('Cuadrado')

console.group('triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2

function calcularTriangulo(lado1, lado2, ladoBase, altura) {
    return{
        perimetro: lado1 + lado2 + ladoBase,
        area: (ladoBase * altura) / 2,
    };
}


function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        // Raiz cuadrada Math.aqrt
        return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4);
    }
}

console.log({
    perimetroTriangulo,
    areaTriangulo,
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase
});
console.groupEnd('triangulo')

console.group('circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areacircle = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areacircle
});

function calcularCirculo(radioCirculo) {
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radioCirculo, 2)

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}

console.groupEnd('circle')
