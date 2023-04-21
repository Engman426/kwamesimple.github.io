const form = document.querySelector('form');
const name = document.querySelector('#name');
const cardNumber = document.querySelector('#card-number');
const expirationDate = document.querySelector('#expiration-date');
const cvv = document.querySelector('#cvv');
const amount = document.querySelector('#amount');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	// Your payment processing code goes here
	
	alert(`Payment of ${amount.value} was successful!`);
	
	form.reset();
});
