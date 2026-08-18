import re

with open(r'c:\Users\Hayden\Documents\hayden-website-main\app\surprise0\page.tsx', encoding='utf-8') as f:
    content = f.read()

# Find all location names and their memory titles
pattern = r'name:\s*"([^"]+)"'
matches = list(re.finditer(pattern, content))

print('=== Locations and their memories in surprise0 ===')
for i, m in enumerate(matches):
    start = m.start()
    end = matches[i+1].start() if i+1 < len(matches) else len(content)
    block = content[start:end]
    # Get title lines (skip the first one which is the location name)
    titles = re.findall(r'title:\s*"([^"]+)"', block)
    if len(titles) > 1:
        print(f'{m.group(1)}: {titles}')
    elif len(titles) == 1:
        print(f'{m.group(1)}: []  (no memories)')

print()
print('=== All memory titles in gameContent.ts ===')
with open(r'c:\Users\Hayden\Documents\hayden-website-main\app\gfgame\data\gameContent.ts', encoding='utf-8') as f:
    gc = f.read()

# Extract memory collectibles section
mem_start = gc.find('MEMORY_COLLECTIBLES')
mem_end = gc.find('];', mem_start) + 2
mem_section = gc[mem_start:mem_end]
mem_titles = re.findall(r'title:\s*"([^"]+)"', mem_section)
print(f'Total: {len(mem_titles)}')
for t in mem_titles:
    print(f'  - {t}')
