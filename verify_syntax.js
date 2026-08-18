const fs = require('fs');
const filepath = 'c:/Users/Hayden/Documents/hayden-website-main/app/gfgame/data/gameContent.ts';
let lines = fs.readFileSync(filepath, 'utf8').split('\n');

// Fix line 492: should be "    ]," (4 spaces) not "            ]," (12 spaces)
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '],' && i > 480 && i < 500) {
        lines[i] = '    ],';
        console.log('Fixed line ' + (i+1) + ': ' + lines[i]);
    }
}

fs.writeFileSync(filepath, lines.join('\n'));
console.log('File written.');

// Try to parse as JavaScript (just check syntax, ignore types)
// Remove type annotations and exports for syntax check
let jsContent = fs.readFileSync(filepath, 'utf8');
// Replace TypeScript-specific syntax for a basic JS parse check
jsContent = jsContent.replace(/export\s+const\s+(\w+):/g, 'var $1 =');
jsContent = jsContent.replace(/export\s+type\s+\w+/g, '');
jsContent = jsContent.replace(/export\s+function/g, 'function');

try {
    new Function(jsContent);
    console.log('SYNTAX CHECK: PASSED');
} catch (e) {
    console.log('SYNTAX CHECK ERROR:', e.message);
}

// Count braces
let openBraces = 0;
let openBrackets = 0;
let openParens = 0;
for (let ch of fs.readFileSync(filepath, 'utf8')) {
    if (ch === '{') openBraces++;
    if (ch === '}') openBraces--;
    if (ch === '[') openBrackets++;
    if (ch === ']') openBrackets--;
    if (ch === '(') openParens++;
    if (ch === ')') openParens--;
}
console.log('Balance: braces=' + openBraces + ', brackets=' + openBrackets + ', parens=' + openParens);
