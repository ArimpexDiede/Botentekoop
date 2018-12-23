import '../styling/bootstrap-slider.css';
import '../styling/flexslider.scss';
import '../styling/main.scss';
import '../scripts/flexslider';
import '../scripts/bootstrap-slider';
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'easy-autocomplete/dist/jquery.easy-autocomplete';
//import '../assets/resources/searchresults.json';
import "jquery-colorbox/jquery.colorbox-min.js";

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

$(window).on('load', function() {
    //settings for the photo slider at detail-page
    $('.photo-slider-carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 147,
        itemMargin: 23,
        prevText: "",
        nextText: "",
        asNavFor: '.photo-slider-content'
    });

    $('.photo-slider-content').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: ".photo-slider-carousel"
    });

    // wizard
    $(".step").on('click', function(event) {
        var clickedStep = event.target.closest(".step");
        if (clickedStep) {
            if ($(clickedStep).hasClass("completed")) {
                $(clickedStep).removeClass("completed");
            }

            $(".step").each(function() {
                var step = $(this)[0];
                if (step === clickedStep) {
                    return false;
                }
                if (!$(step).hasClass("completed")) {
                    $(step).addClass("completed");
                    console.log("completed step: " + step);
                }
            });
        }
    });

    // photogallery popup
    $(".slidelink").colorbox({
        rel: 'group3',
        transition: "none",
        width: "75%",
        height: "75%"
    });

    if (document.getElementsByClassName("photo-slider").length !== 0) {

        function adjustFlexsliderHeight() {
            var firstimg = $(".photo-slider-content li:first-child img")[0];
            var fiRatio = firstimg.naturalWidth / firstimg.naturalHeight; // 1.5
            var flexHeight = $('.photo-slider-content').width() / fiRatio;
            var flexHeightparsed = parseInt(flexHeight, 10);

            if (firstimg.naturalWidth > firstimg.naturalHeight) {

                $(".photo-slider-content").css("height", flexHeightparsed);
                $(".photo-slider-content li").css("height", flexHeightparsed);
                $(".photo-slider-content img").each(function() {
                    $(this).css("max-height", flexHeightparsed);
                });
            }
        }
        adjustFlexsliderHeight();
    }

});

$(function() {
    // sliders at zoeken
    $('#bouwjaar-slider').slider();
    $('#lengte-slider').slider();
    $('#diepgang-slider').slider();
    $('#doorvaarthoogte-slider').slider();

    //tooltips initialisation
    $('[data-toggle="tooltip"]').tooltip();

    var easyAutocompleteOptions = {
        url: function(phrase) {
            return "/screens/resources/searchresults.php";
        },
        getValue: function(element) {
            return element.name;
        },
        ajaxSettings: {
            dataType: "json",
            method: "POST",
            data: {
                dataType: "json"
            }
        },
        preparePostData: function(data) {
            data.phrase = $("#search-input").val();
            return data;
        },
        requestDelay: 100
    };

    var easyAutocompleteOptions2 = {
        url: function(phrase) {
            return "/screens/resources/searchresults.php";
        },
        getValue: function(element) {
            return element.name;
        },
        ajaxSettings: {
            dataType: "json",
            method: "POST",
            data: {
                dataType: "json"
            }
        },
        preparePostData: function(data) {
            data.phrase = $("#search-input-2").val();
            return data;
        },
        requestDelay: 100
    };
    $("#search-input").easyAutocomplete(easyAutocompleteOptions);
    $("#search-input-2").easyAutocomplete(easyAutocompleteOptions2);
});

$(function() {
    //Fixed header on scroll
    window.onscroll = function() {
        setTimeout(function() {
            stickyHeader()
            stickySearch()
            stickySearch2()
        }, 100);
    }

    function stickyHeader() { //fixed detail en
        var sHeader = $("#sticky-header");
        var tfi = $("#top-fixed-info")

        if (window.pageYOffset > 100) {
            sHeader.addClass("sticky");
            //  $("#top-search").addClass("sticky");
            tfi.addClass("show-bar");
        } else {
            sHeader.removeClass("sticky");
            //  $("#top-search").removeClass("sticky");
            tfi.removeClass("show-bar");
        }
    }

    function stickySearch() {
        var tSearch = $("#top-search");
        if (document.getElementById("top-search") !== null && document.getElementById("detail-page") == null && document.getElementById("dealer-page") == null) {
            if ($(window).scrollTop() > $(".topnav + form").offset().top) {
                tSearch.addClass("sticky");
            } else {
                tSearch.removeClass("sticky");
            }
        }
    }

    function stickySearch2() {
        var kMob = $("#kopen-mobile");
        var hsm = $("#home-search-mobile");
        if (document.getElementById("home-search-mobile") !== null) {
            if ($(window).scrollTop() > hsm.offset().top) {
                kMob.addClass("sticky");
            } else {
                kMob.removeClass("sticky");
            }
        }
    }

    function stickySearch3() {
        var sCard = $("#search-card");
        var sCardc = $("#search-card > .card-body");
        if (document.getElementById("search-card") !== null) {
            if ($(window).scrollTop() > sCard.offset().top) {
                sCardc.addClass("sticky");
            } else {
                sCardc.removeClass("sticky");
            }
        }
    }

    if (document.getElementById("detail-sidebar") !== null) {
        $(window).scroll(function() {
            setTimeout(function() {
                var vh = Math.max(window.innerHeight || 0);
                var topofDiv = $("#detail-sidebar").offset().top;
                //document.documentElement.clientHeight
                var div = $("#detail-sidebar-inner");
                var body = $("body").height();
                var footer = $("footer").height();
                var dis = $("#site-disclaimer").height();

                if ($(window).scrollTop() > topofDiv - 81) {
                    div.addClass("fixed-sidebar");

                } else {
                    div.removeClass("fixed-sidebar");
                }
                if (div.offset().top + div.height() >= $('footer').offset().top - 10) {
                    div.css({
                        "position": "absolute",
                        "top": "auto",
                        "bottom": "-20px",
                        "right": "12px"
                    });
                }
                if ($(window).scrollTop() < body - 220 - footer - div.height() - dis) {
                    div.removeAttr("style");
                }
            }, 100);
        });
    }



    if (document.getElementById("search-page") !== null && $("div[id*='div-gpt-ad-']") !== null) {
        $(window).scroll(function() {
            setTimeout(function() {
                var topofDiv = $("div[id*='div-gpt-ad-']").offset().top;
                var body = $("body").height();
                var footer = $("footer").height();
                var dis = $("#site-disclaimer").height();
                var div = $(".filter-options div[id*='google_ads_iframe']");
                if (window.innerHeight > div.height() + 80) {

                    if ($(window).scrollTop() > topofDiv - 81) {
                        div.addClass("fixed-sidebar");
                    } else {
                        div.removeClass("fixed-sidebar");
                    }
                    if (div.offset().top + div.height() >= $('footer').offset().top - 10) {
                        div.css({
                            "position": "absolute",
                            "top": "auto",
                            "bottom": "-20px",
                            "right": "12px"
                        });
                    }
                    if ($(window).scrollTop() < body - 220 - footer - div.height() - dis) {
                        div.removeAttr("style");
                    }
                } else {
                    div.removeAttr("style").removeClass("fixed-sidebar");
                }
            }, 100);
        });
    }

    function scrolltoform() {
        document.getElementById("detail-sidebar").scrollIntoView({
            behavior: "smooth"
        });
    }

    $("#top-fixed-info .btn-secondary").on("click", scrolltoform);
    $("#sticker .btn-secondary").on("click", scrolltoform);


    // $('#filter-btn, #filter-btn-tablet').click(function() {
    //     $("#search-btn-wrap").addClass("sticky-btn");
    // });


    if (document.getElementById("afstand-accordion") !== null) {
        $(window).scroll(function() {
            setTimeout(function() {
                var vh = Math.max(window.innerHeight || 0);
                var topofDiv = $("#afstand-accordion").offset().top;
                //document.documentElement.clientHeight

                if ($(window).scrollTop() > (topofDiv - vh + 50)) {
                    $("#fixed-button-box").css("bottom", "-100px");

                } else {
                    $("#fixed-button-box").css("bottom", "0");
                }
            }, 100);
        });
    }

    function formValidation() {

        var lmaxEl = document.getElementById("lengteMax");
        var dmaxEl = document.getElementById("diepgangMax");
        var domaxEl = document.getElementById("doorvaarthoogteMax");

        var lmin = document.getElementById("lengteMin").value;
        var lmax = lmaxEl.value;

        var lminNumb = parseFloat(lmin);
        var lmaxNumb = parseFloat(lmax);

        var dmin = document.getElementById("diepgangMin").value;
        var dmax = dmaxEl.value;

        var dminNumb = parseFloat(dmin);
        var dmaxNumb = parseFloat(dmax);

        var domin = document.getElementById("doorvaarthoogteMin").value;
        var domax = domaxEl.value;

        var dominNumb = parseFloat(domin);
        var domaxNumb = parseFloat(domax);

        if (lminNumb > lmaxNumb) { //if ((lminNumb > lmaxNumb) || (lminNumb !== "" && lmaxNumb == "")) {
            lmaxEl.setCustomValidity("Minimale waarde is hoger dan de maximale.");
        } else {
            lmaxEl.setCustomValidity("");
        }
        if (dminNumb > dmaxNumb) {
            dmaxEl.setCustomValidity("Minimale waarde is hoger dan de maximale.");
        } else {
            dmaxEl.setCustomValidity("");
        }
        if (dominNumb > domaxNumb) {
            domaxEl.setCustomValidity("Minimale waarde is hoger dan de maximale.");
        } else {
            domaxEl.setCustomValidity("");
        }

        //$([document.documentElement, document.body]).animate({
        //  scrollTop: $("#lengte-filter-option-input").offset().top
        //}, 500);
        //console.log("wth");

    }
    if (document.getElementById("zoekform") !== null) {
        formValidation();
    }

    $("#lengteMin, #lengteMax, #diepgangMin, #diepgangMax, #doorvaarthoogteMin, #doorvaarthoogteMax").on('change', formValidation);

    $('#bouwjaarmin').on('change', function() {
        var $lastYear = $('#bouwjaarmax option') //Bouw jaar min-max functie
        var startYearValue = this.value;

        $lastYear.prop("hidden", false);
        $lastYear.prop("disabled", false);

        if (startYearValue === 0) {
            return;
        }

        $lastYear.each(function() {
            if (this.value != 0 && this.value < startYearValue) {
                $(this).prop("hidden", true);
                $(this).prop("disabled", true);
            }
        })
    });

    $('#bouwjaarmax').on('change', function() {
        var $startYear = $('#bouwjaarmin option')
        var lastYearValue = this.value;

        $startYear.prop("hidden", false);
        $startYear.prop("disabled", false);

        if (lastYearValue == 0) {
            return;
        }

        $startYear.each(function() {
            if (this.value > lastYearValue) {
                $(this).prop("hidden", true);
                $(this).prop("disabled", true);
            }
        })
    });




    $('#prijsMin').on('change', function() {

        var prijsMax = $('#prijsMax option');
        var prijsMin = this.value.replace(/[^0-9]/g, '');
        var prijsMinNumb = parseFloat(prijsMin);

        prijsMax.prop("hidden", false);
        prijsMax.prop("disabled", false);

        if (prijsMinNumb === 0) {
            return;
        }

        prijsMax.each(function() {
            if (this.value.replace(/[^0-9]/g, '') != 0 && this.value.replace(/[^0-9]/g, '') < prijsMinNumb) {
                $(this).prop("hidden", true);
                $(this).prop("disabled", true);

            }
        })
    });

    $('#prijsMax').on('change', function() {

        var prijsMin = $('#prijsMin option');
        var prijsMax = this.value.replace(/[^0-9]/g, '');
        var prijsMaxNumb = parseFloat(prijsMax);

        prijsMin.prop("hidden", false);
        prijsMin.prop("disabled", false);

        if (prijsMaxNumb === 0) {
            return;
        }

        prijsMin.each(function() {
            if (this.value.replace(/[^0-9]/g, '') != 0 && this.value.replace(/[^0-9]/g, '') > prijsMaxNumb) {
                $(this).prop("hidden", true);
                $(this).prop("disabled", true);
            }
        })
    });

    $("#prijsMax, #prijsMin, #bouwjaarmin, #bouwjaarmax, #lengteMin, #lengteMax, #diepgangMin, #diepgangMax, #doorvaarthoogteMin, #doorvaarthoogteMax").trigger('change');

    function inputChange() {
        var g = document.getElementById("lengteMinSelect");
        document.getElementById("lengteMin").value = g.value
    }
    $("#lengteMinSelect").on('change', inputChange);





    function clearZeros() {
        $("[id*='-filter-option'] input").each(function() {
            if (this.value == "0") {
                $(this).val(""); // nullen weghalen bij Bouwjaar, Lengte en Diepgang
            }
        });
    }
    clearZeros();

    function clearEverything() {

        var frm_elements = document.getElementById('zoekform').elements;

        for (var i = 0; i < frm_elements.length; i++) {
            var field_type = frm_elements[i].type.toLowerCase();
            switch (field_type) {
                case "text":
                case "number":
                    frm_elements[i].value = "";
                    break;
                case "radio":
                case "checkbox":
                    if (frm_elements[i].checked) {
                        frm_elements[i].checked = false;
                    }
                    break;
                case "select-one":
                case "select-multi":
                    frm_elements[i].selectedIndex = 0;
                    break;
                default:
                    break;
            }
        }
        if (document.getElementById("afstand-accordion") !== null) {
            document.getElementById("exampleRadios1").checked = true;
            document.getElementById("exampleRadios4").checked = true;
        }
    }
    // function resultData() {
    //
    //     // show that something is loading
    //     //  $('#response').html("<b>Loading response...</b>");
    //
    //     /*
    //      * 'post_receiver.php' - where you will pass the form data
    //      * $(this).serialize() - to easily read form data
    //      * function(data){... - data contains the response from post_receiver.php
    //      */
    //     $.post('/ajax-search.php', $('#zoekform').serialize(), function(data) {
    //
    //         // show the response
    //         $('#response').html(data);
    //
    //         if (document.getElementById("response").innerHTML == "0") {
    //             $("#search-btn").addClass("disabled");
    //             $("#search-btn").attr("type", "button");
    //         } else {
    //             $("#search-btn").removeClass("disabled");
    //             $("#search-btn").attr("type", "submit");
    //         }
    //
    //
    //     }).fail(function() {
    //
    //         // just in case posting your form failed
    //         //alert("Posting failed.");
    //
    //     });
    //
    //     // to prevent refreshing the whole page page
    //     return false;
    //
    //
    // }
    //  $("#zoekform input, #zoekform select").on('change', resultData);
    $("#reset-btn").on('click', function() {

        clearEverything();
        formValidation();

        if (window.location.href.indexOf("accessoires") > -1 ||
            window.location.href.indexOf("motorboten") > -1 ||
            window.location.href.indexOf("zeilboten") > -1 ||
            window.location.href.indexOf("sportboten") > -1) {
            window.location.href = '/uitgebreid-zoeken';
        } // else {
        //  resultData();
        //  }
    });

    //resultData ding $("#zoekform input").trigger('change');
    if (document.getElementById("adv-cats") !== null) {

        if (window.location.href.indexOf("plaatsadvertentie/motorboot") > -1 ||
            window.location.href.indexOf("plaatsadvertentie/zeilboot") > -1 ||
            window.location.href.indexOf("plaatsadvertentie/sportboot") > -1 ||
            window.location.href.indexOf("plaatsadvertentie/accessoire") > -1) {

            document.getElementById("adv-cats").scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    $('#inputZip').change(function() {

        var postc = $('#inputZip').val();
        var huisnr = $('#inputHuisnummer').val();

        var postc2 = postc.replace(/\s+/g, '');
        $('#inputZip').val(postc2.toUpperCase());


        if (!postc) {
            $('#inputZip').css("border", "1px solid red");
            return false;
        } else {
            $('#inputZip').removeAttr("style");
            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {

                        function highlightInput() {
                            var d = $("#inputStraat, #inputPlaats, #inputLand");
                            d.addClass('highlighted');
                            setTimeout(function() {
                                d.removeClass('highlighted');
                            }, 300);
                        }

                        highlightInput();

                        $('#inputPlaats').val(result.city);
                        $('#inputStraat').val(result.street);
                        $('#inputLand>option:eq(0)').prop('selected', true);

                        //    $('#Land').val('NL');

                    } else {
                        if (postc.length >= 6) {
                            if (huisnr.length >= 1) {
                                var conf = confirm("Postcode- en huisnummercombinatie is niet bekend. Weet u zeker dat dit correct is?");

                                if (conf == true) {
                                    return true;
                                }
                            }
                        }
                        if (postc.length == 4) {
                            $('#inputLand>option:eq(1)').prop('selected', true);
                        } else {
                            $('#inputLand>option:eq(0)').prop('selected', true);
                        }

                    }

                },

            });

            return false;
        }
    });


    $('#inputHuisnummer').change(function() {

        var postc = $('#inputZip').val();
        var huisnr = $('#inputHuisnummer').val();

        var postc2 = postc.replace(/\s+/g, '');
        $('#inputZip').val(postc2.toUpperCase());

        if (!huisnr) {
            $('#inputHuisnummer').css("border", "1px solid red");
            return false;
        } else {
            $('#inputHuisnummer').removeAttr("style");
            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {
                        function highlightInput() {
                            var d = $("#inputStraat, #inputPlaats, #inputLand");
                            d.addClass('highlighted');
                            setTimeout(function() {
                                d.removeClass('highlighted');
                            }, 300);
                        }

                        highlightInput();

                        $('#inputPlaats').val(result.city);
                        $('#inputStraat').val(result.street);
                        $('#inputLand>option:eq(0)').prop('selected', true);

                    } else {
                        if (postc.length >= 6) {
                            if (huisnr.length >= 1) {
                                var conf = confirm("Postcode- en huisnummercombinatie is niet bekend. Weet u zeker dat dit correct is?");
                                if (conf == true) {
                                    return true;
                                }
                            }
                        }
                        if (postc.length == 4) {
                            $('#inputLand>option:eq(1)').prop('selected', true);
                        } else {
                            $('#inputLand>option:eq(0)').prop('selected', true);
                        }
                    }


                },

            });

            return false;
        }
    });

    function checkInputs() {
        var isValid = true;
        $('#detail-form input').filter('[required]').each(function() {
            if ($(this).val() === '') {
                $('#detail-send-btn').prop('disabled', true)
                isValid = false;
                return false;
            }
        });
        if (isValid) {
            $('#detail-send-btn').prop('disabled', false)
        }
        return isValid;

    }

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $('#detail-send-btn').click(function() {
        var inputEmail = document.getElementById('inputEmail4');
        var inputEmail2 = inputEmail.value;
        // checkInputs();
        if (!isEmail(inputEmail2)) {
            inputEmail.setCustomValidity("Geen geldig e-mailadres.");
        } else {
            inputEmail.setCustomValidity("");
            $('#captchaModal').modal('show');

        }
    });


    //  Enable or disable button based on if inputs are filled or not
    $('#detail-form input').filter('[required]').on('keyup', function() {
        checkInputs()
    })

    checkInputs()

});
