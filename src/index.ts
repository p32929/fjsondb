import * as fs from "fs";

export class Fjsondb {
    obj = {
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


        this.obj.registerNewListener((newValue) => {
            fs.writeFileSync(filePath, JSON.stringify(newValue, null, 2))
            console.log(`newValue: ${JSON.stringify(newValue)}`)
        })

        const previousValues = JSON.parse(fs.readFileSync(filePath).toString())
        this.obj.foo = previousValues
    }

    getJson() {
        return this.obj.foo
    }

    set(key: string, value: any) {
        if (key === '') {
            throw "key cannot be empty"
        }

        const data = {}
        data[key] = value
        this.obj.foo = data
    }

    get(key: string) {
        if (key === '') {
            throw "key cannot be empty"
        }

        return this.obj.foo[key]
    }

    has(key: string) {
        if (key === '') {
            throw "key cannot be empty"
        }

        return this.obj.foo[key] !== undefined
    }

    delete(key: string) {
        if (key === '') {
            throw "key cannot be empty"
        }

        const prevData = this.obj.foo
        delete prevData[key]
        this.obj.foo = prevData
    }

    deleteAll() {
        this.obj.clear()
    }
}