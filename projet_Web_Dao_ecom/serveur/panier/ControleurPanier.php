<?php
       
    require_once("Panier.php");
    require_once("DaoPanier.php");

 class ControleurPanier { 
    static private $instanceCtr = null;
    private $reponse;

    private function __construct(){

    }

     // Retourne le singleton du modèle 
	static function  getControleurPanier():ControleurPanier{
		if(self::$instanceCtr == null){
			self::$instanceCtr = new ControleurPanier();  
		}
		return self::$instanceCtr;
	}

	function CtrPanier_Enregistrer(){
        
         $Panier = new Panier(0, (int)$_POST['idMembre'], (int)$_POST['idProduit'], (int)$_POST['quantite']);
         return DaoPanier::getDaoPanier()->MdlPanier_Enregistrer($Panier); 
    }

    function CtrPanier_getAll(){
         return DaoPanier::getDaoPanier()->MdlPanier_getAll(); 
    }

    function CtrPanier_Enlever(){
        return DaoPanier::getDaoPanier()->MdlPanier_Enlever((int)$_POST['id']); 
   }
   function CtrPanier_Modifier(){
    $Panier = new Panier( (int)$_POST['id'],(int)$_POST['idMembre'], (int)$_POST['idProduit'], (int)$_POST['quantite']);
    return DaoPanier::getDaoPanier()->MdlPanier_Modifier($Panier); 
    }

    function CtrPanier_getUnPanier(){
        
        return DaoPanier::getDaoPanier()->MdlPanier_getUnPanier((int)$_POST['idMembre']);
    }

    function CtrPanier_Actions(){
        

            $action=$_POST['action'];
            
            switch($action){
                case "enregistrer" :
                    return  $this->CtrPanier_Enregistrer();
                case "modifier" :
                    return $this->CtrPanier_Modifier();
                break;
                case "enlever" :
                    return  $this->CtrPanier_Enlever();
                break;
                case "lister" :
                    return $this->CtrPanier_getAll(); 
                break;
                case "unPanier" :
                    
                    return $this->CtrPanier_getUnPanier(); 
                break;
            }
    }
        // Retour de la réponse au client
}
?>