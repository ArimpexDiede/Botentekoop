import '../styling/home_page.scss';
import 'easy-autocomplete/dist/jquery.easy-autocomplete';
import '../scripts/autocomplete';
import 'bootstrap/dist/js/bootstrap.bundle.js';

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

$(function() {
    window.onscroll = function() {
        setTimeout(function() {
            //  stickySearch3()
            stickySearch2()
        }, 100);
    };


    function stickySearch2() {
        if ($(window).scrollTop() > $("#home-search-mobile").offset().top) {
            $("#kopen-mobile").addClass("sticky");
        } else {
            $("#kopen-mobile").removeClass("sticky");
        }
    }

    function stickySearch3() {
        if ($(window).scrollTop() > $("#search-card").offset().top) {
            $("#search-card > .card-body").addClass("sticky");
        } else {
            $("#search-card > .card-body").removeClass("sticky");
        }
    }

});
