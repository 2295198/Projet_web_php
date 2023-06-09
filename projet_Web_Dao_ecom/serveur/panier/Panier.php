<?php
declare (strict_types=1);
class Panier {
    private $id;
    private $idMembre;
    private $idProduit;
    private $quantite;
    private $dateAjout;

    function __construct(int $id, int $idMembre, int $idProduit, int $quantite) {
        $this->id = $id;
        $this->idMembre = $idMembre;
        $this->idProduit = $idProduit;
        $this->quantite = $quantite;
}

    function getId():int {
        return $this->id;
    }
    function getIdProduit():int {
        return $this->idProduit;
    }
    function getIdMembre():int {
        return $this->idMembre;
    }
    function getQuantite():int {
        return $this->quantite;
    }

    function getDateAjout():string {
        return $this->DateAjout;
    }

    function setId($id):void {
        $this->id = $id;
    }
    function setIdProduit($idProduit):void {
        $this->idProduit = $idProduit;
    }
    function setIdMembre($idMembre):void {
        $this->idMembre = $idMembre;
    }
    function setQuantite($quantite):void {
        $this->quantite = $quantite;
    }
}
?>