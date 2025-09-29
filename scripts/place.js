const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const now = new Date();
currentyear.innerHTML = ` <span class="highlight">${now.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modification: <span class="light">${document.lastModified}</span>`;
// Runs the wind chill calculation and display logic on page load
window.onload = displayWindChill;

/**
 * Calculates the wind chill factor using the standard metric (Celsius and km/h) formula.
 * The result is rounded to one decimal place.
 * * @param {number} T - Temperature in degrees Celsius (°C).
 * @param {number} V - Wind speed in kilometers per hour (km/h).
 * @returns {number} The calculated wind chill index.
 */
function calculateWindChill(T, V) {
    // Metric Wind Chill Formula (one line):
    // WCI = 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
    // The calculation is wrapped in Math.round() to ensure precise rounding to one decimal place.
    return Math.round((13.12 + (0.6215 * T) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16))) * 10) / 10;
}

/**
 * Checks conditions and displays the calculated wind chill or "N/A".
 */
function displayWindChill() {
    // Static variables for temperature and wind speed (Metric units)
    const temp = 10; // Current temperature in °C (from HTML content)
    const speedKmH = 5; // Current wind speed in km/h (from HTML content)

    // Thresholds for calculating wind chill (Metric: T <= 10°C AND V > 4.8 km/h)
    const tempThreshold = 10; // °C
    const speedThreshold = 4.8; // km/h

    // Target element to display the wind chill value
    const windchillSpan = document.getElementById('windchill');

    // Check if the wind chill calculation conditions are met
    if (temp <= tempThreshold && speedKmH > speedThreshold) {
        // Conditions met: Calculate and format the wind chill
        const windChill = calculateWindChill(temp, speedKmH);

        // Display the calculated result
        windchillSpan.textContent = `${windChill.toFixed(1)} °C`;
    } else {
        // Conditions not met: Display "N/A"
        windchillSpan.textContent = "N/A";
    }
}
