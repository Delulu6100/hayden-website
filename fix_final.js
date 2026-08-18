const fs = require('fs');
const filepath = 'c:/Users/Hayden/Documents/hayden-website-main/app/gfgame/data/gameContent.ts';
let lines = fs.readFileSync(filepath, 'utf8').split('\n');

// Issue 1: Fix line 534 - add 2 spaces before {
// Find the Budapest line
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '{') {
        // Check if next line has id: "budapest"
        if (i + 1 < lines.length && lines[i + 1].includes('id: "budapest"')) {
            if (lines[i] === '{') {
                lines[i] = '  {';
                console.log('Fixed line ' + (i + 1) + ': added 2 spaces to opening brace');
            }
        }
    }
}

// Issue 2: Remove duplicate { before Hong Kong (line 753)
// Find the duplicate
let dupRemoved = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id: "hong-kong"')) {
        // Check if previous two lines are both {
        if (i >= 2 && lines[i - 2].trim() === '{' && lines[i - 1].trim() === '{') {
            // Remove the first one (line i-2)
            lines.splice(i - 2, 1);
            console.log('Removed duplicate { at line ' + (i - 1));
            dupRemoved = true;
            break;
        }
    }
}

// Issue 3: Remove orphaned hk-neon content (lines 844-871 approximately)
// After hk-movie chapter's end node, find and remove orphaned content
// The hk-movie chapter should end with:
//           },
//         },
//       },
//     ],
//   },
// ];
// But currently after hk-movie's end, there's orphaned content

// Find the hk-movie chapter and its proper ending
let hkMovieEnd = null;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id: "hk-movie"')) {
        // Find the closing of this chapter
        let braceCount = 0;
        let started = false;
        for (let j = i; j < lines.length; j++) {
            for (let ch of lines[j]) {
                if (ch === '{') {
                    braceCount++;
                    started = true;
                } else if (ch === '}') {
                    braceCount--;
                }
            }
            if (started && braceCount === 0) {
                hkMovieEnd = j;
                break;
            }
        }
        break;
    }
}

if (hkMovieEnd !== null) {
    console.log('hk-movie chapter ends at line ' + (hkMovieEnd + 1));
    console.log('Line after hk-movie: ' + (hkMovieEnd + 2) + ': ' + lines[hkMovieEnd + 1]);
    
    // Check if there's orphaned content after hk-movie
    // The proper structure should be: }, then ], then }, then ];
    let orphanStart = hkMovieEnd + 1;
    let orphanEnd = null;
    
    // Look for orphaned content - should be just:
    //       },
    //     ],
    //   },
    // ];
    // But instead there's extra content
    
    // Find the end of the file (the ]; line)
    let endLine = null;
    for (let i = hkMovieEnd + 1; i < lines.length; i++) {
        if (lines[i].trim() === '];') {
            endLine = i;
            break;
        }
    }
    
    // Check what's between hkMovieEnd and endLine
    console.log('Lines between hk-movie end and ];');
    for (let i = hkMovieEnd + 1; i <= endLine; i++) {
        console.log('  ' + (i + 1) + ': ' + lines[i]);
    }
    
    // The hk-movie chapter's closing should be:
    // },  (closes end node)
    // },  (closes nodes object)
    // },  (closes chapter)
    // ],  (closes chapters array)
    // },  (closes hong-kong location)
    // ];  (closes LOCATIONS array)
    
    // But currently after the chapter closing, there's orphaned hk-neon content
    // We need to replace everything from hkMovieEnd+1 to endLine with the correct closing
    
    // Actually, hkMovieEnd is the closing } of the chapter. After that should be:
    // }, (closes node end) -- wait, let me re-check
    
    // The hk-movie chapter structure:
    //       {           ← chapter start (line hkMovieEnd-?)
    //         ...nodes...
    //         end: {     ← end node
    //           ...
    //         },          ← closes end node
    //       }             ← closes chapter (this is hkMovieEnd)
    //     ],              ← closes chapters array
    //   },                ← closes location
    // ];                  ← closes LOCATIONS
    
    // After hkMovieEnd (the } that closes the chapter), the next lines should be:
    //     ],  (closes chapters array)
    //   },  (closes hong-kong location)
    // ];  (closes LOCATIONS)
    
    // But instead there's orphaned content. Let me just replace everything after hkMovieEnd
    // with the correct closing lines.
    
    let correctClosing = ['    ],', '  },', '];'];
    
    // Replace from hkMovieEnd+1 to endLine (inclusive) with correctClosing
    lines = lines.slice(0, hkMovieEnd + 1).concat(correctClosing).concat(lines.slice(endLine + 1));
    console.log('Fixed hk-movie closing. Replaced lines ' + (hkMovieEnd + 2) + ' to ' + (endLine + 1));
}

fs.writeFileSync(filepath, lines.join('\n'));
console.log('\nFile written. Total lines: ' + lines.length);

// Verify
console.log('\n=== Verifying end of file ===');
for (let i = lines.length - 10; i < lines.length; i++) {
    console.log((i + 1) + ': ' + lines[i]);
}
