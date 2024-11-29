// Liste des questions
const questions = [
  "Que ressens-tu, maintenant que tu es là ?",
  "As-tu perçu ce qui t’a amené ici ?",
  "Qu’espères-tu découvrir ou laisser émerger dans cet espace ?",
  "De quoi peux-tu te délester pour mieux être ici ?",
  "Quel murmure de toi-même souhaites-tu entendre ici ?",
  "Qu’as-tu apporté en toi qui désire être vu, entendu ou reconnu ?",
  "Y a-t-il une vérité en toi que tu n’as jamais osé regarder pleinement ?",
  "Quel est ton besoin le plus profond, celui qui n’a pas encore trouvé ses mots ?",
  "Si tout était possible ici, que choisirais-tu d’offrir ou de recevoir ?",
  "Qu’est-ce qui, dans ce silence, t’appelle à t’unifier davantage ?",
  "Que ressens-tu lorsque tu te sais relié(e) à tout ce qui est ici ?",
  "Si tu pouvais tendre la main à une autre présence dans ce champ, que ferais-tu ?",
  "Quelle part de toi désire contribuer à la vie collective ?",
  "Quelles vibrations du champ sens-tu résonner le plus fort en toi ?",
  "Si ce champ te parlait à travers un autre être, que te dirait-il ?",
  "Peux-tu sentir l’harmonie qui existe déjà ici, même dans l’imperfection ?",
  "En quoi ce moment reflète-t-il l’essence même de ce que tu cherches ?",
  "Qu’as-tu appris ici que tu pourrais porter avec toi dans le monde extérieur ?",
  "Si ce champ était une part de toi-même, quelle serait sa voix ?",
  "Dans cet espace, peux-tu ressentir ce qui est au-delà des mots ?",
  "Quelles relations invisibles te soutiennent en ce moment ?",
  "Comment te sens-tu relié(e) à ce qui t’entoure ici et maintenant ?",
  "Quel sens donnes-tu à ta place dans cet espace ?",
  "Si tu pouvais dialoguer avec ce lieu, quelle question lui poserais-tu ?",
  "Quelle trace désires-tu laisser ici, même si elle est éphémère ?",
  "Quel serait un acte de réciprocité envers ce champ et ses énergies ?",
  "Quel espace, énergie et conscience ton corps et toi peuvent être pour goûter l'espace infini que tu es ?",
  "Qu’est-ce qui pourrait émerger si tu te permettais d’exister sans jugement ici et maintenant ?",
  "Quelle infinité de possibilités n’as-tu pas encore perçue ?",
  "Comment peux-tu vibrer en harmonie avec ce champ ?",
  "Quelles limitations serais-tu prêt(e) à libérer pour embrasser l'infini de ton être ?"
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
