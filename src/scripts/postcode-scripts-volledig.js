$(function() {

    $('#postc').change(function() {


        var postc = $('#postc').val();
        var huisnr = $('#huisnr').val();

        var postc2 = postc.replace(/\s+/g, '');
        $('#postc').val(postc2.toUpperCase());


        if (!postc) {
            alert("Je moet wel een postcode EN huisnr invullen.");
            return false;
        } else {

            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {

                        $('#woonp')
                        $('#adres').val(result.street);
                        $('#Land').val('NL');
                    } else {
                        if (postc.length >= 6) {
                            if (huisnr.length >= 1) {
                                var conf = confirm("Postcode, huisnummer combinatie niet bekend. Weet u zeker dat dit correct is?");

                                if (conf == true) {
                                    return true;
                                }
                            }
                        }
                        if (postc.length == 4) {
                            $('#Land').val('BE');
                        } else {
                            $('#Land').val('NL');
                        }

                    }

                },

            });

            return false;
        }
    });


    $('#huisnr').change(function() {

        var postc = $('#postc').val();
        var huisnr = $('#huisnr').val();

        var postc2 = postc.replace(/\s+/g, '');
        $('#postc').val(postc2.toUpperCase());

        if (!postc) {
            alert("Je moet wel een postcode EN huisnr invullen.");
            return false;
        } else {

            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {

                        $('#woonp').val(result.city);
                        $('#adres').val(result.street);
                    } else {
                        if (postc.length >= 6) {
                            if (huisnr.length >= 1) {
                                var conf = confirm("Postcode, huisnummer combinatie niet bekend. Weet u zeker dat dit correct is?");
                                if (conf == true) {
                                    return true;
                                }
                            }
                        }

                    }

                },

            });

            return false;
        }
    });









    $('#Aflpostc').change(function() {

        var postc = $('#Aflpostc').val();
        var huisnr = $('#Aflhuisnr').val();

        var postc2 = postc.replace(/\s+/g, '');
        $('#Aflpostc').val(postc2.toUpperCase());

        if (!postc) {
            alert("Je moet wel een postcode EN huisnr invullen.");
            return false;
        } else {

            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {

                        $('#Aflwoonp').val(result.city);
                        $('#Afladres').val(result.street);
                        $('#AflLand').val('NL');

                    } else {
                        if (postc.length >= 6) {
                            if (huisnr.length >= 1) {
                                var conf = confirm("Postcode, huisnummer combinatie niet bekend. Weet u zeker dat dit correct is?");
                                if (conf == true) {
                                    return true;
                                }
                            }
                        }

                        if (postc.length == 4) {
                            $('#AflLand').val('BE');
                        } else {
                            $('#AflLand').val('NL');
                        }

                    }

                },

            });

            return false;
        }
    });


    $('#Aflhuisnr').change(function() {

        var postc = $('#Aflpostc').val();
        var huisnr = $('#Aflhuisnr').val();

        var postc2 = postc.replace(/\s+/g, '');
        $('#Aflpostc').val(postc2.toUpperCase());

        if (!postc) {
            alert("Je moet wel een postcode EN huisnr invullen.");
            return false;
        } else {

            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {

                        $('#Aflwoonp').val(result.city);
                        $('#Afladres').val(result.street);
                    } else {
                        if (postc.length >= 6) {
                            if (huisnr.length >= 1) {
                                var conf = confirm("Postcode, huisnummer combinatie niet bekend. Weet u zeker dat dit correct is?");
                                if (conf == true) {
                                    return true;
                                }
                            }
                        }

                    }

                },

            });

            return false;
        }
    });





    jQuery('input[name="postc"]').keyup(function() {

        var length = $(this).val().length;

        if (length <= 4) {

            var num = jQuery(this).val().substring(0, 4);
            var return_num = num.replace(/[^0-9]/g, '');

            jQuery(this).val(return_num);

        } else {

            var num = jQuery(this).val().substring(0, 4);
            var alph = jQuery(this).val().substring(2, 6);
            var return_alph = alph.replace(/[^a-zA-Z]/g, '');

            jQuery(this).val(num + '' + return_alph);

        }

    });









    jQuery('input[name="Aflpostc"]').keyup(function() {

        var length = $(this).val().length;

        if (length <= 4) {

            var num = jQuery(this).val().substring(0, 4);
            var return_num = num.replace(/[^0-9]/g, '');

            jQuery(this).val(return_num);

        } else {

            var num = jQuery(this).val().substring(0, 4);
            var alph = jQuery(this).val().substring(2, 6);
            var return_alph = alph.replace(/[^a-zA-Z]/g, '');

            jQuery(this).val(num + '' + return_alph);

        }

    });

});
