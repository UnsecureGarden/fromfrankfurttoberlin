{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const commentsList = document.getElementById("comments-list");\
const commentInput = document.getElementById("comment-input");\
\
// Charger les commentaires depuis le stockage local\
function loadComments() \{\
    const comments = JSON.parse(localStorage.getItem("comments")) || [];\
    commentsList.innerHTML = '';\
    comments.forEach((comment, index) => \{\
        const commentItem = document.createElement("li");\
        commentItem.classList.add("comment-item");\
        commentItem.innerHTML = `$\{comment\} <button class="delete-button" onclick="deleteComment($\{index\})">Delete</button>`;\
        commentsList.appendChild(commentItem);\
    \});\
\}\
\
// Ajouter un commentaire\
function addComment() \{\
    const comment = commentInput.value.trim();\
    if (comment) \{\
        const comments = JSON.parse(localStorage.getItem("comments")) || [];\
        comments.push(comment);\
        localStorage.setItem("comments", JSON.stringify(comments));\
        commentInput.value = "";\
        loadComments();\
    \}\
\}\
\
// Supprimer un commentaire\
function deleteComment(index) \{\
    const comments = JSON.parse(localStorage.getItem("comments")) || [];\
    comments.splice(index, 1);\
    localStorage.setItem("comments", JSON.stringify(comments));\
    loadComments();\
\}\
\
// Charger les commentaires au chargement de la page\
window.onload = loadComments;\
}