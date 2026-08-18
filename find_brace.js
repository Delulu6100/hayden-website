const fs = require('fs');
const filepath = 'c:/Users/Hayden/Documents/hayden-website-main/app/gfgame/data/gameContent.ts';
let content = fs.readFileSync(filepath, 'utf8');
let lines = content.split('\n');

let balance = 0;
let inString = false;
let stringChar = '';

for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    let line = lines[lineNum];
    for (let i = 0; i < line.length; i++) {
        let ch = line[i];
        
        if (inString) {
            if (ch === '\\') { i++; continue; }
            if (ch === stringChar) { inString = false; }
            continue;
        }
        
        if (ch === '"' || ch === "'" || ch === '`') {
            inString = true;
            stringChar = ch;
            continue;
        }
        
        if (ch === '{') balance++;
        if (ch === '}') balance--;
    }
    
    // Report balance at key lines
    if (balance !== 0 && (lineNum === 294 || lineNum === 295 || lineNum === 296 || 
                          lineNum === 388 || lineNum === 389 || lineNum === 390 ||
                          lineNum === 446 || lineNum === 447 || lineNum === 448 ||
                          lineNum === 491 || lineNum === 492 || lineNum === 493 || lineNum === 494 || lineNum === 495 ||
                          lineNum === 533 || lineNum === 534 || lineNum === 535 ||
                          lineNum === 674 || lineNum === 675 || lineNum === 676 ||
                          lineNum === 752 || lineNum === 753 || lineNum === 754 ||
                          lineNum === 843 || lineNum === 844)) {
        console.log('Line ' + (lineNum+1) + ' (balance=' + balance + '): ' + line);
    }
}

console.log('\nFinal balance: ' + balance);

// Check London area more carefully
console.log('\n=== London ID (line 676) ===');
for (let i = 673; i < 680; i++) {
    console.log((i+1) + ': ' + lines[i]);
}

console.log('\n=== Italy start (line 570) ===');
for (let i = 567; i < 575; i++) {
    console.log((i+1) + ': ' + lines[i]);
}

console.log('\n=== Budapest start (line 534-535) ===');
for (let i = 533; i < 540; i++) {
    console.log((i+1) + ': ' + lines[i]);
}

