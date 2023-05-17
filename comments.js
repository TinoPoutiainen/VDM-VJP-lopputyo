// elementit
let postButton = document.getElementById("post-button");
let commentBox = document.getElementById("comment-box");
let nameBox = document.getElementById("name-box");

let noName = document.getElementById("no-name");
let noComment = document.getElementById("no-comment");
let noSwearName = document.getElementById("no-swear-name");
let noSwearComment = document.getElementById("no-swear-comment");

// lista kiellettyjä sanoja
var profanities = ["helvetti", "jumalauta", "kyrpä", "paska", "perkele", "perse", "saatana", "vittu"]

var nameOK = true
var commentOK = true
// apufunktio, joka varmistaa sana olevan sallittu
function checkProfanity(word){
    return profanities.includes(word);
}

// lähetä-napin toiminnallisuus:
postButton.addEventListener("click", function(){
    
    var commentBoxValue = commentBox.value;
    var nameBoxValue = nameBox.value;
    // if-else rakenteella katsotaan onko input kenttä tyhjä, täytetty, vai täytetty kielletyllä sanalla, ja
    // muokataan sivun elementtien näkyvyyttä tuloksen perusteella
    if (nameBoxValue == "") {
        noName.style.display = "inline";
        noSwearName.style.display = "none";
    }
    else{
        if ((nameBoxValue.split(" ").some(checkProfanity))){
            noSwearName.style.display = "inline";
            noName.style.display = "none";
            nameOK = false
        }
        else{
            noName.style.display = "none";
            noSwearName.style.display = "none";
            nameOK = true
        }
    }
    if (commentBoxValue == "") {
        noComment.style.display = "inline";
        noSwearComment.style.display = "none";
    }
    else{
        if ((commentBoxValue.split(" ").some(checkProfanity))){
            noSwearComment.style.display = "inline";
            noComment.style.display = "none";
            commentOK = false
        }
        else{
            noComment.style.display = "none";
            noSwearComment.style.display = "none";
            commentOK = true
        }
    }
    // jos kenttä on täytetty sallituilla sanoilla, luodaan uusi kommentti listaelementtinä
    if (!(nameBoxValue == "") && !(commentBoxValue == "") && commentOK && nameOK) {
        var listElement = document.createElement("li");
        
        var name = document.createElement("p");
        var text = document.createElement("p");
        var removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");

        name.innerHTML = nameBoxValue
        text.innerHTML = commentBoxValue
        removeButton.textContent = "Poista"

        listElement.appendChild(name)
        listElement.appendChild(text);
        listElement.appendChild(removeButton);
        document.getElementById("unordered").appendChild(listElement);
        //tyhjennetään vain kommentti-inputin sisältö, nimimerkki jää talteen
        commentBox.value = "";
        

        noName.style.display = "none";
        noComment.style.display = "none";
        noSwearName.style.display = "none";
        noSwearComment.style.display = "none";
    }

 
});


// kommentin poiston toiminnallisuus
let list = document.getElementById("unordered");

list.addEventListener("click", function (event) {
    // tarkistetaan, onko klikattu poista-nappia
    if (event.target.classList.contains("remove-button")) {
      // poistetaan löydetyn napin parent-elementti
      const commentItem = event.target.parentNode;
      commentItem.remove();
    }})