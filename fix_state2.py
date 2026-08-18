filepath = r'c:\Users\Hayden\Documents\hayden-website-main\app\gfgame\data\gameContent.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Fix line 586 indentation (0-indexed: 585)
print("Line 586 before: " + repr(lines[585]))
lines[585] = lines[585].replace('                        text:', '            text:')
print("Line 586 after:  " + repr(lines[585]))

# 2. Update London's unlockAfterLocationId from denmark to italy
for i, line in enumerate(lines):
    if 'id: "london"' in line:
        for j in range(i, min(i+15, len(lines))):
            if 'unlockAfterLocationId' in lines[j]:
                lines[j] = lines[j].replace('"denmark"', '"italy"')
                print("Updated London unlockAfter at line " + str(j+1))
                break
        break

# 3. Remove orphaned london-train content (lines 592-630, 0-indexed 591-629)
orphan_start = 591
orphan_end = 629
print("Removing orphan lines " + str(orphan_start+1) + "-" + str(orphan_end+1))
del lines[orphan_start:orphan_end+1]

# 4. Find and remove hk-neon chapter in Hong Kong
hk_start = None
hk_end = None
for i, line in enumerate(lines):
    if 'id: "hk-neon"' in line:
        j = i - 1
        while j >= 0 and lines[j].strip() == '':
            j -= 1
        hk_start = j if lines[j].strip() == '{' else i
    if hk_start is not None and i > hk_start and lines[i].strip() == '},':
        hk_end = i
        break

if hk_start is not None and hk_end is not None:
    print("Removing hk-neon chapter lines " + str(hk_start+1) + "-" + str(hk_end+1))
    del lines[hk_start:hk_end+1]

# 5. Write file back
with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("File written. Verifying...")

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Verify London
for i, line in enumerate(lines):
    if 'id: "london"' in line:
        for j in range(i, min(i+12, len(lines))):
            print(str(j+1) + ": " + lines[j].rstrip())
        break

print("")

# Verify Hong Kong end
for i, line in enumerate(lines):
    if 'id: "hong-kong"' in line:
        for j in range(i, min(i+20, len(lines))):
            print(str(j+1) + ": " + lines[j].rstrip())
        break

print("")

# Verify end of LOCATIONS
for i, line in enumerate(lines):
    if '];' in line and i > 400:
        for j in range(max(0, i-5), min(i+2, len(lines))):
            print(str(j+1) + ": " + lines[j].rstrip())
        break
