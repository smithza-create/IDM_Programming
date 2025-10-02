//List of variables used
const usdToEuro = 0.85109;
const euroToUsd = 1.17497;
let conversion = null;



// This function will allow me to convert currencies between one another
function convert(from, to, amount) {
	if ((from == 'Euro')&&(to == 'USD')) {
		conversion = (amount * euroToUsd).toFixed(2);
		return (`${amount} ${from} is ${conversion} ${to}.`);
	} 
	else if ((from == 'USD')&&(to == 'Euro')) {
			conversion = (amount * usdToEuro).toFixed(2);
			return (`${amount} ${from} is ${conversion} ${to}.`);
		}
		else{
			console.log('Error, only USD and Euro are supported at the moment!');
		}
}

