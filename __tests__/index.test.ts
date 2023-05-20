import { Fjsondb } from '../src/index'

const jsonLocation = './data/test.json'
test('Normal operations', () => {
    const db = new Fjsondb(jsonLocation)
    db.set("test1", 1)
    db.set("test2", "1")
    db.set("test3", true)
    db.set("test4", {
        newKey: "value"
    })
    db.set("test5", {
        newObj: {
            newKey: "value"
        }
    })

    expect(db.has("test1")).toBe(true)
    expect(db.has("test2")).toBe(true)
    expect(db.has("test3")).toBe(true)
    expect(db.has("test4")).toBe(true)
    expect(db.has("test5")).toBe(true)

    expect(db.get("test1")).toBe(1)
    expect(db.get("test2")).toBe("1")
    expect(db.get("test3")).toBe(true)
    expect(db.get("test4")).toStrictEqual({
        newKey: "value"
    })
    expect(db.get("test5")).toStrictEqual({
        newObj: {
            newKey: "value"
        }
    })

    db.delete("test1")
    expect(db.has("test1")).toBe(false)
    db.delete("test2")
    expect(db.has("test2")).toBe(false)

    const db2 = new Fjsondb(jsonLocation)
    expect(db2.has("test3")).toBe(true)
    expect(db2.get("test3")).toBe(true)
    db2.deleteAll()
    expect(db2.has("test4")).toBe(false)
});

test('Crashes', () => {
    try {
        const db3 = new Fjsondb('')
    }
    catch (e) {
        expect(e).not.toBe(null)
    }

    const db4 = new Fjsondb(jsonLocation)
    try {
        db4.set("", "")
    }
    catch (e) {
        expect(e).not.toBe(null)
    }

    try {
        db4.get("")
    }
    catch (e) {
        expect(e).not.toBe(null)
    }

    try {
        db4.has("")
    }
    catch (e) {
        expect(e).not.toBe(null)
    }

    try {
        db4.delete("")
    }
    catch (e) {
        expect(e).not.toBe(null)
    }
})