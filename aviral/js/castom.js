document.addEventListener('DOMContentLoaded', function () {

    var preloader = document.querySelector('.preloader');
    var isFirstVisit = localStorage.getItem('isFirstVisit'); 
    if (!isFirstVisit) {      
        preloader.style.display = 'flex';  
        localStorage.setItem('isFirstVisit', 'true');
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 5000); 
    } else {
   
        preloader.style.display = 'none';
    }
    preloader.addEventListener('click', function () {
        
        preloader.style.display = 'none';
    });
});

// *****************************************************************************************************************



