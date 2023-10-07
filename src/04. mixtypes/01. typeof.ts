import { average } from '../01. basics/02. functions'

export let str = 'Hello World'
const str2 = 'Hello World'
type x = typeof str // ---- string
type y = typeof str2 // ---- literal

type Fn = typeof average

const max: Fn = (...nums) => Math.max(...nums)
max(1, 2, 3)

type ReturnFn = ReturnType<typeof average> // ---- number
