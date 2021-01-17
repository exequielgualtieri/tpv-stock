<?php
include('database.php');


    $query = "SELECT * FROM producto";
    //$query = "SELECT idMesa, numMesa FROM mesa";

    $result = mysqli_query($connection, $query);

    if(!$result) {
        die('Query Failed' . mysqli_error());
    }

    $json = array();
    while($row = mysqli_fetch_array($result)) {
    $json[] = array(
    'idProd' => $row['idProd'],
    'nombreProd' => $row['nombreProd'],
    'precioProd' => $row['precioProd'],
    'categProd' => $row['categProd'],
    'subcaProd' => $row['subcaProd'],
    'stockProd' => $row['stockProd']
        );
    }   

    $jsonstring = json_encode($json);
    echo $jsonstring;
 //   var_dump($jsonstring);