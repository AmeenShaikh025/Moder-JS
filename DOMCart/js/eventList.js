//Event Listeners

//Video -1
// 1st Way
/*document.querySelector('#clear-cart').addEventListener('click', function() {
	console.log('CLICKED');
});

//OR

//2nd Way
const clearCart = document.querySelector('#clear-cart');

clearCart.addEventListener('click', function() {
	console.log('CLICKED');
});

//OR

//create a function(clear way)

//3rd Way
clearCart.addEventListener('click', clearBtnFunction);

function clearBtnFunction() {
	console.log('CLICKED');
}*/


/********************************************************************/
//Video -2

/*//create a function(clear way)

//3rd Way

const clearCart = document.querySelector('#clear-cart');

clearCart.addEventListener('click', clearBtnFunction);

function clearBtnFunction(e) {
	//target


	let element;
	element = e;


	//read the target

	element = e.target;
	element = e.target.id;
	element = e.target.className;
	element = e.target.innerText;
	element = e.target.innerText = 2 + 2;
	element = e.target;

	console.log(element);
	console.log(e);
}*/


/********************************************************************/
//Video -3


//Mouse Events part-1

//create variables

/*const heading = document.querySelector('#heading');
const links = document.querySelector('nav');
const clearCartBtn = document.querySelector('#clear-cart');

//click mouse events
/*clearCartBtn.addEventListener('click', printEvent);*/

//double click
// clearCartBtn.addEventListener('dblclick', printEvent);



/********************************************************************/
//Video -4

//Mouse events part-2

//Mouse enter
// clearCartBtn.addEventListener('mouseenter', printEvent);

//Mouse Leave
// clearCartBtn.addEventListener('mouseleave', printEvent);

//Mouse over
// clearCartBtn.addEventListener('mouseover', printEvent);

//Mouse out
// clearCartBtn.addEventListener('mouseout', printEvent);

//Mouse up
// clearCartBtn.addEventListener('mouseup', printEvent);

//Mouse down
// clearCartBtn.addEventListener('mousedown', printEvent);

//Mouse Move
// heading.addEventListener('mousemove', printEvent);



// function printEvent(e) {
// 	console.log(e);
// 	console.log(`THE EVENT IS: ${e.type}`);
// }*/


/********************************************************************/
//Video -5

//Input & Form Events

const searchForm = document.querySelector('#search'),
	  searchInput = document.querySelector('#search-course');

/*console.log(searchForm);
console.log(searchInput);*/


//Events for <form>
// searchForm.addEventListener('submit', printEvent);


/********************************************************************/
//Video -6


//Input Events
// searchInput.addEventListener('keydown', printEvent);
// searchInput.addEventListener('keyup', printEvent);
// searchInput.addEventListener('keypress', printEvent);
// searchInput.addEventListener('focus', printEvent);

//useful for validating form
// searchInput.addEventListener('blur', printEvent);

// searchInput.addEventListener('cut', printEvent);

// searchInput.addEventListener('copy', printEvent);


// searchInput.addEventListener('paste', printEvent);


//This eventlistner is going to listen to all the events copy,cut,paste
// searchInput.addEventListener('input', printEvent);

// function printEvent(e) {
// 	// e.preventDefault();//To prevent the default behaviour of the form from going to action="" page on submit.
	
// 	//print the value from the input
// 	console.log(searchInput.value);
// 	//e.preventDefault() -> is used when we have to do something with the value before submitting or any input/form events.

// 	console.log(`Type ${e.type}`);

// 	//using blur
// 	/*if(searchInput.value.length === 0) {
// 		alert('Type Something please');
// 	}*/
// }


/********************************************************************/
//Video -7

//Event Bubbling

//variables
/*const card = document.querySelector('.card'),
	  infocards = document.querySelector('.info-card'),
	  addCartBtn = document.querySelector('.add-to-cart');


//Event Listeners

card.addEventListener('click', function(e) {
	console.log('clicked the card');
	e.stopPropagation();
});

infocards.addEventListener('click', function(e) {
	console.log('clicked the info');
	e.stopPropagation();
});

addCartBtn.addEventListener('click', function(e) {
	console.log('clicked the add to cart button');
	e.stopPropagation();
});*/

//Problem:
//The events are going to bubble and affect the parent like above

//Solutions:
// 1. stop propagation
//2.Delegation(Better way)



/********************************************************************/
//Video -8

//Event Bubbling (Delagation)


// document.body.addEventListener('click', removeProductFromCart);

const shoppingCart = document.querySelector('#shopping-cart');

shoppingCart.addEventListener('click', removeProductFromCart);


function removeProductFromCart(e) {
	// console.log(e);
	console.log(e.target.classList);
	// console.log(e.target.className);

	if(e.target.classList.contains('remove')) {
		// console.log('Yes!!');
		console.log(e.target.parentElement.parentElement.remove);
		e.target.parentElement.parentElement.remove();
	}
	else {
		console.log('No');
	}
}


//Add to Cart

const courseList = document.querySelector('#courses-list');

courseList.addEventListener('click', addToCart);

function addToCart(e) {
	if(e.target.classList.contains('add-to-cart')){
		console.log('course added');
	}
}
