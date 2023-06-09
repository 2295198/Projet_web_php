<?php
require_once 'serveur/DAO/vendor/autoload.php';

use app\Controllers\AdminController;
use app\Controllers\MembreController;


$action = filter_input(INPUT_GET,'action',FILTER_SANITIZE_STRING);
if(!$action){
    $action = 'gestionAdminArticle';
}

    switch ($action) {
        case 'gestionAdminArticle':
            AdminController::adminAffiche();
            break;

        case 'createArticle':
            AdminController::storeArticleAction();
            break;
        case 'edit':
            AdminController::editAction();
            break;
        case 'updateArticle':
            AdminController::updateAction();
            break;
        case 'destroyArticle':
            AdminController::destroyAction();
            break;
        case 'gestionMembre':
            MembreController::indexAction();
            break;
        case 'onStatut':
            MembreController::StatutActionA();
            break;
        case 'offStatut':
            MembreController::StatutActionO();
            break;

        default:
            echo "Page Not found 404";
            break;
    }


    