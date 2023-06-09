var panier;
let actionSurPanier = (id,action,idProduit=0) => {
	let formPanier = new FormData();
    formPanier.append('idMembre',id);
	formPanier.append('action','unPanier');
	for (const pair of formPanier.entries()) {
		//console.log(`${pair[0]}, ${pair[1]}`);
		//alert(`${pair[0]}, ${pair[1]}`);
	}
	$.ajax({
		type : 'POST',
		url : 'panier.php',
		data : formPanier, //$('#formEnreg').serialize()
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){
			panier = reponse;
			//document.getElementById('panierQty').innerHTML = reponse.detailsProduit.length;

			//alert(panier);
			switch(action){
				case "initialiser"  :
					document.getElementById('panierQty').innerHTML = reponse.detailsProduit.length;
					break;
				case "afficher"     :
					afficherPanier(reponse);
					break;
				case "paiement"     :
					paiement(reponse);
					break;
				case "paiementPaypal"     :
					
					let donnees = {"liste":reponse.listePaniers, "detailsProduit":reponse.detailsProduit}
					document.getElementById('panier').value = donnees;
					//paiementPaypal(reponse);
					break;
						
				case "ajouter"     :
					//alert(idProduit);
					ajouter(idProduit,reponse);
					document.getElementById('panierQty').innerHTML = reponse.detailsProduit.length;
					break;
				case "suprimer"     :
					suprimer(idProduit,reponse);
					document.getElementById('panierQty').innerHTML = reponse.detailsProduit.length;
					
					break;
				
			}
		},
		fail : function (err){
		   err = "Error requetesPanier";
		}
	});
}
let suprimer = (idNewProduit,donnees) =>{
	let idMembre = donnees.listePaniers[0].idMembre;
	let formPanier = new FormData();
	let action = 'enlever';
    formPanier.append('idMembre',idMembre);
	formPanier.append('idProduit',idNewProduit);

	for(let produit of donnees.listePaniers){
		let id = produit.id;
		let quantite = parseInt(produit.quantite);
		if(produit.idProduit == idNewProduit){
			formPanier.append('id',id);
			quantite --;
			if(quantite>0){
				//document.getElementById('qty').innerHTML= quantite;
				formPanier.append('quantite',quantite);
				action = 'modifier';
			}
			break;
		}
	}
	formPanier.append('action',action);
	for (const pair of formPanier.entries()) {
		//console.log(`${pair[0]}, ${pair[1]}`);
		//alert(`${pair[0]}, ${pair[1]}`);
	}
	$.ajax({
		type : 'POST',
		url : 'panier.php',
		data : formPanier, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){
			//alert(reponse);
			montrerVuePanier(action, reponse);
		},
		fail : function (err){
		   
		}
	});
}
let ajouter = (idNewProduit,donnees) =>{
	//let membre = document.getElementById('idMembre').value;
	let idMembre = donnees.listePaniers[0].idMembre;
	let id = 0;
	let quantite =1;
	let action = 'enregistrer';

	for(let produit of donnees.listePaniers){
		if(produit.idProduit == idNewProduit){
			id = produit.id
			quantite +=parseInt(produit.quantite);
			action = 'modifier';
			break;
		}
	}
	let formPanier = new FormData();
    formPanier.append('idMembre',idMembre);
    formPanier.append('id',id);
    formPanier.append('idProduit',idNewProduit);
	formPanier.append('quantite',quantite);
	formPanier.append('action',action);
	for (const pair of formPanier.entries()) {
		//console.log(`${pair[0]}, ${pair[1]}`);
		//alert(`${pair[0]}, ${pair[1]}`);
	}
	$.ajax({
		type : 'POST',
		url : 'panier.php',
		data : formPanier, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){
			//alert(reponse);
			//document.getElementById('panierQty').innerHTML = reponse.detailsProduit.length;
					montrerVuePanier(action, reponse);
		},
		fail : function (err){
		   
		}
	});

	


}
 /*
let requeteEnregistrerPanier = (produit) => {
    let membre = document.getElementById('idMembre').value;
	let formPanier = new FormData();
    formPanier.append('idMembre',membre);
    formPanier.append('idProduit',produit);
    formPanier.append('quantite',1);
	formPanier.append('action','enregistrer');
	for (const pair of formPanier.entries()) {
		//console.log(`${pair[0]}, ${pair[1]}`);
		//alert(`${pair[0]}, ${pair[1]}`);
	}


	$.ajax({
		type : 'POST',
		url : 'panier.php',
		data : formPanier, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){
			//alert(reponse);
					montrerVuePanier("enregistrer", reponse);
		},
		fail : function (err){
		   
		}
	});
}


 
let requetePanier = (id) => {
	let formPanier = new FormData();
    formPanier.append('idMembre',id);
	formPanier.append('action','unPanier');
	for (const pair of formPanier.entries()) {
		//console.log(`${pair[0]}, ${pair[1]}`);
		//alert(`${pair[0]}, ${pair[1]}`);
	}
	$.ajax({
		type : 'POST',
		url : 'panier.php',
		data : formPanier, //$('#formEnreg').serialize()
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){
			//alert(reponse);
			
		    document.getElementById('panierQty').innerHTML = reponse.detailsProduit.length;

					
		},
		fail : function (err){
		   
		}
	});
}
let requetePanierMembre = (id) => {
	
	let formPanier = new FormData();
    formPanier.append('idMembre',id);
	formPanier.append('action','unPanier');
	for (const pair of formPanier.entries()) {
		//console.log(`${pair[0]}, ${pair[1]}`);
		//alert(`${pair[0]}, ${pair[1]}`);
	}
	$.ajax({
		type : 'POST',
		url : 'panier.php',
		data : formPanier, //$('#formEnreg').serialize()
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){
			//alert(reponse);

			afficherPanier(reponse);
					
		},
		fail : function (err){
		   
		}
	});
}

 */   