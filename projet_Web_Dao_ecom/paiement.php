<?php 
$TPS = 0.05;
$TVQ = 0.09975;
$donnees ="";
if(isset($_GET['panier'])){
	$donnees = json_decode($_GET['panier']);
	$listeProduit=$donnees->detailsProduit;
	$listePanier = $donnees->listePaniers;
	$tailleProduit = count($listeProduit);
	$taillePanier = count($donnees->detailsProduit);
	//echo get_object_vars($listeProduit[0])['nomArticle'];
	//$listeProduit = get_object_vars($donnees);
	//$listePanier = get_object_vars($donnees->listePaniers);
	//echo $listeProduit;
}

?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		 <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

		<title>Papier Bureau </title>
 
 <!-- Google Font: Source Sans Pro -->
 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="client/admin/plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="client/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="client/admin/dist/css/adminlte.min.css">

  <!-- jQuery -->
<script src="client/admin/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="client/admin/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- overlayScrollbars -->
<script src="client/admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="client/admin/dist/js/adminlte.js"></script>


<!-- PAGE PLUGINS -->
<!-- jQuery Mapael -->
<script src="client/admin/plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
<script src="client/admin/plugins/raphael/raphael.min.js"></script>
<script src="client/admin/plugins/jquery-mapael/jquery.mapael.min.js"></script>
<script src="client/admin/plugins/jquery-mapael/maps/usa_states.min.js"></script>

<!-- ChartJS -->
<script src="client/admin/plugins/chart.js/Chart.min.js"></script>



<!-- AdminLTE for demo purposes 
<script src="dist/js/demo.js"></script>
 AdminLTE dashboard demo (This is only for demo purposes) 
<script src="dist/js/pages/dashboard2.js"></script>-->
<script src="client/js/global.js"></script>
<script src="client/produit/requetesProduit.js"></script>
<script src="client/produit/vueProduit.js"></script>
<script src="client/membre/requetesMembre.js"></script>
<script src="client/membre/vueMembre.js"></script>
<script src="client/panier/requetesPanier.js"></script>
<script src="client/panier/vuePanier.js"></script>
		<!-- Slick -->
		<link type="text/css" rel="stylesheet" href="client/css/slick.css"/>
		<link type="text/css" rel="stylesheet" href="client/css/slick-theme.css"/>

		<!-- nouislider -->
		<link type="text/css" rel="stylesheet" href="client/css/nouislider.min.css"/>


		<!-- Custom stlylesheet -->
		<link type="text/css" rel="stylesheet" href="client/css/style.css"/>
		<link type="text/css" rel="stylesheet" href="client/css/style2.css"/>
		<link type="text/css" rel="stylesheet" href="client/css/style3.css"/>

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

    </head>
<body>
	<br>
<a href="serveur/DAO/ressources/views/gestionPageMembre.php" class="primary-btn order-submit">Retour au achat</a>
<br>
<div class="container">
				<!-- row -->
				<div class="row">

					<div class="col-md-7">
						<!-- Billing Details -->
						<div class="billing-details">
							<div class="section-title">
								<h3 class="title">Billing address</h3>
							</div>
							<div class="form-group">
								<input class="input" type="text" name="first-name" placeholder="First Name">
							</div>
							<div class="form-group">
								<input class="input" type="text" name="last-name" placeholder="Last Name">
							</div>
							<div class="form-group">
								<input class="input" type="email" name="email" placeholder="Email">
							</div>
							<div class="form-group">
								<input class="input" type="text" name="address" placeholder="Address">
							</div>
							<div class="form-group">
								<input class="input" type="text" name="city" placeholder="City">
							</div>
							<div class="form-group">
								<input class="input" type="text" name="country" placeholder="Country">
							</div>
							<div class="form-group">
								<input class="input" type="text" name="zip-code" placeholder="ZIP Code">
							</div>
							<div class="form-group">
								<input class="input" type="tel" name="tel" placeholder="Telephone">
							</div>
							<div class="form-group">
								<div class="input-checkbox">
									<input type="checkbox" id="create-account">
									<label for="create-account">
										<span></span>
										Create Account?
									</label>
									<div class="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<input class="input" type="password" name="password" placeholder="Enter Your Password">
									</div>
								</div>
							</div>
						</div>
						<!-- /Billing Details -->

						<!-- Shiping Details -->
						<div class="shiping-details">
							<div class="section-title">
								<h3 class="title">Shiping address</h3>
							</div>
							<div class="input-checkbox">
								<input type="checkbox" id="shiping-address">
								<label for="shiping-address">
									<span></span>
									Ship to a diffrent address?
								</label>
								<div class="caption">
									<div class="form-group">
										<input class="input" type="text" name="first-name" placeholder="First Name">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="last-name" placeholder="Last Name">
									</div>
									<div class="form-group">
										<input class="input" type="email" name="email" placeholder="Email">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="address" placeholder="Address">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="city" placeholder="City">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="country" placeholder="Country">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="zip-code" placeholder="ZIP Code">
									</div>
									<div class="form-group">
										<input class="input" type="tel" name="tel" placeholder="Telephone">
									</div>
								</div>
							</div>
						</div>
						<!-- /Shiping Details -->

						<!-- Order notes -->
						<div class="order-notes">
							<textarea class="input" placeholder="Order Notes"></textarea>
						</div>
						<!-- /Order notes -->
					</div>

					<!-- Order Details -->
					<div class="col-md-5 order-details">
						<div class="section-title text-center">
							<h3 class="title">Your Order</h3>
						</div>
						<div class="order-summary">
<div class="order-col">
              <div><strong>PRODUIT</strong></div>
              <div><strong>TOTAL</strong></div>
            </div>
            <div class="order-products">
				<?php
				$somme=0;
            //foreach ($listeProduit as $produit){
			 for($i=0;$i<$tailleProduit;$i++){
              $quantite =0;
              //$produit = $listeProduit[$i];
              $id = get_object_vars($listeProduit[$i])['id'];
              //$image = $produit->image;
              $prix = get_object_vars($listeProduit[$i])['prix'];
              $nomArticle = get_object_vars($listeProduit[$i])['nomArticle'];

              //foreach($listePanier as $panier){
				for($i=0;$i<$taillePanier;$i++){	
                if(get_object_vars($listePanier[$i])['idProduit'] == $id){
                  $quantite = get_object_vars($listePanier[$i])['quantite'];
                  break;
                }
              }
            
              $somme +=$prix*$quantite;
              $montantTPS = $somme * $TPS;
              $montantTVQ = ($somme + $montantTPS) * $TVQ;
              $montantTotal = $somme + $montantTPS + $montantTVQ;
            

            ?>

              <div class="order-col">
                <div><?=$quantite?> x $<?= $prix ?> (Nom du article : <?=$nomArticle?>)</div>
                <div>$<?=$prix*$quantite?></div>

              </div>
              <?php
            }						
			?>
           <div class="order-col">
              <div style="font-size: 16px;"><strong>SOUS TOTAL</strong></div>
              <div><strong class="order-total"style="font-size: 16px;">$ <?=round($somme, 2)?></strong></div>
            </div>
            <div class="order-col">
              <div style="font-size: 12px;"><strong>TPS</strong></div>
              <div><strong style="font-size: 12px;">$ <?=round($montantTPS, 2)?></strong></div>
            </div>
            <div class="order-col">
              <div style="font-size: 12px;"><strong>TVQL</strong></div>
              <div><strong style="font-size: 12px;">$ <?=round($montantTVQ, 2)?></strong></div>
            </div>
            <div class="order-col">
              <div style="font-size: 16px;"><strong>TOTAL</strong></div>
              <div><strong class="order-total"style="font-size: 16px;">$ <?=round($montantTotal, 2)?></strong></div>
            </div>
                     
 

			</div>
						<div class="payment-method">
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-1">
								<label for="payment-1">
									<span></span>
									Direct Bank Transfer
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-2">
								<label for="payment-2">
									<span></span>
									Cheque Payment
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-3">
								<label for="payment-3">
									<span></span>
									Paypal System
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="input-checkbox">
							<input type="checkbox" id="terms">
							<label for="terms">
								<span></span>
								I've read and accept the <a href="#">terms & conditions</a>
							</label>
						</div>
						<div id="paypal-button-container"></div>
						<a href="#" class="primary-btn order-submit">Place order</a>
					</div>
					<!-- /Order Details -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
			<input type="hidden" id="idMembre" value="<?= $id ?>"></input>
		<script src="https://www.paypal.com/sdk/js?client-id=AV-TMSfBHuxvSwhjaMFWztHzSzwxInVXB4d7IYtRsJJxfD6uTIDO32my_0gPZavWU0xIrXji9rmqNYAJ&currency=CAD"></script>
		<script src="client/js/paypal.js"></script>
<!-- panier -->




</body>
</html>