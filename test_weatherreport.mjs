import {expect} from 'chai'
import {report } from './weatherreport.mjs'

function sensorStub() {
    return {
        temperatureInC: 30,
        precipitation: 80,
        humidity: 26,
        windSpeedKMPH: 20
    };
}
describe('Weather Reporting', () => {
    it('Should alert for high precipitation (>60) even with low wind as High Precipitation', () => {
        const weatherReport=report(sensorStub)
        expect(weatherReport).to.equal("High Precipitation")
    })
})