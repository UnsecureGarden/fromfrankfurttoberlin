// Fonction pour ajouter un commentaire
function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("comments-list");
    
    // Vérifie si le champ de commentaire est vide
    if (commentInput.value.trim() === "") return;

    // Crée un nouvel élément de commentaire
    const commentItem = document.createElement("li");
    commentItem.classList.add("comment-item");
    commentItem.textContent = commentInput.value;

    // Crée un bouton de suppression pour le commentaire
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        commentsList.removeChild(commentItem);
    };

    // Ajoute le bouton de suppression au commentaire
    commentItem.appendChild(deleteButton);

    // Ajoute le commentaire à la liste des commentaires
    commentsList
