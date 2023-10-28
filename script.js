


//Data set///  

const welcome= ['Welcome new Player,Press the Go Button to get started'];

const textElement = document.getElementById('text');
const choiceButtonsElement = document.getElementById('choice-buttons'); 




const textNodes = [
    {
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
            nextText:5,
        },{
            text:'Ignore',
            nextText:6,
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
    showTextNode(1);


}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (choiceButtonsElement.firstChild){
        choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
    }
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


  

 



///Building//










