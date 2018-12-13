
$(function() {

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
