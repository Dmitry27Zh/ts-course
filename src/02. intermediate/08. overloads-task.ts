function head(value: string | number[] | boolean[]): string | number | boolean {
  return value[0]
}

const item = head('22') // string | number | boolean
// item + 1 ---- error

function head2(value: string): string
function head2(value: number[]): number
function head2(value: boolean[]): boolean

function head2(value: string | number[] | boolean[]): string | number | boolean {
  return value[0]
}

const item2 = head2('11') // string
item2 + 1 // ---- no error
