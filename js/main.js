const botonEncriptar = document.querySelector('.button-encriptar');
botonEncriptar.addEventListener('click', encriptador)

const botonDesencriptar = document.querySelector('.button-desencriptar');
botonDesencriptar.addEventListener('click', desencriptador)

function encriptador(){
    let texto = document.querySelector(".text-area").value;
    const resultado = fnEncriptar(encriptar,texto)
    let res = document.querySelector('.container-right');
    res.innerHTML=`
    <textarea  class="container-traduccion">${resultado}</textarea>`
}
function desencriptador(){
    let texto = document.querySelector(".text-area").value;
    const resultado = fnEncriptar(desencriptar,texto)
    let res = document.querySelector('.container-right');
    res.innerHTML=`
    <textarea  class="container-traduccion">${resultado}</textarea>`
    console.log(document.querySelector('.container-traduccion').value)
}

const encriptar= {
    e : 'enter',
    i : 'imes',
    a : 'ai',
    o : 'ober',
    u : 'ufat'
}

const desencriptar = {
    enter : 'e',
    imes : 'i',
    ai : 'a',
    ober : 'o',
    ufat : 'u'
}

function fnEncriptar (codigoEncriptador,palabra) {
    for (let x in codigoEncriptador) {
        palabra = palabra.replace(new RegExp(x,'gi'),codigoEncriptador[x])
        }
    return palabra;
} 

