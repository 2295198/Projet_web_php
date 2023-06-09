let verifierMdp = () =>{
    let etat = true;
    const passW = document.getElementById("passWord").value; 
    const passWC = document.getElementById("cpass").value; 
    if(passW == passWC){
        if(passW.match( /[0-9]/g) && 
            passW.match( /[A-Z]/g) && 
            passW.match(/[a-z]/g) && 
            passW.match( /[^a-zA-Z\d]/g) &&
            passW.length >= 8 && passW.length <= 10){
        etat = true;
        document.getElementById('setError').innerHTML = "Vos informations son correct";
        setInterval(() => {
            document.getElementById('setError').innerHTML = "";
        },5000);
        }else{
            etat = false;
        document.getElementById('setError').innerHTML = "votre mot de passe n est pas conforme ''";
        setInterval(() => {
            document.getElementById('setError').innerHTML = "";
        },5000);

        }
    }else {
        etat = false;
        document.getElementById('setError').innerHTML = "les Mots de passe que vous avez tappe ne sont pas égaux !";
        setInterval(() => {
            document.getElementById('setError').innerHTML = "";
        },5000);

    }
    return etat;
} 

      

let initialiser = (msg) =>{
	if(msg.length > 0){
		let textToast = document.getElementById("textToast");
		var toastElList = [].slice.call(document.querySelectorAll('.toast'))
		var toastList = toastElList.map(function (toastEl) {
			return new bootstrap.Toast(toastEl)
		})
		textToast.innerHTML = msg;
		toastList[0].show();
	}
}

// pour afficher l image au moment d enregistrement sur le formulaire 
var loadFile = function(event){
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};



// supprimer article modal
$(document).ready(function() {
    $('#confirm-delete').on('show.bs.modal', function(e) {
        var articleId = $(e.relatedTarget).data('article-id');
        $(this).find('.btn-ok').attr('href', 'roote.php?action=destroyArticle&id=' + articleId);
    });
});

// changer statut membre A
$(document).ready(function() {
    $('#myModalA').on('show.bs.modal', function(e) {
        var articleId = $(e.relatedTarget).data('article-id');
        $(this).find('.btn-ok').attr('href', 'roote.php?action=onStatut&id=' + articleId);
    });
});

// changer statut membre I
$(document).ready(function() {
    $('#myModalI').on('show.bs.modal', function(e) {
        var articleId = $(e.relatedTarget).data('article-id');
        $(this).find('.btn-ok').attr('href', 'roote.php?action=offStatut&id=' + articleId);
    });
});

/*
$(document).ready(function() {
    $('#editArticleModal').on('show.bs.modal', function(e) {
        var articleId = $(e.relatedTarget).data('article-id');
        $(this).find('.btn-ok').attr('href', 'roote.php?action=updateArticle&id=' + articleId);
    });
});*/



  // ajax pour remplire le formulaire et faire la modification d un article 
/*
  $(document).ready(function(){
    $('#editArticleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // bouton qui a déclenché l'événement
        var id = button.data('id'); // récupère l'attribut data-id du bouton
        var modal = $(this); alert(1)
        // envoyer une requête Ajax pour récupérer les données de l'article correspondant à l'id
        $.ajax({
            //url: 'roote.php?action=getArticle&id=' + id,
            url: 'serveur/DAO/AdminController\getArticleById',
            method: 'GET',
            dataType: 'json',
            data:['id',id],
            success: function(data){ 
                // remplir les champs du formulaire avec les données de l'article
                modal.find('#id').val(data.id);
                modal.find('#categorie').val(data.categorie);
                modal.find('#nomArticle').val(data.nomArticle);
                modal.find('#prix').val(data.prix);
                modal.find('#quantite').val(data.quantite);
                modal.find('#description').val(data.description);
                modal.find('#dateCreation').val(data.dateCreation);
                // afficher l'image de l'article dans un élément <img> du formulaire
                modal.find('#pochette').attr('src', data.image);
            },
            error: function(){
                alert('Une erreur est survenue lors de la récupération des données de l\'article');
            }
        });
    });
});
*/


// When the link is clicked, load the content via AJAX
function modification(idClick) {
       
    console.log(idClick);
  //  console.log($('a[id^="inputId"]').val());
    $.ajax({
      type: "POST",
      url: "../../article/DAO/resources/views/modifierArticl.php",
      data: {
        "id": idClick ,
            },
      success: function(result) {
        $("#formContent").empty();
        $("#formContent").html(result);
      }
    });
  };
  

  
  

  
  


















                
       // } 
 /*  
   </script> 
</head> 
<body> 
    Entrez le mot de passe: <input id="mdp" /> 
    <button onclick="verifierMdp()">Valider</button><br>
    <span id="setError"></span> 
</body> 
</html> 

/*

const form = document.getElementById('Contactform');
const email = document.getElementById('remail');
const password = document.getElementById('pass');
const password2 = document.getElementById('cpass');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
   // const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length <8 && passwordValue.length > 10 ) {
        setError(password, 'Mot de passe doit contenir min 8 et max 10 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};*/