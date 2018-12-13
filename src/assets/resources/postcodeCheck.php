<?php
if(basename($_SERVER['PHP_SELF']) == basename(__FILE__)):

    if($_SERVER['REQUEST_METHOD'] == 'GET'):

if (!$_GET['huisnr'])
{
	$_GET['huisnr']=1;
}
$postcodecheck = str_replace(" ", "", $_GET['postc']);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://api.postcode.nl/rest/addresses/'.$postcodecheck.'/'.$_GET['huisnr']);
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($curl, CURLOPT_USERPWD, "DKahmusH8DW6LicWsud50wOD2rd8zMnlq7iARl4R19h:pfQoJhb4yVi1GEt05GCISyhW5oKgj1hhmq7hUW6eSXr");

        $return_data = curl_exec($curl);
        curl_close($curl);

        print $return_data;

    else:

        header("Location: /");

    endif;

else:

    header("Location: /");

endif;
?>