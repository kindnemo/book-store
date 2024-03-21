


// WORKING OF ALL THE BUTTONS IN THE PAGE

const addBookBtn = document.querySelector("#add-book-button");
const bookForm = document.querySelector("form");
const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton")
const bookFormDiv = document.querySelector("#form-div");

function showBookForm(){
    bookFormDiv.classList.remove("hidden");
    bookFormDiv.setAttribute("class", "shown");
}
function hideBookForm(){
    bookFormDiv.classList.remove("shown");
    bookFormDiv.setAttribute("class", "hidden");
}



addBookBtn.addEventListener("click", showBookForm);
submitButton.addEventListener("click", hideBookForm);
cancelButton.addEventListener("click", hideBookForm);