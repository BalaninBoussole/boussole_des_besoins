let currentQuestion = 1;

function answerQuestion(response) {
    if (currentQuestion === 1) {
        if (response === 1) {
            document.getElementById('need1').style.backgroundColor = '#0f0';
            document.getElementById('question-text').innerText = 'Question 2: Avez-vous bien dormi?';
        } else if (response === 2) {
            document.getElementById('need2').style.backgroundColor = '#0f0';
            document.getElementById('question-text').innerText = 'Question 2: Avez-vous mangé équilibré?';
        }
        currentQuestion = 2;
    } else if (currentQuestion === 2) {
        if (response === 1) {
            document.getElementById('need3').style.backgroundColor = '#0f0';
            document.getElementById('question-text').innerText = 'Question 3: Avez-vous fait de l\'exercice?';
        } else if (response === 2) {
            document.getElementById('need4').style.backgroundColor = '#0f0';
            document.getElementById('question-text').innerText = 'Question 3: Avez-vous passé du temps avec des amis?';
        }
        currentQuestion = 3;
    } else {
        document.getElementById('question-text').innerText = 'Merci pour vos réponses!';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
