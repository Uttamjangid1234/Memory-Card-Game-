const gameBoard = document.getElementById('gameBoard');
const movesEl = document.getElementById('moves');
const timerEl = document.getElementById('timer');
const hintsEl = document.getElementById('hints');
const leaderboardBody = document.querySelector('#leaderboard tbody');
let cardsList = {
  fruits:['🍎','🍌','🍇','🍒','🍉','🍓','🥝','🍍','🍑','🥭','🍋','🍏','🥥','🍐','🍊','🥑'],
  animals:['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔'],
  flags:['🇺🇸','🇬🇧','🇨🇦','🇦🇺','🇮🇳','🇯🇵','🇨🇳','🇫🇷','🇩🇪','🇧🇷','🇪🇸','🇮🇹','🇰🇷','🇷🇺','🇲🇽','🇿🇦']
};
let cardValues=[], flippedCards=[], moves=0, timer=0, interval, hints=3, soundOn=true;

// Audio
const flipSound=document.getElementById('flipSound');
const matchSound=document.getElementById('matchSound');
const winSound=document.getElementById('winSound');

function startGame(){
  clearInterval(interval);
  timer=0; moves=0; flippedCards=[];
  movesEl.innerText=moves; timerEl.innerText=timer; hints=3; hintsEl.innerText=hints;

  let difficulty=parseInt(document.getElementById('difficulty').value);
  let theme=document.getElementById('theme').value;
  let mode=document.getElementById('mode').value;

  cardValues=[...cardsList[theme]].slice(0,(difficulty*difficulty)/2);
  cardValues=[...cardValues,...cardValues]; shuffle(cardValues);

  gameBoard.innerHTML='';
  gameBoard.style.gridTemplateColumns=`repeat(${difficulty},80px)`;
  cardValues.forEach((val,index)=>{
    const card=document.createElement('div');
    card.classList.add('card'); card.dataset.value=val; card.dataset.index=index; card.innerText='';
    card.addEventListener('click',flipCard);
    gameBoard.appendChild(card);
  });

  interval=setInterval(()=>{
    timer++;
    timerEl.innerText=timer;
    if(mode==='timed' && timer>=60){ clearInterval(interval); alert('⏰ Time Up!'); startGame(); }
  },1000);

  loadLeaderboard();
}

function shuffle(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [array[i],array[j]]=[array[j],array[i]];}}

function flipCard(){
  if(this.classList.contains('flipped') || flippedCards.length===2) return;
  this.classList.add('flipped'); this.innerText=this.dataset.value;
  if(soundOn) flipSound.play();
  flippedCards.push(this);
  if(flippedCards.length===2){ moves++; movesEl.innerText=moves; checkMatch(); }
}

function checkMatch(){
  const [c1,c2]=flippedCards;
  if(c1.dataset.value===c2.dataset.value){
    if(soundOn) matchSound.play(); flippedCards=[];
    if(document.querySelectorAll('.card.flipped').length===cardValues.length){ winGame(); }
  } else {
    setTimeout(()=>{ c1.classList.remove('flipped'); c2.classList.remove('flipped'); c1.innerText=''; c2.innerText=''; flippedCards=[]; },1000);
  }
}

function winGame(){
  if(soundOn) winSound.play();
  confetti(); // trigger confetti
  clearInterval(interval);
  setTimeout(()=>{
    let player=prompt(`🎉 You won! Moves:${moves}, Time:${timer}s\nEnter your name:`,'Player');
    if(player) saveScore(player);
    startGame();
  },300);
}

// Leaderboard
function saveScore(player){
  let scores=JSON.parse(localStorage.getItem('leaderboard'))||[];
  scores.push({player,moves,time:timer});
  scores.sort((a,b)=>a.moves-b.moves || a.time-b.time);
  if(scores.length>5) scores=scores.slice(0,5);
  localStorage.setItem('leaderboard',JSON.stringify(scores));
  loadLeaderboard();
}

function loadLeaderboard(){
  let scores=JSON.parse(localStorage.getItem('leaderboard'))||[];
  leaderboardBody.innerHTML='';
  scores.forEach(s=>{
    let tr=document.createElement('tr');
    tr.innerHTML=`<td>${s.player}</td><td>${s.moves}</td><td>${s.time}s</td>`;
    leaderboardBody.appendChild(tr);
  });
}

// Confet
