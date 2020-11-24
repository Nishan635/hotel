const email1 = document.querySelector('#email1');
const emailVal = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
document.querySelector('#form1').addEventListener('submit', (event) => {
	event.preventDefault();
	if(emailVal.test(email1.value)) {
		document.querySelector('.valid-txt')
		.style.display = 'block';
		document.querySelector('.invalid-txt')
		.style.display = 'none'
	} else {
		document.querySelector('.invalid-txt')
		.style.display = 'block';
		document.querySelector('.valid-txt')
		.style.display = 'none';
	}
})


const email2 = document.querySelector("#email2");
const name = document.querySelector('#name');
const emailVal2 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const nameVal = /^[a-z\d]{5,12}$/i;

document.querySelector('#form2').addEventListener('submit', (event) => {
	event.preventDefault();
	if(emailVal2.test(email2.value)) {
		const email2 = document.querySelector("#email2");
		email2.style.border = '4px solid #4dff4d';
	} else {
		const email2 = document.querySelector("#email2");
		email2.style.border = '4px solid #ff3333';
	}
})

document.querySelector('#form2').addEventListener('submit', (event) => {
	event.preventDefault();
	if(nameVal.test(name.value)) {
		const name = document.querySelector("#name");
		name.style.border = '4px solid #4dff4d';
	} else {
		const name = document.querySelector("#name");
		name.style.border = '4px solid #ff3333';
	}
})


