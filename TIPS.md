###### Useful hints & links

## Hints

1. When displaying the ``JSON`` objects in the terminal, use:

```bash
JSON.stringify(creatRandomUser(), null, 2)
```

2. Either of the two selects props from ``<FontAwesome />``

```bash
const name: keyof Pick<typeof FontAwesome.glyphMap, "home" | "search">

# or

const name: React.ComponentProps<typeof FontAwesome>["name"]
```

3. Save development dependencies with

```bash

npx expo install -- -save-dev @types/react-native

```

4. Additional TypeScript configs

```bash

"paths": { "@/*": ["./*"] },

```

## Links

Find more icons on [@expo/vector-icons](https://icons.expo.fyi/Index)
