const timeElement = document.getElementById("time");
const dayElement = document.getElementById("date");

/**
 * @param {Date} date 
 */
function timeUpdate() {
    // const hours = new Date().getHours() * 60 * 60 * 1000
    // const minutes = new Date().getMinutes() * 60 * 1000
    // const seconds = new Date().getSeconds()* 1000


    return new Date().getTime();
}

function dateUpdate(){
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = new Date().getDay()

    return `${daysArray[day]}`
}

setInterval(() => {
    
    
    timeElement.textContent = timeUpdate();

    dayElement.textContent = dateUpdate();
},1)