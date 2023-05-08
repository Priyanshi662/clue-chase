const form = document.querySelector('form');
const answerInput1 = document.querySelector('#answer1');
const answerInput2 = document.querySelector('#answer2');
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (answer1.value === 'moon' && answer2.value === 'deep space exploration') {
    swal("Good job!", "You gave the correct answer!", "success");
    setInterval(function(){ window.location.href = "Congrats.html"; }, 2000);
  } else {
    swal('Sorry, your answer is incorrect. Please try again.');
    setInterval(function(){ window.location.href = "quiz1.html"; }, 2000);
  }
});