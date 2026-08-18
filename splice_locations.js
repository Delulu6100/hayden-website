const fs = require('fs');
const filepath = 'c:/Users/Hayden/Documents/hayden-website-main/app/gfgame/data/gameContent.ts';
let lines = fs.readFileSync(filepath, 'utf8').split('\n');

// Read replacement parts
let part1 = fs.readFileSync('c:/Users/Hayden/Documents/hayden-website-main/new_locs_part1.txt', 'utf8');
let part2 = fs.readFileSync('c:/Users/Hayden/Documents/hayden-website-main/new_locs_part2.txt', 'utf8');
let newContent = part1 + part2;

// Find broken budapest start
let bpStart = null;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id: "budapest"') && lines[i].trim() === 'id: "budapest",') {
        let j = i - 1;
        while (j >= 0 && lines[j].trim() === '') j--;
        bpStart = j;
        break;
    }
}

// Find Hong Kong start
let hkStart = null;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id: "hong-kong"')) {
        let j = i - 1;
        while (j >= 0 && lines[j].trim() === '') j--;
        hkStart = j;
        break;
    }
}

// Find extra closing brace before Hong Kong
let extraBrace = null;
for (let i = hkStart - 1; i >= 0; i--) {
    if (lines[i].trim() === '},') {
        extraBrace = i;
        break;
    }
}

console.log('bpStart: ' + (bpStart+1));
console.log('hkStart: ' + (hkStart+1));
console.log('extraBrace: ' + (extraBrace+1));
console.log('Lines to replace: ' + (bpStart+1) + ' to ' + (extraBrace+1));

// Replace broken section with new content
let newLines = lines.slice(0, bpStart).concat(newContent.trim().split('\n')).concat(lines.slice(extraBrace + 1));

fs.writeFileSync(filepath, newLines.join('\n'));
console.log('File written. Total lines: ' + newLines.length);

// Verify location IDs
for (let i = 0; i < newLines.length; i++) {
    let s = newLines[i];
    if (s.includes('id: "iceland"') || s.includes('id: "norway"') || s.includes('id: "denmark"') || s.includes('id: "czechia"') || s.includes('id: "budapest"') || s.includes('id: "italy"') || s.includes('id: "london"') || s.includes('id: "hong-kong"')) {
        console.log('  Line ' + (i+1) + ': ' + s);
    }
}
