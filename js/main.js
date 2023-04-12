const botonDesecriptar = document.querySelector('.button-encriptar');
botonDesecriptar.addEventListener('click', inicio)

function obtener_textarea(){
    return document.querySelector(".text-area")
}
function inicio(){
    let texto = document.querySelector(".text-area").value;
    const resultado = encriptar(encriptador,texto)
    let res = document.querySelector('.container-traduccion');
    res.innerHTML=`
    ${resultado}
    `
}

const encriptador= {
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

function encriptar (codigoEncriptador,palabra) {
    for (let x in codigoEncriptador) {
        palabra = palabra.replace(new RegExp(x,'gi'),codigoEncriptador[x])
        }
    return palabra;
} 

function mostrarResultado (result) {

}
const pal = 'aeIou'
const pa2 = 'aienterimesoberufat'
console.log(encriptar(encriptador,pal))
console.log(encriptar(desencriptar,pa2))
