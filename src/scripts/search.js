import '../styling/search_page.scss';
import '../scripts/autocomplete';
import '../scripts/searchpageFilters';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'easy-autocomplete/dist/jquery.easy-autocomplete';

$(function() {

    window.onscroll = function() {
        stickyBtn()
        stickySearch()
    };

    function stickySearch() {
        if ($(window).scrollTop() > $(".topnav").offset().top) {
            $("#top-search").addClass("sticky");
        } else {
            $("#top-search").removeClass("sticky");
        }
    }

    $('#filter-btn, #filter-btn-tablet').click(function() {
        $("#search-btn").addClass("sticky-btn");
    });



    function stickyBtn() {

        var vh = Math.max(window.innerHeight || 0);
        var topofDiv = $("#afstand-accordion").offset().top;
        //document.documentElement.clientHeight

        if ($(window).scrollTop() > (topofDiv - vh + 50)) {
            $("#search-btn").removeClass("sticky-btn");
            $("#filter-alert").removeClass("sticky-alert");
        } else {
            $("#search-btn").addClass("sticky-btn");
            $("#filter-alert").addClass("sticky-alert");
        }

    }



});
