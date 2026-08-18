const fs = require('fs');
const filepath = 'c:/Users/Hayden/Documents/hayden-website-main/app/gfgame/data/gameContent.ts';
let lines = fs.readFileSync(filepath, 'utf8').split('\n');

let balance = 0;
let inString = false;
let stringChar = '';

for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    let line = lines[lineNum];
    let prevBalance = balance;
    
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
    
    // Report whenever balance changes, but only in the LOCATIONS area
    if (balance !== prevBalance && lineNum >= 290 && lineNum <= 850) {
        let marker = '';
        if (balance > prevBalance) marker = '  OPEN';
        if (balance < prevBalance) marker = '  CLOSE';
        console.log('Line ' + (lineNum+1) + ' (bal=' + balance + ')' + marker + ': ' + line.trim().substring(0, 80));
    }
}

console.log('\nFinal balance: ' + balance);
