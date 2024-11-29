// Liste des questions
const questions = [
  "Que ressens-tu, maintenant que tu es là ?",
  "As-tu perçu ce qui t’a amené ici ?",
  "Qu’espères-tu découvrir ou laisser émerger dans cet espace ?",
  "De quoi peux-tu te délester pour mieux être ici ?",
  "Quel murmure de toi-même souhaites-tu entendre ici ?",
  "Qu’as-tu apporté en toi qui désire être vu, entendu ou reconnu ?",
  "Si tout était possible ici, que choisirais-tu d’offrir ou de recevoir ?",
  "Qu’est-ce qui, dans ce silence, t’appelle à t’unifier davantage ?",
  "Comment puis-je me rendre disponible pour une vraie rencontre ?",
  "Si tu regardais ce moment comme une opportunité, que choisirais-tu ?",
];

// Fonction pour choisir une question aléatoire
function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Gestionnaire d'événement pour le clic sur le symbole
document.getElementById("symbol").addEventListener("click", () => {
  const questionText = document.getElementById("question-text");
  const questionBox = document.getElementById("question-box");
  questionText.textContent = getRandomQuestion();
  questionBox.classList.add("show");
});
