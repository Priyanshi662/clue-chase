const form = document.querySelector('form');
const ansinput1 = document.querySelector('#ans1');
const ansinput2 = document.querySelector('#ans2');
const ansinput3 = document.querySelector('#ans3');
const ansinput4 = document.querySelector('#ans4');
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (ansinput1.value ==='Slappy' && ansinput2.value ==='Lindy' && ansinput3.value ==='fireplace poker' && ansinput4.value ==='Mr.Wood') {
    swal("Good job!", "You gave the correct answer!", "success");
    setInterval(function(){ window.location.href = "quiz4.html"; }, 2000);
  } else {
    swal('Sorry, your answer is incorrect. Please try again.');
    setInterval(function(){ window.location.href = "quiz3.html"; }, 2000);
  }
});
