type NestedNumbers = number | NestedNumbers[]

const nums: NestedNumbers = [1, 2, [1, 2, 3], [[3, 2, [2]]]]

// JSON

type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray

function isJSON(arg: JSONValue) {}

isJSON('2')
isJSON(1)
isJSON({ a: [123], b: { x: 1 } })
// isJSON(new Date()) // ---- error
