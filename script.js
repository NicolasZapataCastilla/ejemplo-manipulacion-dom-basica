const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick)

function btnOnClick(){
    i1 = Number(input1.value);
    i2 = Number(input2.value);
    const sumaInputs = i1 + i2;
    pResult.innerText = 'Resultado: '+sumaInputs;
}


