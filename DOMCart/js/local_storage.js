//Local storage

/*********************************************************************/
/*Video -1*/

// local storage will always be available untill the user decides to remove it.

// session storage is valid only in the current window

//Add to local Storage 
//('key','value')
// localStorage.setItem('name','Ameen');


//Add to session storage
// sessionStorage.setItem('name','Juan');


//Remove from local storage
// localStorage.removeItem('name');


//read the values
// const name = localStorage.getItem('name');

// console.log(name);

//clear local storage
// localStorage.clear();



// localStorage.setItem('name','Ameen');
// localStorage.setItem('name','Walter White');//it will override the previous value

//1st way- give them different values



/*********************************************************************/
/*Video -2*/


//Local storage stores the data in Strings.
//2nd way- 

// localStorage.setItem('name','Ameen');


const localStorageContent = localStorage.getItem('name');


let name;
if(localStorageContent === null) {
	names = [];
} else {
	names = JSON.parse( localStorageContent );
}

// console.log(names);
/*//ex:-
const myArray = [1,2,3,4];
console.log(myArray);

//convert the above array to string

console.log(JSON.stringify(myArray));//converted to string*/

names.push('Juan');
names.push('Walter White');
names.push('John Doe');
// console.log(JSON.stringify(names));

localStorage.setItem('names',JSON.stringify( names ));

// console.log(names);

// console.log(localStorageContent);

//Convert string to array

