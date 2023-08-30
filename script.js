const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener( 'submit', sumarInputValues);

// function sumarInputValues() {
//     // console.log({event});
//     event.preventDefault();
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener( 'click', sumarInputValues);

function sumarInputValues() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}


// //13ADDEVENTLISTENER
// btn.addEventListener( 'click', btnOnClick);

// //CONCATENAR STRING 
// function btnOnClick() {
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

// //SUMAR NUMEROS
// function btnOnClick() {
//     const sumaInputs = +input1.value + +input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }
// function btnOnClick() {
//     const sumaInputs = Number(input1.value) + parseInt(input2.value);
//     pResult.innerText = "Resultado: " + sumaInputs;
// }





//12 ESCRIBIENDO HTML DESDE JS

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });


// //SOBREESCRIBIR EN HTML DESDE JS
// h1.innerHTML = 'Patito <br> Feo'; //Inserta codigo
// h1.innerText = 'Patito <br> Feo'; //Inserta texto plano
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');


// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.togglet('verde');
// // h1.classList.contains('verde');

// input.value = "456";


// //IMAGENES
// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
// console.log(img);

// pid.replaceWith(img);

// // pid.innerHTML = "";
// // pid.append(img);