import re

filepath = r'c:\Users\Hayden\Documents\hayden-website-main\app\gfgame\data\gameContent.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Print lines 583 to 635 to see the broken area
print("=== Current state around London (lines 583-635) ===")
for i in range(582, min(636, len(lines))):
    print(f'{i+1}: {lines[i].rstrip()}')

print("\n=== Current state around Hong Kong (lines 715-765) ===")
for i in range(714, min(766, len(lines))):
    print(f'{i+1}: {lines[i].rstrip()}')
