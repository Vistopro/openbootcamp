function devuelveTrue () {
    return true;
}


async function damePromesa() {
    return setTimeout(() => console.log('Hola soy una promesa'), 5000);
};

function* generaPares() {
    let i = 0;
    while (true) {
         yield i += 2;
    }
}



