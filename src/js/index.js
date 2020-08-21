import "particles.js";

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    $( ".project_card" ).hover(
        function() {
            $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
        }, function() {
            $(this).removeClass('shadow-lg');
        }
    );

    particlesJS.load('particles-js', '../assets/particles.json');
});

document.getElementById('container__photography').addEventListener('click', e => {
    e.target.scrollIntoView();
});