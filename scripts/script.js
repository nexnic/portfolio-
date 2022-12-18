// Using Strict mode on JS Vanlia
'using strict';

// dom 
    // header intro 
        let headerfirst = document.querySelector('#heading__first');

// value startup
    let firsttxt =  `Hello i'm a front-end developer`;
    let txtspeed =  200;
    let t = 0;


// Tying intro 

function typeSpeed() {

    if(t < firsttxt.length) {
        headerfirst.innerHTML += firsttxt.charAt(t);
        t++
        setTimeout(typeSpeed, txtspeed);
    }
}



typeSpeed()
