
 import '../styling/flexslider.scss';
  import '../styling/detail_page.scss';
  import '../scripts/flexslider';
 import '../scripts/bootstrap-slider';
 import "jquery-colorbox/jquery.colorbox-min.js";
  import '../scripts/autocomplete';
  import 'bootstrap/dist/js/bootstrap.bundle.js';
 import 'easy-autocomplete/dist/jquery.easy-autocomplete';

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

     });
