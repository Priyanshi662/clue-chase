const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', checkAnswers);

function checkAnswers(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  // Get all the selected answer values
  const answer1 = document.querySelector('input[name="question-1-answers"]:checked').value;
  const answer2 = document.querySelector('input[name="question-2-answers"]:checked').value;
  const answer3 = document.querySelector('input[name="question-3-answers"]:checked').value;
  const answer4 = document.querySelector('input[name="question-4-answers"]:checked').value;

  // Check if all questions have been answered
  if (!answer1 || !answer2 || !answer3 || !answer4) {
    swal('Please answer all questions');
    return;
  }

  // Check the answers and keep track of the score
  let score = 0;
  if (answer1 === 'C') {
    score++;
  }
  if (answer2 === 'A') {
    score++;
  }
  if (answer3 === 'C') {
    score++;
  }
  if (answer4 === 'B') {
    score++;
  }

  // Show the score to the user
  if(score==4)
  {  
    swal('Good job!',`You scored ${score} out of 4`, 'success');
    setInterval(function(){ window.location.href = "Congrats.html"; }, 2000);
    quizForm.reset();
  }
  else 
  {
    swal("Try Again!!",`Sorry, you scored ${score}. Please try again.`,"error");
    quizForm.reset();
    setInterval(function(){ window.location.href = "quiz4.html"; }, 2000);
  }
}
