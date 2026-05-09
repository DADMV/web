// Contador animado

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});


// Animación al hacer scroll

window.addEventListener("scroll",()=>{

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});