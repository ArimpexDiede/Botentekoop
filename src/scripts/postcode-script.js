$(function() {

    $('#inputZip').change(function() {


        var postc = $('#inputZip').val();
        var huisnr = $('#inputHuisnummer').val();

        var postc2 = postc.replace(/\s+/g, '');
        $('#inputZip').val(postc2.toUpperCase());


        if (!postc) {
            alert("Je moet wel een postcode EN huisnr invullen.");
            return false;
        } else {
             $('#inputStraat').val("Gegevens ophalen...");
             $('#inputPlaats').val("Gegevens ophalen...");
            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {

                        $('#inputPlaats').val(result.city);
                        $('#inputStraat').val(result.street);
                    //    $('#Land').val('NL');
                    } else {
                        if (postc.length >= 6) {
                            if (huisnr.length >= 1) {
                                var conf = confirm("Postcode, huisnummer combinatie niet bekend. Weet u zeker dat dit correct is?");

                                if (conf == true) {
                                    return true;
                                }
                            }
                        }
                        // if (postc.length == 4) {
                        //     $('#Land').val('BE');
                        // } else {
                        //     $('#Land').val('NL');
                        // }

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

        if (!postc) {
            alert("Je moet wel een postcode EN huisnr invullen.");
            return false;
        } else {
          $('#inputStraat').val("Gegevens ophalen...");
          $('#inputPlaats').val("Gegevens ophalen...");
            $.ajax({

                url: '/postcodeCheck.php',
                type: 'GET',
                dataType: 'json',
                data: 'postc=' + postc + '&huisnr=' + huisnr,

                success: function(result) {
                    if (result.postcode == postc.toUpperCase()) {

                        $('#inputPlaats').val(result.city);
                        $('#inputStraat').val(result.street);
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



});
