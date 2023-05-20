import { writeFileSync } from "fs";

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
        obj.registerNewListener((newValue) => {
            // writeFileSync(filePath, JSON.stringify(newValue))
            console.log(`newValue: ${JSON.stringify(newValue)}`)
        })
    }

    set(key: string, value: any) {
        obj.foo[key] = value
    }

    get(key: string) {
        return obj.foo[key]
    }

    has(key: string) {
        return obj.foo[key] !== undefined
    }

    delete(key: string) {
        delete obj.foo[key]
    }

    deleteAll() {
        obj.clear()
    }
}