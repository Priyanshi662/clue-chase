history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});


let crsr=document.querySelector('body');
  console.log(crsr);
  window.addEventListener("mousedown",hammerdown); //handle mouse click
  function hammerdown() {
    crsr.classList.add("cursordown");
  }
  window.addEventListener("mouseup",msup); //handle hammer up
  function msup(){
    crsr.classList.remove("cursordown");
  }
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const timez=document.querySelector('.timer');
  let lastHole;
  let timeUp=false;
  let score=0;
  var gametime=0;
  function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
  
  }
  function randomHole(holes){
    //get a list of holes
    const idx=Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole==lastHole)
    {
      return randomHole(holes);
    }
    lastHole=hole;//stores the last hole that popped up to prevent same one to pop
    return hole;
  }
  
  function peep(){
    const timer=randomTime(200,1000);
    const hole=randomHole(holes);
    hole.classList.add('up'); 
    setTimeout(()=>{
      hole.classList.remove('up');//removes class up in css
      if(!timeUp)
      peep();
    },timer); 
    timeUp=false;
  }

  function startgame(){
    scoreBoard.textContent=0;
    timeUp=false;
    score=0;
    peep();
    async function timer(){
        var time =0;
        while(time<20000){
            await new Promise(r => setTimeout(r, 500));
            time+=500;
            timez.textContent=time/500;
            if(score>=10)
            {
                timeUp=true;
                swal("You won!", "Proceed to the next quiz!", "success");
                setInterval(function(){ window.location.href = "quiz3.html"; }, 500);
            }
        }
        if(score>=10)
    {
        swal("You won!", "Proceed to the next quiz!", "success");
        setInterval(function(){ window.location.href = "quiz3.html"; }, 2000);
    }
    else
        swal("You lost!", "Try again!", "error");
        setInterval(function(){ window.location.href = "quiz2.html"; }, 2000);
    }
    timer();
    gametime=setTimeout(()=>timeUp=true,20000);
    
  }

  function bonk(e){
    if(!e.isTrusted)return ; 
    score++;
    this.classList.remove('up');
    scoreBoard.textContent=score; //update score on scoreboard
  }

  moles.forEach(mole=>mole.addEventListener('click',bonk));

  