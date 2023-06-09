<?php
declare(strict_types=1);
require_once(__DIR__."/serveur/Panier/ControleurPanier.php");

    $instanceCtr = ControleurPanier::getControleurPanier();
    echo $instanceCtr->CtrPanier_Actions();

?>