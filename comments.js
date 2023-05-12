let postButton = document.getElementById("post-button");
let commentBox = document.getElementById("comment-box");
let nameBox = document.getElementById("name-box");

let noName = document.getElementById("no-name");
let noComment = document.getElementById("no-comment");
let noSwearName = document.getElementById("no-swear-name");
let noSwearComment = document.getElementById("no-swear-comment");

var profanities = ["helvetti", "jumalauta", "kyrpä", "paska", "perkele", "perse", "saatana", "vittu"]
var nameOK = true
var commentOK = true
function checkProfanity(word){
    return profanities.includes(word);
}

postButton.addEventListener("click", function(){
    console.log("toimii");
    var commentBoxValue = commentBox.value;
    var nameBoxValue = nameBox.value;

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
    if (!(nameBoxValue == "") && !(commentBoxValue == "") && commentOK && nameOK) {
        var listElement = document.createElement("li");
        
        var name = document.createElement("p");
        var text = document.createElement("p");
        
        name.innerHTML = nameBoxValue
        text.innerHTML = commentBoxValue

        listElement.appendChild(name)
        listElement.appendChild(text);
        document.getElementById("unordered").appendChild(listElement);
        
        commentBox.value = "";
        

        noName.style.display = "none";
        noComment.style.display = "none";
        noSwearName.style.display = "none";
        noSwearComment.style.display = "none";
    }

 
});