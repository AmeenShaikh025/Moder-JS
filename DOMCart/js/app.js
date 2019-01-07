// video - 4
// let heading = document.getElementById('heading');

// let heading = document.querySelector('#heading');


// heading.style.backgroundColor = '#333';
// heading.style.color = '#ffffff';
// heading.style.padding = '20px';

// heading.textContent = 'The best course';

// heading.innerText = 'New course';


// ***********************************************//
// video-5


// const learningHeading = document.querySelector('#learn');

// const tagline = document.querySelector('.tagline');
// // const newText = tagline.textContent.replace('$15', '$12');

// // tagline.textContent = newText;


// let card = document.querySelector('.card');

// let heading2 = document.querySelector('h2');

// // Not your selector with css syntax

// let image = document.querySelector('.card img');

// //QuerySelector support nth- chid,etc

// let link;

// // link = document.querySelector('#primary a');
// link = document.querySelector('#primary a:first-child');
// link = document.querySelector('#primary a:last-child');
// link = document.querySelector('#primary a:nth-child(2)');



// console.log(link);


//Video - 6

// const links = document.getElementsByClassName('link');

// links[0].style.color = 'red';
// // links[0].textContent = 'red';

// console.log(links[0]);


// const links2 = document.querySelector('#primary').getElementsByClassName('link');
// const links3 = document.getElementById('primary').getElementsByClassName('link');

// console.log(links2);
// console.log(links3);


// //get element by tag name


// const images = document.getElementsByTagName('img');
// console.log(images);

// //similar to below

// console.log(document.images);

// console.log(images[0].src);

// // convert html collection to an array

// imageArray = Array.from(images);

// imageArray.forEach(function(image) {
//     console.log(image);
// });

// console.log(imageArray);



// Video - 7


const card = document.querySelector('.card');
console.log(card);

const card2 = document.querySelectorAll('.card');
console.log(card2);

//Nodelist is similar to array

const card3 = document.querySelectorAll('.card h4');
console.log(card3);

const card4 = document.querySelectorAll('.card h4');
console.log(card4[0].textContent);



