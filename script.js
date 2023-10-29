


// //Data set///  



const textElement = document.getElementById('text');
const choiceButtonsElement = document.getElementById('choice-buttons'); 




 const textNodes = [ { 
    
    id:0,
    text:'Welcome new Player, How about some play testing?',
    choice:[
       {
            text: 'Yes',
            nextText:1,
        },
    ]
    
    
    
 }, {
         id:1,
         text:'You are walking through the forest when you come across a fork in the road. Do you go left or right?',
         choice:[
            {
                 text: 'Turn left',
                 nextText:2,
             },
             {
                 text: 'Turn Right',
                nextText:3,
            }
         ]

    },
    
     {
        id:2,
         text: 'You are exploring a cave when you come across a group of bats. Do you try to sneak past or fight them?',
        choice:[
             {
            text:'Fight them',
             nextText:15,
         },{
            text:'Sneak By',
            nextText:4,
        }]

     },{
        id:3,
        text: 'You walk into a clearing in the forest and see a little girl sitting on a rock. She has long, flowing hair and big, innocent eyes. She smiles at you as you approach.',
         choice:[
            {
            text:'Talk',
             nextText:7,
         },{
             text:'Fight',
             nextText:15,
        }]   
     },{
         id:4,
        text: 'As you sneak by the bats you find a mystic glow coming from the back of the cave. There are piles of rotted corpses and sword poking out of it.',
        choice:[
            {
            text:'Pick Up',
             setState:{sword:true},
            nextText:5,
        },{
            text:'Ignore',
             nextText:5,
         }]   
    
     },{
         id:5,
        text: 'The bats enraged , coming flying at you at full force, you quickly notice a crack in the wall that leads some where, and theres path with vines blocking the exit',
         choice:[
             {
            text:'Dive into the Crack',
            nextText:16,
        },{
             text:'Cut the vines',
             requiredState:(currentState)=>currentState.sword,setState:{sword: false, oddHilt: true },
            nextText:6,
        }]   
    },{
        id:6,
         text: 'As your rush through the vines swinging the sword. You make it out the cave, but sadly the blade itself broke. The hilt of the sword glows bright red emitting great power. Theres a merchant that tells you lore about the cursed sword, and is will to buy it off you',
        choice:[
            {
             text:'Keep ',
            nextText:16,
        },{
             text:'Sell',
            requiredState:(currentState)=>currentState.sword,setState:{oddHilt: false },
             nextText:7 ,
         }]  
     },{
         id:7,
        text: 'They all of sudden transform and with a quick flash, your head comes off well thats unfortunate',
        choice:[
             {
            text:'Again?',
            nextText:1,
        }]  
     },
     {id:16,
      text:'Bright flash happens Before you know it. Theres bright colors and gnomes dancing around you',
      choice:[{text:'There isnt one, time to wake up!',
               nextText:1,
            }]

     },
     
    
     {
        id:15,
        text: 'Your Dead , your is purpose is forgotten',
        choice:[{
            text:'Try Again',
            nextText:1,
         }],


 }];


 let state ={}

 function startGame(){
    state ={}
     showTextNode(0);


 }
///Searches for text in the data set, made it extremely straight  forward just in case i want to continue//
 function showTextNode(textNodeIndex) {
     const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
     while (choiceButtonsElement.firstChild){
         choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
     }
     ///For each method aka loop  and adding moving child.
     textNode.choice.forEach(choice =>{
         if(showChoice(choice)){
             const button = document.createElement('button');
             button.innerText = choice.text;
             button.classList.add('btn');
            button.addEventListener('click',()=>selectChoice(choice))
            choiceButtonsElement.appendChild(button)
       }
     })

 }

 function showChoice(choice){
     return choice.required == null || choice.requiredState(state);
 }

 function selectChoice(choice){
    const nextTextNodeId = choice.nextText;
    state = Object.assign(state,choice.setState);
     showTextNode(nextTextNodeId);



 }


 startGame();

///Forum Code//

  const form = document.querySelector('form'),
  nextBtn= form.querySelector('.nextBtn'),
  backBtn= form.querySelector('.backBtn'),
  allInput = form.querySelectorAll('.first input');

 nextBtn.addEventListener('click', ()=> {
     allInput.forEach(input =>{
         if(input.value != ''){
              form.classList.add('secActive');
         }else{
              form.classList.remove('secActive');
              
          
         }
     });
 });

backBtn.addEventListener('click',()=>form.classList.remove('secActive'));
  

 














