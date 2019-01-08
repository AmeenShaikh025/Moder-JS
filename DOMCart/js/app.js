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

// ***********************************************//
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


// ***********************************************//
// Video - 7


// const card = document.querySelector('.card');
// console.log(card);

// const card2 = document.querySelectorAll('.card');
// console.log(card2);

// //Nodelist is similar to array

// const card3 = document.querySelectorAll('.card h4');
// console.log(card3);

// const card4 = document.querySelectorAll('.card h4');
// console.log(card4[0].textContent);


// // // convert html collection or nodeList to an array
// const coursesArray = Array.from(card4);

// coursesArray.forEach(function(courses){
// 	console.log(courses.textContent);
// });


// //select odd links

// const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

// oddLinks.forEach(function(odd) {
// 	odd.style.backgroundColor = 'red';
// 	odd.style.color = 'white';
// });


// //select even links
// const eventLinks = document.querySelectorAll('#primary a:nth-child(even)');

// eventLinks.forEach(function(even) {
// 	even.style.backgroundColor = 'blue';
// 	even.style.color = 'white';
// });


// //change all the add to cart buttons

// const addCartBtns = document.querySelectorAll('.add-to-cart');


// addCartBtns.forEach(function(btn) {
// 	btn.textContent = 'Something new';
// })

// console.log(addCartBtns);



// ***********************************************//
//Video - 8

//Traversing the dom


// const navigation = document.querySelector('#primary');

// console.log(navigation);

// let element;

// //To print the nodeList along with spaces in the code (video -8)
// //Not recomendded
// element = navigation.childNodes;


// //It will print only five different elements
// element = navigation.children;
// element2 = navigation.children[0].nodeName;
// element3 = navigation.children[0].nodeType;

// //1-Element
// //2-Attribute
// //3-Text Nodes
// //8-comments
// //9-document
// //10-doctype

// console.log(element);
// console.log(element2,element3);

// element4 = navigation.children[0].textContent = 'New Text';
// console.log(element4);


// element5 = navigation.children[4].children;
// console.log(element5);


// ***********************************************//
//Video - 9

/*const coursesList = document.querySelector('#courses-list');

let element;

element = coursesList.children[1].children[0].children[0].children[1];

element2 = coursesList.children[1].children[0].children[0].children[1].lastChild;//returns a text(which is a whitespace)

element3 = coursesList.children[1].children[0].children[0].children[1].lastElementChild;//print last html element in it 


element4 = coursesList.children[1].children[0].children[0].children[1].firstElementChild;

element5 = coursesList.children[1].children[0].children[0].children[1].childElementCount;

console.log(element);
console.log(element2);
console.log(element3);
console.log(element4);
console.log(element5);*/


// ***********************************************//
//Video - 10

//Tranversing from children to parent

// const cartBtn = document.querySelector('.add-to-cart');

// let element;

// element = cartBtn;
// element = cartBtn.parentNode;
// //OR

// element = cartBtn.parentElement.parentElement; //use this instead

// element = cartBtn.parentElement.parentElement.children[0];


// //sibling

// element = cartBtn.parentNode;

// element = cartBtn.previousSibling;//will display white space
// element = cartBtn.previousElementSibling.previousElementSibling;//it will ignore white-space, and show valid html tags.


// // console.dir(element);
// console.log(element);
// console.log(cartBtn.parentElement);


// // ***********************************************//
// //Video - 11


// //Course name
// const courseName = cartBtn.parentElement.querySelector('h4');

// //Next element sibling

// element = courseName.nextElementSibling;
// console.log(element);
// console.log(courseName);


// ***********************************************//
//Video - 12

//Create element with JS (****IMPORTANT TOPIC****)


// const newLink = document.createElement('a');

// //add class
// newLink.className = 'links';

// //add href
// newLink.href = '#';

// //OR

// //newLink.setAttribute('href', '#');//outdated

// //add text
// // newLink.textContent = "Contact"

// newLink.appendChild( document.createTextNode('New Link'));


// //Add the element to the HTML

// document.querySelector('#primary').appendChild(newLink);

// console.log(newLink);



// ***********************************************//
//Video - 13

// Replace an element with js

/*const newHeading = document.createElement('h2');

//add an id
newHeading.id = 'heading';

//add a class
//newHeading.className = 'heading';
//OR
newHeading.classList.add('heading');

//add the new text
newHeading.appendChild( document.createTextNode('The Best Courses'));

//Select all headings
const oldHeading = document.querySelector('#heading');

//got to Parent
const coursesList = document.querySelector('#courses-list');

//Then, replace!
coursesList.replaceChild(newHeading, oldHeading);


console.log(newHeading);*/



// ***********************************************//
//Video - 14

//Remove elements with JS

/*const links = document.querySelectorAll('.link');

//Remove element by itself
links[0].remove();

const cards = document.querySelectorAll('.card');
cards[11].remove();

console.log(links);
console.log(cards);


//Remove by children

const navigation = document.querySelector('#primary');

const linkz = document.querySelectorAll('#primary .link');

navigation.removeChild(links[4]);

console.log(navigation);
console.log(linkz);*/




// ***********************************************//
//Video - 15


//Classes, Id_s and other attributes

/*const link = document.querySelector('.link');
let element;

element = link;

//read the class
element = link.className;

//REad the class (DOM Token List)
element = link.classList;

//Access a specific class with class list
element = link.classList[0];

//add a new class
link.classList.add('new-class');*/

// console.log(element);



// ***********************************************//
//Video - 16

//Part -2
//remove the class
/*link.classList.remove('link');


//IDs
link.id = 'new-id';//it will remove the id value

//Remove the ID
link.id = '';
//OR
link.removeAttribute('id');//it will remove everything

//Attribute functions
element = link.getAttribute('href');
element = link.getAttribute('class');
element = link.setAttribute('href', 'http://facebook.com');
element = link.setAttribute('target', '_blank');

//IN HTML5 WE CAN CREATE CUSTOM ATTRIBUTES
element = link.setAttribute('data-link', '10');
element = link.hasAttribute('data-link');
element = link.removeAttribute('data-link');

console.log(element);*/
