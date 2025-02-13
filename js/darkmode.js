document.addEventListener("DOMContentLoaded", function(){
     // কোড শুরু হচ্ছে যখন পুরো HTML ডকুমেন্ট লোড হয়ে যাবে
     const sunIcon = document.querySelector('.header-icon div:first-child a');
     const moonIcon = document.querySelector('.header-icon div:last-child a');
     const modeToggle = document.querySelector('#mode-toggle');
     const body = document.body;

     function enableDarkMode() {
        body.classList.add('dark-mode');
        modeToggle.checked = true;
     }
     
     function disableDarkMode() {
        body.classList.remove('dark-mode');
        modeToggle.checked = false;
     }

     sunIcon.addEventListener('click', function(event) {
        event.preventDefault();
        if(body.classList.contains('dark-mode')) {
            disableDarkMode();
        }
     })
     moonIcon.addEventListener('click', function(event){
        event.preventDefault();
        if(!body.classList.contains('dark-mode')) {
            enableDarkMode();
        }
     })
     modeToggle.addEventListener('change', function() {
        if(modeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
     })
})