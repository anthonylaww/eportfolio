import "particles.js";

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    // ONLY if the device is landscape OR a desktop
    if ($(window).innerWidth > $(window).innerHeight || $(window).height > 1080) {
        // When the ".project_card" is hovered, add a "shadow-lg" class to it
        $( ".project_card" ).hover(
            function() {
                $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
            
        // OTHERWISE remove the "shadow-lg" class
            }, function() {
                $(this).removeClass('shadow-lg');
            }
        );
    }

    // Loading in the particles.json file into particles-js
    particlesJS.load('particles-js', '../assets/particles.json');
});


// Upon scrolling in the ".snap-container" class
$(".snap-container").on("scroll", function() {
    // IF THE device is landscape OR a desktop
    if ($(window).innerWidth > $(window).innerHeight || $(window).height > 1080) {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var not_work_cards = $(".not-work_card");
        var project_cards = $(".project_card");

        for (var i = 0; i < project_cards.length; i++) {
            var project_card = project_cards[i];
            var not_work_card = not_work_cards[i];

            if ($(project_card).position().top < pageBottom && $(project_card).position().top > pageTop) {
                $(project_card).addClass("visible");
            } else {
                $(project_card).removeClass("visible");
            }

            if ($(not_work_card).position().top < pageBottom && $(not_work_card).position().top > pageTop) {
                $(not_work_card).addClass("visible");
            } else {
                $(not_work_card).removeClass("visible");
            }
        }
    }
});

// 
document.getElementById('container__photography').addEventListener('click', e => {
    e.target.scrollIntoView();
});