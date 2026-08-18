filepath = r'c:\Users\Hayden\Documents\hayden-website-main\app\gfgame\data\gameContent.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix indentation issues in the done node
content = content.replace(
    '                        text: "We actually made one.",',
    '            text: "We actually made one.",'
)
content = content.replace(
    '                        speaker: "KELLY",',
    '            speaker: "KELLY",'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("=== Norway snowman ending (lines 436-450) ===")
for i in range(435, min(450, len(lines))):
    print(f"{i+1}: {lines[i].rstrip()}")
