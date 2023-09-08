const timeElement = document.getElementById("time");
const dayElement = document.getElementById("date");

/**
 * @param {Date} date 
 */
function timeUpdate(){
    const hours12 = new Date().getHours() % 12 || 12;
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const isAm = hours12 < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}: ${seconds.toString().padStart(2, "0")} ${isAm ?"AM":"PM"}`
}

function dateUpdate(){
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = new Date().getDay()

    return `${daysArray[day]}`
}

setInterval(() => {
    
    timeElement.textContent = timeUpdate();

    dayElement.textContent = dateUpdate();
},200)