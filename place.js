function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        let chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(chill);
    }
    return "N/A";
}

const temperature = 30;
const windSpeed = 10;

document.addEventListener("DOMContentLoaded", () => {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").textContent = `Wind Chill Factor: ${windChill}`;
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});