
let images = [
    {
        name: "A wild bear with his son",
        src: "../images/bear.png"
    },
    {
        name: "A Bird Flying",
        src: "../images/birds.png"
    },
    {
        name: "A Cheetah jumping",
        src: "../images/cheetah.png"
    }
];

let count = 0

var audio = document.getElementById('bgaudio');
audio.volume = 0.03;

let main = document.querySelector('#searchField');
let foundItems = [];

let user = prompt("Please enter your Name");
let userHtml = document.querySelector('.user');

if(user != null) {
    userHtml.innerHTML = `${user} | Your Score is: ${count}/${images.length}` ;
} 

for(let i = 0; i < images.length; i++){
    images[i].id = i;

    let img = `<img id="a${i}" src="${images[i].src}" alt="${images[i].name}" 
                    onclick="onClick(${i})" 
                    style="bottom: ${getRandomInt(0, 30) + "rem"};
                            left: ${getRandomInt(0, 60) + "rem"};
                            width: ${getRandomInt(10, 15) + "%"};
                            height: auto;
                            opacity: ${getRandomInt(3, 11) / 10}"/>`;

    main.insertAdjacentHTML('beforeend', img);


}


/* ------------------- F U N C T I O N S ---------------------------*/

function getRandomInt(a, b) {
    let first, 
        last;

    if (b < a) { first = b; last = a}
    else {first = a; last = b}
    
    //Calculate the random number in the range.
    return Math.floor(Math.random() * last - 1) + first;
}

//For now I am using 2 functions to pass the image cause I couldnt inject the html directly.
function onClick(i){
    addToFoundItems(images[i]);

    //animal Dissapear
    animalDissapear(images[i].id);

    //Increment Score
    displayInFooter(foundItems);

    if (foundItems.length === images.length) {
        //setTimeout to display the alert after the img is set the alert.
        setTimeout(function() {alert('You Won') }, 100);

    }
    
}

//This function changes the opacity of the image to make the effect that the animal dissapear when founded.
function animalDissapear(i){
    let id_selected = document.getElementById(`a${i}`);
    console.log(id_selected);
    id_selected.style.opacity = 0;
}

function addToFoundItems(image){

    if(!foundItems.includes(image)) {

        foundItems.push(image);
        getScore(count);

    }
}

function displayInFooter(foundItems){
    let foundItemsSection = document.querySelector('#foundItems');
    foundItemsSection.innerHTML = '';
    console.log(foundItemsSection);
    //display the array.
    console.log(foundItems);

    for(let i= 0; i < foundItems.length; i++){
        let img = `<img src="${foundItems[i].src}" alt="${foundItems[i].name}" 
                        style="width: 100px; height: 100px; margin-left: ${i *150}px"
        />`
        foundItemsSection.insertAdjacentHTML('beforeend', img);
    }

    //Adding winning logic
}

function getScore(){   
    count++;
    userHtml.innerHTML = `${user} | Your Score is: ${count}/${images.length}`;
    return count;
}