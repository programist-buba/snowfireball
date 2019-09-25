const back = document.getElementsByClassName('background')[0];
const button = document.getElementById('btn');
const n = 100;
let x = []
let y = []
let w_h = []
let speed = []

for(let i = 0; i < n; i++) {

    x.push(Math.floor(Math.random() * 90 + 5));
    y.push(Math.floor(Math.random() * 90 + 5));
    w_h.push(Math.floor(Math.random() * 20 + 10));
    speed.push(Math.floor(Math.random() * 5 + 1));
}

for(let i = 0; i < n; i++) {

    const lmnt = document.createElement('div');
    lmnt.className = 'snow';
    lmnt.id = i;
    lmnt.style.top = y[i] + '%';
    lmnt.style.right = x[i] + '%';
    lmnt.style.width = w_h[i] + 'px';
    lmnt.style.height = w_h[i] + 'px';
    back.appendChild(lmnt);
}

setInterval(() => {
    
    for(let i = 0; i < n; i++) {

        const buba = document.getElementById(i);

        if(y[i] > 90) {

            y[i] = 0;
            x[i] = Math.floor(Math.random() * 90 + 5); 
        } else {

            y[i] += speed[i];
        }

        buba.style.top = y[i] + '%';
        buba.style.right = x[i] + '%';
    }
}, 40);

let whitch = 0;
function change() {
    
    whitch++;
    whitch = whitch % 2;

    if(whitch == 1) {

        document.getElementById('back').classList.remove('background');
        document.getElementById('back').className = ('back');
        document.getElementById('btn').innerHTML = 'snowball';
        document.getElementById('pic').src = 'mk11_scorpion.png';
        document.getElementById('btn').style.backgroundColor = 'black';

        for(let i = 0; i < n; i++) {

            const duba = document.getElementById(i);
            duba.classList.remove('snow');
            duba.className = 'fire';
        }
    }

    if(whitch == 0) {

        document.getElementById('back').classList.remove('back');
        document.getElementById('back').className = ('background');
        document.getElementById('btn').innerHTML = 'fireball';
        document.getElementById('pic').src = 'mk11_subzero.png';
        document.getElementById('btn').style.backgroundColor = 'skyblue';

        for(let i = 0; i < n; i++) {

            const duba = document.getElementById(i);
            duba.classList.remove('fire');
            duba.className = 'snow';
        }
    }
}