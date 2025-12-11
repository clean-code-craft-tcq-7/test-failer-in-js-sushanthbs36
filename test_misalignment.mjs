import {expect} from 'chai'
import { generateColorMapEntries, getFirstPipePosition } from './misaligned.mjs'

describe('Color Map Generation and Alignment', () => {
    it('Should maintain consistent alignment (Misalignment: First pipe position is inconsistent between single and double-digit entries)', () => {
        const entries= generateColorMapEntries()
        const expectedFirstPipePos=getFirstPipePosition(entries[0])
        const actualFirstPipePos=getFirstPipePosition(entries[10])
        expect(expectedFirstPipePos).to.equal(actualFirstPipePos)
    })
})

