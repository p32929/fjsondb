import { Fjsondb } from '../src/index'

test('fJsondb test', () => {
    const db = new Fjsondb('./data/test.json')
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

    db.deleteAll()
    expect(db.has("test3")).toBe(false)
});