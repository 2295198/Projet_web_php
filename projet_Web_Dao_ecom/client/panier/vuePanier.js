//let panier;
let montantTotal =0.0;
function initPanier() {
    let idMembre = document.getElementById('idMembre').value;
    requetePanier(idMembre);
    //chargerUnMembreAJAX(idMembre);
    //chargerAcceuilAJAX();
 
}

let montrerVuePanier = (action, donnees) => {
  //alert(donnees.msg);
  let idMembre = document.getElementById('idMembre').value;
 switch(action){
     case "enregistrer"  :
     case "modifier"     :
     case "enlever"      :
         if(donnees.OK){
          window.location.href = "leMembre.php?msg="+donnees.msg;
          
          //afficherMessage(donnees.msg);
          //document.getElementById('panierQty').innerHTML = donnees.detailsProduit.length;
          $('#panierModal').modal('hide');
          actionSurPanier(idMembre,'afficher');
          //chargerPaniersAJAX();
             
             }else{
             afficherMessage("Problème côté serveur. Essaiez plus tard!!! autre"); 
         }
        break;
     case "lister"       :
         if(donnees.OK){
             listerPaniers(donnees.listePaniers);
         }else{
             afficherMessage("Problème côté serveur. Essaiez plus tard!!!   lister"); 
         }
 }

}
let afficherPanier = (reponse) =>{
  if(reponse.OK){
    let lng = reponse.detailsProduit.length;
    
    document.getElementById('panierQty').innerHTML = lng;
  let somme =0;
  let donnees = JSON.stringify(reponse);
  let liste =reponse.detailsProduit;
  let quantite= 0;//reponse.listePaniers[0].quantite;
  let id =0;
  let nomArticle = "";
  let description = "";
  let prix = "";
  let image = "";
  let img = "";
  let form=`	
  
  <div class="modal fade" id="panierModal"  >
    <div class="modal-dialog  ">
      <div class="modal-content bg-light">
        <div class="modal-header">
        <label class="form-label">Votre commande</label>
        <button type="button" class="close" onclick ="chargerAcceuilAJAX();" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true"><img src="client/images/retour.png" style="width:40px;height:40px"></span>
        </button>
        </div>
        <div class="modal-body ">
        <form method='POST' action='paiement.php?panier=${donnees}'>
        
        <input type="hidden" name="panier" value=''>
        `;
          if(liste != undefined){

            for (let i=0;i<liste.length;i++){
              let quantite =0;
              let produit = liste[i];
              id = produit.id;    
              image = produit.image;
              prix = produit.prix;
              nomArticle = produit.nomArticle; 
              description = produit.description;
              if(image != null){
                img = image;
              }
 
              for(panier of reponse.listePaniers){
                if(panier.idProduit == id){
                  quantite = panier.quantite;
                  break;
                }
              }
            
              somme +=prix*quantite;
              
              form +=`

              

								<div class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
										
									</a>
									<div class="cart-dropdown">
										<div class="cart-list">
											<div class="product-widget">
												<div class="product-img">
                          <img src="${img}" alt="">

												</div>
												<div class="product-body">
                          <h3 id="nom"  name="nom" class="product-name"><a href="#">${nomArticle}</a></h3>
                          <h5  id="description"  name="description" class="product-name"style="font-size: 9px;" ><a href="#">${description}</a></h5>
                          <h4 class=""><span id="qty" name="qty">${quantite}</span> x $<span id="prix"  name="prix" >${prix}<span> = $ ${(prix*quantite).toFixed(2)}</h4>
                              </div>
												      <a onClick="actionSurPanier(${reponse.listePaniers[0].idMembre},'suprimer', ${id});"class="delete"><i class="fa fa-close"></i></a>                  </div>

											</div>

										
									
							
									</div>

                  
                  <a class="delete btn btn-danger" >Détails Produit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantité  : ${quantite}   
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="${img}" width="55px" "alt=""><i class="fas fa-trash-alt"
                   style="background-color: #dc3545; border-color: #dc3545; color: white;" ></i></a>
                  </div>
                    `;
                  }
                }
                form += `

                <br>
                <br>
        </div>
        <form>
        <div class="modal-footer text-left">
          <div class="row">
                <h6 style="text-align: left;" id="nbrearticles" >${liste.length} article(s) sélectionné(s)</h6>
                <h5 style="text-align: left;" id="subTotal" > TOTAL: $ ${somme.toFixed(2)}</h5>
          </div>
          <div class="row">  
            <div class="col-12">
            <button class="btn btn-danger" 
            onclick="actionSurPanier(${reponse.listePaniers[0].idMembre},'paiement');">
             Caisse </button>
            </div>
          </div>
        </div>

    </div>
</div>
</div>


  `;
          
    
    document.getElementById('contenu').innerHTML = form;
    $('#panierModal').modal('show');
         

      }
}

let paiement = (reponse) =>{
  const TPS = 0.05;
  const TVQ = 0.09975;
  let montantTPS =0.0;
  let montantTVQ = 0.0;
  

  
  $('#panierModal').modal('hide');
  if(reponse.OK){
     let size = reponse.detailsProduit.length;
     let somme =0;
  let donnees = reponse;
  let liste =reponse.detailsProduit;
  let quantite= 0;//reponse.listePaniers[0].quantite;
  let id =0;
  let nomArticle = "";
  let prix = "";

  let form = `
  <br>
  <br>
  <div id="paypal-button-container"></div>
  <div class="container background-radial-gradient" >
  <div class="row ">
    <div class="col-lg-6 mb-5 mb-lg-0">
      <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
        Votre satisfaction <br />
        <span style="color: hsl(218, 81%, 75%)">est notre priorité</span>
      </h1>
      <p class="mb-6 opacity-90" style="color: hsl(218, 81%, 85%)">
      
      
      "<strong>Chez Papier Bureau</strong>, nous prenons la sécurité de vos données personnelles 
      et bancaires très au sérieux. Toutes les transactions effectuées sur notre site sont 
      protégées par les dernières technologies de cryptage et de sécurité, garantissant ainsi 
      la confidentialité et l'intégrité de vos informations. Nous sommes fiers de fournir à nos
       clients une expérience d'achat en ligne sûre et sécurisée, et nous nous engageons à maintenir
        ces normes élevées de sécurité en tout temps."


      </p>
    </div>

    <div class="col-lg-6 mb-5 position-relative">
      <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
      <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

      <div class="card bg-glass " style="width:40rem;">
        <div class="card-body px-2 py-2 px-md-5" >
        <!-- Order Details 
        <div class="col-md-12 order-details  bg-info" >-->
          <div class="section-title text-center">
            <h3 class="title">votre commande</h3>
          </div>
          <div class="order-summary">
            <div class="order-col">
              <div><strong>PRODUIT</strong></div>
              <div><strong>TOTAL</strong></div>
            </div>
            <div class="order-products">`;
            for (let i=0;i<liste.length;i++){
              let quantite =0;
              let produit = liste[i];
              id = produit.id;    
              image = produit.image;
              prix = produit.prix;
              nomArticle = produit.nomArticle; 

              for(panier of reponse.listePaniers){
                if(panier.idProduit == id){
                  quantite = panier.quantite;
                  break;
                }
              }
            
              somme +=prix*quantite;
              montantTPS = somme * TPS;
              montantTVQ = (somme + montantTPS) * TVQ;
              montantTotal = somme + montantTPS + montantTVQ;
            

            form += `

              <div class="order-col">
                <div>${quantite} x $${prix} (Nom du article : ${nomArticle})</div>
                <div>$${prix*quantite}</div>

              </div>
              `;
            }
              form +=`
            </div>
           <!-- <div class="order-col">
              <div>Shiping</div>
              <div><strong>FREE</strong></div>
            </div>-->
            <div class="order-col">
              <div style="font-size: 16px;"><strong>SOUS TOTAL</strong></div>
              <div><strong class="order-total"style="font-size: 16px;">$${somme.toFixed(2)}</strong></div>
            </div>
            <div class="order-col">
              <div style="font-size: 12px;"><strong>TPS</strong></div>
              <div><strong style="font-size: 12px;">$${montantTPS.toFixed(2)}</strong></div>
            </div>
            <div class="order-col">
              <div style="font-size: 12px;"><strong>TVQ</strong></div>
              <div><strong style="font-size: 12px;">$${montantTVQ.toFixed(2)}</strong></div>
            </div>
            <div class="order-col">
              <div style="font-size: 16px;"><strong>TOTAL</strong></div>
              <div><strong class="order-total"style="font-size: 16px;">$${montantTotal.toFixed(2)}</strong></div>
            </div>
                     
          
          
          <span class="text-danger">Choisir votre mode de payement</span>
          
          <div class="payment-method">
            <div class="input-radio">
              <input type="radio" name="payment" id="payment-1">
              <label for="payment-1">
                <span></span>
                Transaction bancaire
              </label>
              <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="input-radio">
              <input type="radio" name="payment" id="payment-2">
              <label for="payment-2">
                <span></span>
                Cheque
              </label>
              <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="input-radio">
              <input type="radio" name="payment" id="payment-3">
              <label for="payment-3">
                <span></span>
                Paypal
              </label>
             <!-- <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>-->
            </div>
          </div>
          <!-- <div class="input-checkbox">
            <input type="checkbox" id="terms">
            <label for="terms">
              <span></span>
              I've read and accept the <a href="#">terms & conditions</a>
            </label>
          </div>-->
          
          <a href="#" class="primary-btn order-submit">Placer la commande</a>
          <!--</div>
         /Order Details -->
      
        </div>
      </div>
    </div>
  </div>
</div>



  

  
  
  `;
  document.getElementById('contenu').innerHTML = form;
  }

}

let paiementPaypal = (reponse) =>{
  const TPS = 0.05;
  const TVQ = 0.09975;
  let montantTPS =0.0;
  let montantTVQ = 0.0;
  //let montantTotal =0.0;
  if(reponse.OK){
     let size = reponse.detailsProduit.length;
     let somme =0;
  let donnees = reponse;
  let liste =reponse.detailsProduit;
  let quantite= 0;//reponse.listePaniers[0].quantite;
  let id =0;
  let nomArticle = "";
  let prix = "";
  let frm = `
  <h3>paypal</h3>
  ` ;
  let form = `
            <div class="order-col">
              <div><strong>PRODUIT</strong></div>
              <div><strong>TOTAL</strong></div>
            </div>
            <div class="order-products">`;
            for (let i=0;i<liste.length;i++){
              let quantite =0;
              let produit = liste[i];
              id = produit.id;    
              image = produit.image;
              prix = produit.prix;
              nomArticle = produit.nomArticle; 

              for(panier of reponse.listePaniers){
                if(panier.idProduit == id){
                  quantite = panier.quantite;
                  break;
                }
              }
            
              somme +=prix*quantite;
              montantTPS = somme * TPS;
              montantTVQ = (somme + montantTPS) * TVQ;
              montantTotal = somme + montantTPS + montantTVQ;
            

            form += `

              <div class="order-col">
                <div>${quantite} x $${prix} (Nom d'article : ${nomArticle})</div>
                <div>$${prix*quantite}</div>

              </div>
              `;
            }
  document.getElementById('order').innerHTML = frm;
  }

}

let retourPanier = (reponse) =>{
  if(reponse.OK){
    let tabPanier = [];
    let liste =reponse.detailsProduit;
    let id =0;
    let nomArticle = "";
    let prix = "";

            for (let i=0;i<liste.length;i++){
              let quantite =0;
              let produit = liste[i];
              id = produit.id;    
              image = produit.image;
              prix = produit.prix;
              nomArticle = produit.nomArticle; 

              for(panier of reponse.listePaniers){
                if(panier.idProduit == id){
                  quantite = panier.quantite;
                  break;
                }
              }
              

            }
          }

}

