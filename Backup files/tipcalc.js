window.onload = () =>
	{
		/*calling a function calculateTip
		which will calculate the tip for the bill.*/
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	/*assign values of ID : amount, person and service to
	variables for further calculations.*/
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	/*if statement will work when user presses
		calculate without entering values. */
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}
	if (persons === '1')
			document.querySelector('#each').style.display = 'none';
	else
		document.querySelector('#each').style.display = 'block';

	/*calculating the tip by multiplying total-bill and type of
	service; then dividing it by number of persons.*/
	let total = (amount * service) / persons;
	total = total.toFixed(2);
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}
