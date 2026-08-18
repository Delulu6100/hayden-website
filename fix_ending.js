const fs = require('fs');
const p = 'c:/Users/Hayden/Documents/hayden-website-main/app/gfgame/data/gameContent.ts';
let lines = fs.readFileSync(p, 'utf8').split('\n');

// Find "figure it out" and replace 7 lines after it with correct ending
let correctEnding = fs.readFileSync('correct_ending.txt', 'utf8').trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('figure it out')) {
        console.log('Found at line ' + (i+1));
        console.log('Replacing lines ' + (i+1) + ' to ' + (i+7));
        // Replace 7 lines (i to i+6) with correct ending
        lines.splice(i, 7, ...correctEnding);
        console.log('Replacement done.');
        break;
    }
}

fs.writeFileSync(p, lines.join('\n'));

// Verify
let verify = fs.readFileSync(p, 'utf8').split('\n');
for (let j = 835; j < Math.min(848, verify.length); j++) {
    console.log((j+1) + ': ' + JSON.stringify(verify[j]));
}
