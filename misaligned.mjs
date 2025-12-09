import assert from 'assert/strict';
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

export function generateColorMapEntries() {
    let entries=[];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const pairNum= i*5 + j;
            const entry=(`${pairNum} | ${majorColors[i]} | ${minorColors[j]}`);
            entries.push(entry)
        }
    }
    return entries;
}

export function printColorMap(){
    const entries=generateColorMapEntries()
    entries.forEach(entry => {
        console.log(entry)
    });
    return entries.length
}

export function getFirstPipePosition(entry){
    return entry.indexOf('|')
}

const entries = generateColorMapEntries();

const expectedFirstPipePos = getFirstPipePosition(entries[0]); 
const actualFirstPipePos = getFirstPipePosition(entries[10]); 

assert.strictEqual(actualFirstPipePos, expectedFirstPipePos, 
    `Misalignment: Expected first pipe position at index ${expectedFirstPipePos}, but it is at index ${actualFirstPipePos}`);
console.log('Misaligned test finished running');

