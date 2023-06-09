<?php
require_once 'serveur/DAO/vendor/autoload.php';

use app\Controllers\ArticleController;
use app\Controllers\MembreController;

$action = filter_input(INPUT_GET,'action',FILTER_SANITIZE_STRING);

if(!$action){
    $action = 'gestionPageMembre';
}

    switch ($action) {
        case 'gestionPageMembre':
            ArticleController::indexAction2();
            break;
        case 'createMembre':
            MembreController::createAction();
            break;
        case 'store':
            MembreController::storeAction();
            break;
        case 'connMembre':
            MembreController::ConnexionAction();
            break;
        case 'storeConnexion':
            MembreController::storeConnexion();
            break;
        case 'update':
            MembreController::updateAction();
            break;
        case 'destroy':
            ArticleController::destroyAction();
            break;
        case 'deconnexion':
            session_unset();            
            session_destroy();
            $msg = 'Vous+etes+deconnecte+de+votre+session+merci+de+votre+visite';
            header('location:index.php?action=connMembre&msg='.$msg);
            break;

            
        default:
            echo "Page Not found 404";
            break;
    }

