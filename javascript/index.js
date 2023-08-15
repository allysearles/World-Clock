function updateTime() {
	//London, England
	let londonElement = document.querySelector("#london");
	let londonDateElement = londonElement.querySelector(".date");
	let londonTimeElement = londonElement.querySelector(".time");
	let londonTime = moment().tz("Europe/London");

	londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
	londonTimeElement.innerHTML = londonTime.format(
		"h:mm:ss [<small>]A[</small>]"
	);

	//Tokyo, Japan
	let tokyoElement = document.querySelector("#tokyo");
	let tokyoDateElement = tokyoElement.querySelector(".date");
	let tokyoTimeElement = tokyoElement.querySelector(".time");
	let tokyoTime = moment().tz("Asia/Tokyo");

	tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
	tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

	//Miami, Florida
	let miamiElement = document.querySelector("#miami");
	let miamiDateElement = miamiElement.querySelector(".date");
	let miamiTimeElement = miamiElement.querySelector(".time");
	let miamiTime = moment().tz("US/Eastern");

	miamiDateElement.innerHTML = miamiTime.format("MMMM Do YYYY");
	miamiTimeElement.innerHTML = miamiTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
