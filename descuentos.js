const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
const coupons = {}




btn.addEventListener('click', calcularPrecioConDescuento);

// const couponObj = {
//     'verano': 30,
//     'regreso_a_clase': 15
// }

const couponsList = [];
couponsList.push({
    name: 'verano',
    discount: 30
})
couponsList.push({
    name: 'invierno',
    discount: 25
})
couponsList.push({
    name: 'un_secreto',
    discount: 50
})




function calcularPrecioConDescuento () {
    // (p * (100 - D)) / 100
    
    const price = Number(inputPrice.value);
    const coupon = inputDiscount.value
    
    if(!price || !coupon) {
        pResult.innerText = 'pro favor llena el formulario'
        return
    }

    let discount

    function isCouponInArray (couponElement) {
      return  couponElement.name == coupon;
    }

   const couponInArray = couponsList.find(isCouponInArray);

    if(couponInArray) {
        discount = couponInArray .discount;
    } else {
        window.alert('cupon no valido')
         return;
    }

    console.log({
        coupon,
        discount,
        couponInArray,
        couponsList
    })
    // if (couponObj[coupon]) {
    //     discount = couponObj[coupon]
    // }else {
    //     window.alert('cupon no valido')
    //     return;
    // }

    // if (inputDiscount.value == 'inicio_de_año') {
    //     cuponDiscount = 50
    //     cupon = 'inicio de año'
    // } else if(inputDiscount.value == 'verano') {
    //     cuponDiscount = 15
    //     cupon = 'verano'
    // } else if(inputDiscount.value == 'invierno') {
    //     cuponDiscount = 70
    //     cupon = 'invierno'
    // } else {
    //     window.alert('cupon no valido')
    // }
    

    


   

    const newPrice = (price * (100 - discount)) / 100

    pResult.innerText = 'El nuevo precio con su cupon es $' + newPrice
}