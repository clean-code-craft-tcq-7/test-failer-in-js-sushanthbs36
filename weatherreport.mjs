import { expect } from 'chai';

export function sensorStub() {
    return {
        temperatureInC: 50,
        precipitation: 70,
        humidity: 26,
        windSpeedKMPH: 52
    };
}
export function highPrecipitationStub() {
    return { 
        temperatureInC: 30,         
        precipitation: 80,          
        humidity: 26, 
        windSpeedKMPH: 20          
    };
}
export function testRainy() {
    const weather = report(sensorStub);
    console.log(weather);
    expect(weather).includes("rain", "Test failed: Expected 'rain' in weather description");
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
