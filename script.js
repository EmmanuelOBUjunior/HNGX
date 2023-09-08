const timeElement = document.getElementById("time");
const dayElement = document.getElementById("date");

/**
 * @param {Date} date 
 */
function timeUpdate(){
    const hours12 = new Date().getHours() % 12 || 12;
    const minutes = new Date().getMinutes();
    const isAm = hours12 < 12;

    return `${hours12.toString().padStart(2, '0')}:${minutes} ${isAm}`
}

console.log(timeUpdate(date));