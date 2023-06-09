<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../ressources/bd/Connexion.php");
require_once("Panier.php");

class DaoPanier {
    static private $modelPanier = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoPanier():DaoPanier {
		if(self::$modelPanier == null){
			self::$modelPanier = new DaoPanier();  
		}
		return self::$modelPanier;
	}
	
	function MdlPanier_Enregistrer(Panier $Panier):string {

        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO panier(`id`, `idMembre`, `idProduit`, `quantite`) VALUES(0,?,?,?)";
       
        try{
            $donnees = [$Panier->getIdMembre(),$Panier->getIdProduit(),$Panier->getQuantite()];
            
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "le produit a été bien ajouté au panier";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le Panier";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
	
    function MdlPanier_getAll():string {
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM panier";
        try{
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listePaniers'] = array();
            $reponse['listePaniers'] = $stmt->fetchAll();
           
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des Paniers";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
	function MdlPanier_Modifier(Panier $Panier):string {
        $connexion =  Connexion::getConnexion();
        $requette=" UPDATE panier
        SET 
            IdMembre = ?,
            IdProduit = ?,
            quantite   = ?
        WHERE id = ? ";
       
        try{
            $donnees = [$Panier->getIdMembre(),$Panier->getIdProduit(),$Panier->getQuantite(),$Panier->getId()];
            
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "la quantité du produit a été bien modifié";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour modifier le Panier";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }



    function MdlPanier_Enlever($id):string {
        $connexion =  Connexion::getConnexion();
        $requette="DELETE FROM panier WHERE id=?";
       
        try{
            
            $donnees = [$id];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "le produit  a été bien enlevé du panier";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour suprimer le Panier";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
    function MdlPanier_getUnPanier($id):string {
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM panier where idMembre = $id";

        try{
            $stmt = $connexion->prepare($requette);
            $stmt->execute();

            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listePaniers'] = array();
            $reponse['listePaniers'] = $stmt->fetchAll();
           // $reponse['Produit'] = array();
            $reponse['detailsProduit'] = array();
            //$reponse['Produit']['quantite'] = 0;
            foreach($reponse['listePaniers'] as $ligne){
                $quantite = $ligne['quantite'];
                $idProduit = $ligne['idProduit'];
                $requetteProduit="SELECT * FROM articles where id = $idProduit"; 
                $stmtProduit = $connexion->prepare($requetteProduit);
                $stmtProduit->execute();
                
                array_push($reponse['detailsProduit'], $stmtProduit->fetch());
                //array_push($reponse['Produit']['quantite'], $quantite);

            }
           
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des Paniers";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }


}




?>