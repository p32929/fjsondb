import * as fs from "fs";

const obj = {
    fooValue: {
        // 
    },
    get foo() {
        return this.fooValue;
    },
    set foo(val) {
        this.fooValue = {
            ...this.fooValue,
            ...val,
        };
        this.fooListener(this.fooValue);
    },
    clear: function () {
        this.fooValue = {}
        this.fooListener(this.fooValue)
    },
    fooListener: function (newValue) {
        // console.log(`New Value: ${JSON.stringify(val)}`)
    },
    registerNewListener: function (listener) {
        this.fooListener = listener;
    },
};

// Test listener
// obj.foo = { idk: "1" };
// obj.foo = { name: "1" };
// obj.foo = { age: 1 };
// obj.clear()
// obj.foo = { age: 1 };

export class Fjsondb {
    constructor(filePath: string) {
        if (filePath.length === 0) {
            throw "filePath cannot be empty"
        }

        if (!fs.existsSync(filePath)) {
            const splittedSlashes = filePath.split("/");
            const folderPath = splittedSlashes
                .slice(0, splittedSlashes.length - 1)
                .join("/");

            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
            }

            fs.writeFileSync(filePath, JSON.stringify({}));
        }


        obj.registerNewListener((newValue) => {
            fs.writeFileSync(filePath, JSON.stringify(newValue, null, 2))
            console.log(`newValue: ${JSON.stringify(newValue)}`)
        })

        // const previousValues = JSON.parse(fs.readFileSync(filePath).toString())
        // obj.foo = previousValues
    }

    set(key: string, value: any) {
        if (key === '') {
            throw "key cannot be empty"
        }

        const data = {}
        data[key] = value
        obj.foo = data
    }

    get(key: string) {
        if (key === '') {
            throw "key cannot be empty"
        }

        return obj.foo[key]
    }

    has(key: string) {
        if (key === '') {
            throw "key cannot be empty"
        }

        return obj.foo[key] !== undefined
    }

    delete(key: string) {
        if (key === '') {
            throw "key cannot be empty"
        }

        const prevData = obj.foo
        delete prevData[key]
        obj.foo = prevData
    }

    deleteAll() {
        obj.clear()
    }
}