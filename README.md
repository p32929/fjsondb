# fjsondb

A tiny JSON file database for Node.js and TypeScript. Your data lives in one plain JSON file, you read and write it by key, and there is no database server to run.

For a CLI, a bot, a prototype or some settings, setting up a real database is too much, and writing your own read-and-save code for a JSON file gets messy fast. fjsondb gives you a clean key-value API on top of one file, with counters and reverse lookup built in, and no third-party packages at all.

On npm: **[fjsondb](https://www.npmjs.com/package/fjsondb)**

## Features

1. **Plain JSON on disk:** open the file in any editor and read it.
2. **Any value type:** numbers, text, true or false, and nested objects.
3. **Counters built in:** `incrementNumber` and `decrementNumber` create the key at 0 if it is missing.
4. **Reverse lookup:** `getKeysByMatchedValue(value)` gives you every key that holds a value.
5. **As many databases as you like:** one per file.
6. **TypeScript types included.**

## Installation

```bash
npm install fjsondb
# or
yarn add fjsondb
```

## Usage

Create an instance with the path you'd like the data saved to (the folder is created if it doesn't exist):

```ts
import { Fjsondb } from 'fjsondb'

const jsonLocation = './data/test.json'
const db = new Fjsondb(jsonLocation)
```

Save any value with `set`:

```ts
db.set("test1", 1)
db.set("test2", "1")
db.set("test3", true)
db.set("test4", {
    newKey: "value"
})
db.set("key", {
    newObj: {
        newKey: "value"
    }
})
```

Read a value with `get`:
```ts
const savedValue = db.get("key")
```

Check if a key exists with `has`:
```ts
const isValueAvailable = db.has("key")
```

Delete a key with `delete`:
```ts
db.delete("key")
```

Get the whole JSON with `getJson`:
```ts
const jsonData = db.getJson()
```

Delete everything with `deleteAll`:
```ts
db.deleteAll()
```

Use one instance per file:
```ts
const jsonLocation = './data/test.json'
const db = new Fjsondb(jsonLocation)

const jsonLocation2 = './data/test2.json'
const db2 = new Fjsondb(jsonLocation2)
```

To increment or decrement a number (both create the key at 0 first if it's missing, unless you pass `upsert = false`):

```ts
db.incrementNumber("key")
db.decrementNumber("key")
```

To find every key holding a given value:

```ts
const keys = db.getKeysByMatchedValue("value")
```

## License

MIT License — Copyright (c) 2022 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make fjsondb better.

## You might also like

<p><a href="https://openstore.pfay.workers.dev/cards/p32929/0?n=4&amp;repo=fjsondb"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/0.svg?n=4&amp;repo=fjsondb&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/0.svg?n=4&amp;repo=fjsondb&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (1)"></picture></a><a href="https://openstore.pfay.workers.dev/cards/p32929/1?n=4&amp;repo=fjsondb"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/1.svg?n=4&amp;repo=fjsondb&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/1.svg?n=4&amp;repo=fjsondb&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (2)"></picture></a><br><a href="https://openstore.pfay.workers.dev/cards/p32929/2?n=4&amp;repo=fjsondb"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/2.svg?n=4&amp;repo=fjsondb&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/2.svg?n=4&amp;repo=fjsondb&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (3)"></picture></a><a href="https://openstore.pfay.workers.dev/cards/p32929/3?n=4&amp;repo=fjsondb"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/3.svg?n=4&amp;repo=fjsondb&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/3.svg?n=4&amp;repo=fjsondb&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (4)"></picture></a></p>

<p><a href="https://p32929.github.io/share/?repo=fjsondb"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
