let postButton = document.getElementById("post-button");
let inputElement = document.getElementById("comment-box");
postButton.addEventListener("click", function(){
    console.log("toimii");
    var commentBoxValue = inputElement.value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
    inputElement.value = "";

 
});