    /*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Function get section's height 
function getSectionHeight(sectionID){
    var section = document.getElementById(sectionID);
    return $(section).height();
}


// Verify if site is being accessed through mobile devices
function isMobile () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true
    }
}

function putInMiddle(elementPerc, elementToMiddle) {
    var elementPercent = elementPerc;
    var sectionWidth = $("#contato .row").width();
    var elementSize = (elementPercent / 100) *sectionWidth;
    
    var middle = (sectionWidth - elementSize ) / 2;

    $(elementToMiddle).css("width", elementSize+"px");

    if(sectionWidth == 750){
        $(elementToMiddle).css("width", elementSize+"px");
        // middle = (sectionWidth -) - ((elementPercent * sectionWidth) / 2);
        var middle = (sectionWidth - elementSize ) / 2;
        if (elementToMiddle == "#contato #form-div"){
            $(elementToMiddle).css("margin-left", middle+"px");
        }
        else {
            $(elementToMiddle).css("margin-left", middle +"px");
        }
    }
    else {
        if (elementToMiddle == "#contato #form-div"){
            $(elementToMiddle).css("margin-left", middle+2+"px");
        }
        else {
            $(elementToMiddle).css("margin-left", middle+"px");
        }
    } 
}

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > ($(window).height() - ($(window).height()/1.3)) ) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('.navbar-custom.top-nav-collapse .navbar-brand img').attr('src','img/party-share-black-sm.png');
        $('.navbar-custom.top-nav-collapse .navbar-brand img').css('width','80%');
        $('.navbar-custom.top-nav-collapse .navbar-brand img').css('height','auto');
        $('.navbar-header .icon-bar').css('background-color','black');
        $('.navbar.navbar-custom.navbar-fixed-top').css('background-color', '#FFFFFF');

    } else {
        
        $('.navbar.navbar-custom.navbar-fixed-top .navbar-brand img').attr('src','img/party-share-sm.png');
        $('.navbar-custom.top-nav-collapse .navbar-brand img').css('width','100%');
        $('.navbar-custom.top-nav-collapse .navbar-brand img').css('height','auto');
        $('.navbar-header .icon-bar').css('background-color','white');

        if (isMobile()){
            $('.navbar-custom.top-nav-collapse .navbar-brand img').css('width','80%');
            $('.navbar.navbar-custom.navbar-fixed-top').css('background-color', 'rgba(10, 10, 10, 0.21)');
        }
        else {
            $('.navbar.navbar-custom.navbar-fixed-top').css('background-color', 'transparent');
        }
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}


$(window).scroll(collapseNavbar);
$(document).ready(function(){
    collapseNavbar();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 35
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});


