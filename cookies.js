// Cookies Function

//Store Cookie
function setCookie(cookieKey, cookieValue, expirationDays) {
	const cookieDate = new Date();
	const expireTimeInMs = expirationDays * 24 * 60 * 60 * 1000;
	cookieDate.setTime(cookieDate.getTime() + expireTimeInMs);
	let expires = "expires=" + cookieDate.toUTCString();
	document.cookie = `${cookieKey}=${cookieValue}; ${expires};path=/`;
}


//Get Cookie
function getCookie(cookieKey) {
	let name = `${cookieKey}=`;
	let myCookie = document.cookie.split(';');
	for (let i=0; i < myCookie.length; i++) {
		let currentCookie = myCookie[i];
			while (currentCookie.charAt(0) == ' ') {
				currentCookie = currentCookie.substring(1);
			}
		if (currentCookie.indexOf(name) == 0) {
			return currentCookie.substring(name.length, currentCookie.length);
		}
	}
	return "";
}

//Button Clicker
const clickerButton = document.getElementById('clickerButton');
const clickerCounterDisplay = document.getElementById('clickerCounterDisplay');
let numberOfTimesClicked = parseInt(window.localStorage.getItem('clickData')) || 0;
clickerCounterDisplay.innerText = `Click Counter: ${numberOfTimesClicked}`;
clickerButton.addEventListener('click', () => {
	numberOfTimesClicked++;
	clickerCounterDisplay.innerText = `Click Counter: ${numberOfTimesClicked}`;
	localStorage.setItem('clickData', numberOfTimesClicked);
})