//variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');




//Event Listeners

eventListeners();

function eventListeners() {

	//App Init (Event which is fired when the page loads)
	document.addEventListener('DOMContentLoaded', appInit);



	//validate the form
	email.addEventListener('blur', validateField);
	subject.addEventListener('blur', validateField);
	message.addEventListener('blur', validateField);


	//send email & reset button
	sendEmailForm.addEventListener('submit', sendEmail);
	resetBtn.addEventListener('click', resetForm);

}


//Functions


//app initalization
function appInit() {

	//disable send button on load
	sendBtn.disabled = true;
}

function sendEmail(e) {
	e.preventDefault();

	//show the spinner
	const spinner = document.querySelector('#spinner');
	spinner.style.display = 'block';


	//show the email image
	const sendEmailImg = document.createElement('img');
	sendEmailImg.src = 'img/mail.gif';
	sendEmailImg.style.display = 'block';

	//hide spinner then show send email image
	setTimeout(function() {
		//hide the spinner
		spinner.style.display = 'none';

		//show the image
		document.querySelector('#loaders').appendChild(sendEmailImg);

		//After 5 seconds hide the image and reset the form
		setTimeout(function() {
			sendEmailForm.reset();
			sendEmailImg.remove();
		}, 3000 );

	}, 3000 );
}

//validate field
function validateField() {
	
	let errors;

	//validate the length of the field
	validateLength(this)

	//Validate the email
	if(this.type === 'email') {
		validateEmail(this);
	}

	// Both will return error, and then check if there are any errors
	errors = document.querySelectorAll('.error')

	//check that the inputs are not empty
	if(email.value !== '' && subject.value !== '' && message.value !== '') {
		if(errors.length === 0) {
			//if no errors enable buttons
			sendBtn.disabled = false;
		}
	}
}

//validate the length of the fields

function validateLength(field) {
	if(field.value.length > 0 ) {
		field.style.borderBottomColor = 'green';
		field.classList.remove('error');
	} else {
		field.style.borderBottomColor = 'red';
		field.classList.add('error');
	}
}	

//validate email checks for @ in the value

function validateEmail(field) {
	let emailText = field.value;

	//check if email text contains @ sign
	if(emailText.indexOf('@') !== -1) {
		field.style.borderBottomColor = 'green';
		field.classList.remove('error');
	} else {
		field.style.borderBottomColor = 'red';
		field.classList.add('error');
	}
}


//Reset the form

function resetForm() {
	sendEmailForm.reset();
}