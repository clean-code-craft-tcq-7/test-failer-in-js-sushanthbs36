import {expect} from 'chai'
import {size} from './tshirts.mjs'

//Test for T-Shirts Size
describe('Checking the border case of 38cm', () => {
    it('38cm must be in M instead of L', () => {
        expect(size(38)).to.equal('M')
    })
})
