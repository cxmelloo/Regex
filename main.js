const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const age = document.getElementById('age');
const pass = document.getElementById('pass');
const btn = document.getElementById('btn');

btn.addEventListener('click', e => {
	e.preventDefault();

	const nameReg = /^[a-zA-Z]+$/;
	const emailReg = /^[a-zA-Z0-9]+@gmail\.com$/;
	const numReg = /^\+46\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
	const ageReg = /^(1[6-9]|[2-5][0-9]|60)$/;
	const passReg = /^[a-zA-Z0-9._]+$/;

	let v1 = check(name, nameReg);
	let v2 = check(email, emailReg);
	let v3 = check(number, numReg);
	let v4 = check(age, ageReg);
	let v5 = check(pass, passReg);

	if (!v1 || !v2 || !v3 || !v4 || !v5) {
		btn.style.backgroundColor = 'red';
	} else {
		btn.style.backgroundColor = 'green';
	}
});

function check(input, regex) {
	let value = input.value.trim();

	if (value === '') {
		input.classList.remove('valid', 'invalid');
		return false;
	}

	if (regex.test(value)) {
		input.classList.add('valid');
		input.classList.remove('invalid');
		return true;
	} else {
		input.classList.add('invalid');
		input.classList.remove('valid');
		return false;
	}
}
