
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

let main = document.querySelector('#searchField');
let foundItems = [];

let user = prompt("Please enter your Name");
let userHtml = document.querySelector('.user');

console.log(user);
if(user != null) {
    userHtml.innerHTML = `${user}`;
    console.log(getScore(count));
} 

for(let i = 0; i < images.length; i++){
    images.id = i;

    let img = `<img src="${images[i].src}" alt="${images[i].name}" 
                    onclick="onClick(${i})"
                    id=${i} 
                    style="bottom: ${getRandomInt(0, 30) + "rem"};
                            left: ${getRandomInt(0, 60) + "rem"};"/>`;

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
    //Increment Score
    displayInFooter(foundItems);
    if (foundItems.length === images.length) {
        //setTimeout to display the alert after the img is set the alert.
        setTimeout(function() {alert('You Won') }, 100);
    }

    
}

function addToFoundItems(image){
    console.log('im here');
    console.log(foundItems.includes(image.id))
    if(!foundItems.includes(image)) {

        foundItems.push(image);
        getScore(count);

    }
    console.log(foundItems)
}

function displayInFooter(foundItems){
    let foundItemsSection = document.querySelector('#foundItems');
    foundItemsSection.innerHTML = '';
    console.log(foundItemsSection);
    //display the array.
    console.log(foundItems);

    for(let i= 0; i < foundItems.length; i++){
        let img = `<img src="${foundItems[i].src}" alt="${foundItems[i].name}" 
                        style="width: 100px; height: 100px; margin-left: ${i *100}px"
        />`
        foundItemsSection.insertAdjacentHTML('beforeend', img);
    }

    //Adding winning logic
}

function getScore(){   
    console.log('this si the score ' + count);
    
    userHtml.innerHTML = `${user} Your Score is: ${count}/${images.length}`;
    return count++;
}