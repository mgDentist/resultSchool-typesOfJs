let numb = 18;
console.log(Number(numb), String(numb), Boolean(numb));

let str = 'some text';
console.log(Number(str), String(str), Boolean(str));

let huge = 100500n;
console.log(Number(huge), String(huge), Boolean(huge));

let isTruthy = true;
console.log(Number(isTruthy), String(isTruthy), Boolean(isTruthy));

let idk = null;
console.log(Number(idk), String(idk), Boolean(idk));

let nothing = undefined;
console.log(Number(nothing), String(nothing), Boolean(nothing));

let box = {
    verbo: 'volar',
    conjugar: 'Presente Indicativo',
    yo: 'vuelo',
    tu: 'vuelas',
    el: 'vuela',
    ella: 'vuela',
    usted: 'vuela',
    nosotros: 'volamos',
    vosotros: 'volais',
    ellos: 'vuelan',
    ustedes: 'vuelan'
};
console.log(Number(box), String(box), Boolean(box));

let id = Object('id');
console.log(Number(id), String(id), Boolean(id)); 