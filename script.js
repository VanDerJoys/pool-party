document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner")
    const acceptButton = document.getElementById("accept-cookie")
    const rejectButton = document.getElementById("reject-cookie")

    function executeScript(){
        console.log("Les scripts sont déclenchés !")
    }

    if(localStorage.getItem('cookiesAccepted') === 'true'){
        cookieBanner.style.display = "none";
        executeScript();
    }

    acceptButton.addEventListener('click', function(){
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = "none";
        executeScript();
    })

// refus des cookies

    rejectButton.addEventListener ('click', function() {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieBanner.style.display = "none";

});
    

})


// Accessibilité

// ******************* LISTE DES VARIABLES *******************
let onglets = document.querySelectorAll('button');
let sections = document.querySelectorAll('section');
/* ******************* LISTE DES VARIABLES ******************* */
/* ******************* Fonctionnement du menu avec la souris ******************* */
for(let i = 0; i < onglets.length; i++){
    onglets[i].addEventListener('click', function() {
        for(let onglet of onglets) {
            onglet.classList.remove('active');
        }
        for(let section of sections) {
            section.classList.remove('active');
        }
        this.classList.add('active');
        sections[i].classList.add('active');
    });
}

/* ******************* Fonctionnement du menu avec le clavier ******************* */
ts.forEach(button => {
    button.addEventListener('keyup', function(e) {
        if (e.key === 'ArrowRight') {
            let ongletSuivant = button.nextElementSibling;
            if (ongletSuivant) {
                ongletSuivant.focus();
                ongletSuivant.click();
            }
        } else if (e.key === 'ArrowLeft') {
            let ongletPrecedent = button.previousElementSibling;
            if (ongletPrecedent) {
                ongletPrecedent.focus();
                ongletPrecedent.click();
            }
        }
    });
});

// Augmenter/Diminuer la taille de la police
augmenterFont.addEventListener('click', function() {
    body.style.fontSize = '130%';
    b1.style.fontSize = '130%';
    b2.style.fontSize = '130%';
    b3.style.fontSize = '130%';
  });
  
  augmenterFont.addEventListener('click', function() {
    body.style.fontSize = '100%';
    b1.style.fontSize = '100%';
    b2.style.fontSize = '100%';
    b3.style.fontSize = '100%';
  });

// ********** Constraste **********
let contraste = document.getElementById('contraste');

contraste.addEventListener('click', function() {
  body.classList.toggle('contraster');
});
// ********** Constraste **********

