


//Data set///  

const welcome= ['Welcome new Player,Press the Go Button to get started'];

const madness=[
    "You are walking through the forest when you come across a fork in the road. Do you go left or right?",
    "You are standing on a cliff overlooking a vast ocean. Do you jump or climb down?",
    "You are exploring a cave when you come across a group of bats. Do you try to sneak past or fight them?",
    "You are walking through a desert when you come across a mirage. Do you follow the mirage or continue on your way?",
    "You are lost in the jungle when you come across a mysterious temple. Do you go inside or keep walking?",
    "You are walking through a swamp when you come across a talking frog. Do you ask it for help or ignore it?",
    "You are climbing a mountain when you come across a yeti. Do you try to befriend it or run away?",
    "You are traveling through space when you come across a black hole. Do you fly into the black hole or avoid it?",
    "You are visiting a different planet when you come across a group of aliens. Do you try to communicate with them or hide?",
    "You are exploring a time machine when you accidentally travel back in time. Do you try to change the past or go back to your own time?",
    "You are walking through a city when you come across a group of superheroes. Do you join them or go your own way?",
    "You have reached the end of the adventure!"
  ];
  const playerMoves  = ['Attack','Defend','Run','Quit'];





///Building//



const divIntro = document.getElementsByClassName('intro-text');
const h2Intro = document.createElement('h2');



function progressButton(){
    const introText = document.querySelector('.intro-text');
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    const newProgressButton = document.querySelector('#Continue');
     
    if(introPosition !== newProgressButton){
        introText.style.display = 'block';
        introText.classList.add('intro-appear');
    }
}


window.addEventListener('click',progressButton);








//Container 2 Aka Player board


const divContainer2 = document.querySelector('.container2');

const userBoardEl = document.createElement('div');

userBoardEl.classList.add('btn-grid');

playerMoves.forEach(function (element) {
    const button = document.createElement('button');
    button.textContent = element;
    button.classList.add('btn');
    userBoardEl.appendChild(button);
  });

  divContainer2.append(userBoardEl);


