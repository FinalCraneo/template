function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function postLi(value) {
    let listo = document.createElement('LI');
    let ulista = document.getElementById('listaUno');

    listo.innerHTML = value;
    ulista.appendChild(listo);

}

let first, second, thrid, fourth, fifth;

first = getRandomArbitrary(0, 1);
second = getRandomArbitrary(0, 1 - first);
thrid = getRandomArbitrary(0, 1 - second - first);
fourth = getRandomArbitrary(0, 1 - thrid - second - first);
fifth = 1 - fourth - thrid - second - first;

postLi(first);
postLi(second);
postLi(thrid);
postLi(fourth);
postLi(fifth);