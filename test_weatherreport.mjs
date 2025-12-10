import {expect} from 'chai'
import { highPrecipitationStub, report } from './weatherreport.mjs'

//Test for Weather Report
describe('Weather Reporting', () => {
    it('Should alert for high precipitation (>60) even with low wind as High Precipitation', () => {
        const weatherReport=report(highPrecipitationStub)
        expect(weatherReport).to.equal("High Precipitation")
    })
})