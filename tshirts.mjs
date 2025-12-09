import assert from 'assert/strict';
export function size(cms) {
    if (cms < 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}

assert.strictEqual(size(38), 'M', '38cm should be M, but got L');
console.log('T-shirt tests finished running');