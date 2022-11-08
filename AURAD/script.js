var css = document.querySelector("h3");
var span = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
/**var body = document.getElementById("gradient");*/

/**function setGradient() {
body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")"; 

    css.textContent = body.style.background + ";";
}
*/

function setGradient(){
	span.style.background = "linear-gradient(to right," 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")"; 
  css.textContent = span.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener ("input", setGradient);



const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);
