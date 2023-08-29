import { Fjsondb } from './index'

const db = new Fjsondb(`./data/test.json`)
db.set("k1", "1")
db.set("k2", "11")
db.set("k3", "111")
 
const keys = db.getKeysByMatchedValue("1")
const keys2 = db.getKeysByMatchedValue(1)
const keys3 = db.getKeysByMatchedValue("newValue")
console.log(``)