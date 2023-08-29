# fjsondb

A fast and simple JSON database for NodeJS

# Installation

```
npm install fjsondb
```

or

```
yarn add fjsondb
```

# Usage

First create an instance of Fjsondb with the location of where you'd like to save the data

```
const jsonLocation = './data/test.json'
const db = new Fjsondb(jsonLocation)
```

After that, to set/save a data, use the set function like this (Literally any data type of value can be set/saved):

```
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

To get the data, use the get function:
```
const savedValue = db.get("key")
```

To check, if there's a value saved, use the has function:
```
const isValueAvailable = db.has("key")
```

To delete a value, use the delete function:
```
db.delete("key")
```

To get the full current JSON, use getJson function:
```
const jsonData = db.getJson()
```

To delete all data, use the deleteAll function:
```
db.deleteAll()
```

You can use multiple Fjsondb instances if you want like this:
```
const jsonLocation = './data/test.json'
const db = new Fjsondb(jsonLocation)

const jsonLocation2 = './data/test2.json'
const db2 = new Fjsondb(jsonLocation2)
```

To increment/decrement a number:
```
db.decrementNumber("key")
```

## License

```
MIT License

Copyright (c) 2020 Fayaz Bin Salam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```