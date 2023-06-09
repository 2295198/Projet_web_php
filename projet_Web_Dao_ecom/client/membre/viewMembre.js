/*let formModifier = (id,categorie,nomArticle,description,quantite,prix,dateCreation)=>{alert(1);
    
    let forme = `
    
    <!-- Edit Modal HTML -->
<div id="editArticleModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
		<form  action="roote.php?action=getArticleById&id" method="POST" >

				<div class="modal-header">						
					<h4 class="modal-title">Edit Article</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">	
				<div class="form-group">
						<input type="hidden" class="form-control" value="${id}" id="id" name="id">
                        </div>
				<div class="form-group">
						<label>categorie</label>
						<input type="text" class="form-control" value="${categorie}" name="categorie" required>
					</div>
					<div class="form-group">
						<label>nomArticle</label>
						<input type="text" class="form-control" value="${nomArticle}" id="nomArticle" name= "nomArticle" required>
					</div>
					<div class="form-group">
						<label>prix</label>
						<input type="text" class="form-control" value="${prix}" id="prix" name="prix" required>
					</div>
					<div class="form-group">
						<label>Quantite</label>
						<input type="text" class="form-control" value="${quantite}"id="quantite" name="quantite" required>
					</div>
					<div class="form-group">
						<label>description</label>
						<input type="text" class="form-control" value="${description}"id="description" name="description" required></textarea>
					</div>
					
					<div class="form-group">
                            <label for="pochette" class="form-label">Pochette</label>
                            <input type="file" class="form-control is-valid" value="" id="pochette" name="pochette">
                        </div>

					<div class="form-group">
						<label>date Creation</label>
						<input type="text" class="form-control" value="${dateCreation}"id="dateCreation" name="dateCreation" required>
					</div>						
				</div>
				
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
					<input type="submit" class="btn btn-info" value="Save">
				</div>
			</form>
		</div>
	</div>
</div>



    `;
    document.getElementById('contenu').innerHTML=forme ;
    $('#editArticleModal').modal('show');
}*/







$(document).ready(function(){
	$('.edit1').click(function(){
		var articleId = $(this).attr('value');
		   alert("Id: " + articleId);
	   $.ajax({
		//url: "AdminController.php/getArticleById&id="+articleId, // URL du script PHP qui récupère les informations de l'article
		url:"roote.php?action=edit",
		type: "POST",
		data: { 'id': articleId },
		contentType : false ,
		processDara : false,
		dataType : 'text',
		success: function(response){ alert(response);
			//var article = jQuery.parseJSON(response); // Convertir la réponse JSON en objet JavaScript
			//if(article.status == 402){
				//alert(article.messagr+"teeeeeeeeeesssssst");
			//}else if(article.status == 200){
				let article = response;
				$("#id").val(article.articleId);
				$("#categorie").val(article.data.categorie);
				$("#nomArticle").val(article.data.nomArticle);
				$("#description").val(article.data.description);
				$("#prix").val(article.data.prix);
				$("#pochette").val(article.data.pochette);
				$("#quantite").val(article.data.quantite);
				$("#dateCreation").val(article.data.dateCreation);


				//$('#editArticleModal').modal('Show');


			//} 		   

			
		}
		});
	});
});

/**************************************   
function loadArticle(articleId) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var article = JSON.parse(this.responseText);
		//	document.getElementById("id").value = article.id;
		//id,categorie,nomArticle,description,quantite,prix,dateCreation
			document.getElementById("categorie").value = article.categorie;
			document.getElementById("nomArticle").value = article.nomArticle;
			document.getElementById("description").value = article.description;
            document.getElementById("quantite").value = article.quantite;
			document.getElementById("imge").value = article.image;
			document.getElementById("prix").value = article.prix;
			document.getElementById("dateCreation").value = article.dateCreation;

		}
	};
	xhr.open("GET", "AdminController.php?id=" + articleId, true);
	xhr.send();
}

document.getElementById("modifier_button").addEventListener("click", function() {
	var articleId = document.getElementById("id").value;
	loadArticle(articleId);
});


/***********************************nouvelle methode de modification*****************

// fonction pour afficher les articles

function showArticles() {
	$.ajax({
	  url: 'read.php',
	  type: 'GET',
	  success: function(response) {
		var articles = JSON.parse(response);
		var rows = '';
  
		$.each(articles, function(index, article) {
		  rows += '<tr>';
		  rows += '<td>' + article.id + '</td>';
		  rows += '<td>' + article.categorie + '</td>';
		  rows += '<td>' + article.nomArticle + '</td>';
		  rows += '<td>' + article.description + '</td>';
		  rows += '<td>' + article.prix + '</td>';
		  rows += '<td>' + article.quantite + '</td>';
		  rows += '<td><img src="' + article.image + '" class="img-thumbnail" width="100" height="100"></td>';
		  rows += '<td>' + article.date_creation + '</td>';
		  rows += '<td>';
		  rows += '<button type="button" class="btn btn-success btn-sm mr-2" onclick="editArticle(' + article.id + ')">Modifier</button>';
		  rows += '<button type="button" class="btn btn-danger btn-sm" onclick="deleteArticle(' + article.id + ')">Supprimer</button>';
		  rows += '</td>';
		  rows += '</tr>';
		});
  
		$('#articles-table').html(rows);
	  }
	});
  }
  
  // fonction pour ajouter un nouvel article
  function addArticle() {
	var categorie = $('#categorie').val();
	var nomArticle = $('#nomArticle').val();
	var description = $('#description').val();
	var prix = $('#prix').val();
	var quantite = $('#quantite').val();
	var image = $('#image').val();
	var date_creation = $('#date_creation').val();
  
	$.ajax({
	  url: 'create.php',
	  type: 'POST',
	  data: {
		categorie: categorie,
		nomArticle: nomArticle,
		description: description,
		prix: prix,
		quantite: quantite,
		image: image,
		date_creation: date_creation
	  },
	  success: function(response) {
		$('#article-form')[0].reset();
		$('#article-form').hide();
		showArticles();
	  }
	});
  }
  
  // fonction pour modifier un article existant
  function editArticle(id) {
	$.ajax({
	  url: 'read_one.php',
	  type: 'GET',
	  data: { id: id },
	  success: function(response) {
		var article = JSON.parse(response);
		$('#id').val(article.id);
		$('#categorie').val(article.categorie);
		$('#nomArticle').val(article.nomArticle);
		$('#description').val(article.description);
		$('#prix').val(article.prix);
		$('#quantite').val(article.quantite);
		$('#image').val(article.image);
		$('#date_creation').val(article.date_creation);
		$('#save-btn').html('Modifier');
		$('#save-btn').attr('onclick', 'updateArticle()');
		$('#article-form').show();
	  }
	});
  }
  
  // fonction pour mettre à jour un article
  function updateArticle() {
	var id = $('#id').val();
	var categorie = $('#categorie').val();
	var nomArticle = $('#nomArticle').val();
	var description = $('#description').val();
	var prix = $('#prix').val();
	var quantite = $('#quantite').val();
	var image = $('#image').val();
	var date_creation = $('#date_creation').val();
  
	$.ajax({
	  url: 'update.php',
	  type: 'POST',
	  data: {
		id: id,
		categorie: categorie,
		nomArticle: nomArticle,
		description: description,
		prix: prix,
		quantite: quantite,
		image: image,
		date_creation: date_creation
	  },
	  success: function(response) {
		$('#article-form')[0].reset();
		$('#article-form').hide();
		$('#save-btn').html('Enregistrer');
		$('#save-btn').attr('onclick', 'addArticle()');
		showArticles();
	  }
	});
  }
  
  // fonction pour supprimer un article
  function deleteArticle(id) {
	if (confirm('Êtes-vous sûr de vouloir supprimer cet article')) {
		$.ajax({
		url: 'delete.php',
		type: 'POST',
		data: { id: id },
		success: function(response) {
		showArticles();
		}
		});
		}
		}
		
		// afficher la liste des articles au chargement de la page
		$(document).ready(function() {
		showArticles();
		});
	
	*/