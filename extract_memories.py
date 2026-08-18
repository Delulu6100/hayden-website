import re, sys

with open(r'c:\Users\Hayden\Documents\hayden-website-main\app\surprise0\page.tsx', encoding='utf-8') as f:
    content = f.read()

# Find the Czechia location block
czech_start = content.find('"Czechia"')
czech_end = content.find('"Budapest"')
czech_block = content[czech_start:czech_end]

# Find the Budapest location block
bud_start = content.find('"Budapest"')
bud_end = content.find('"Italy"')
bud_block = content[bud_start:bud_end]

# Find the Italy location block  
italy_start = content.find('"Italy"')
italy_end = content.find('"London"')
italy_block = content[italy_start:italy_end]

print("=== CZECHIA BLOCK ===")
print(czech_block[:600])
print()
print("=== BUDAPEST BLOCK ===")
print(bud_block[:600])
print()
print("=== ITALY BLOCK ===")
print(italy_block[:1200])
