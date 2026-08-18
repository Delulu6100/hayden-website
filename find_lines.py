import re

with open(r'c:\Users\Hayden\Documents\hayden-website-main\app\gfgame\data\gameContent.ts', encoding='utf-8') as f:
    lines = f.readlines()
for i, line in enumerate(lines, 1):
    s = line.rstrip()
    if 'london-train' in s or 'hk-neon' in s or 'hong-kong' in s or 'denmark' in s or 'unlockAfterLocationId' in s or 'mem-coat' in s or 'london' in s:
        print(f'{i}: {s}')
