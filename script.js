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
