import assert from 'assert/strict';

function highPrecipitationStub() {
    return { 
        temperatureInC: 30,         
        precipitation: 80,          
        humidity: 26, 
        windSpeedKMPH: 20          
    };
}
export function report(sensorReader) {
    const readings = sensorReader();
    let weather = "Sunny Day";

    if (readings.temperatureInC > 25) {
        if (readings.precipitation >= 20 && readings.precipitation < 60) {
            weather = "Partly Cloudy";
        } else if (readings.windSpeedKMPH > 50) {
            weather = "Alert, Stormy with heavy rain";
        }
    }
    return weather;
}

const weatherBugCase = report(highPrecipitationStub);
assert.notStrictEqual(weatherBugCase, "Sunny Day", "High Precipitation case should not be Sunny Day");
console.log("Weather report test finished running");
