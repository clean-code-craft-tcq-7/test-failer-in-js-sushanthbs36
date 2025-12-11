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