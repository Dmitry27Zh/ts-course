export function head2(value: string): string
export function head2(value: number[]): number
export function head2(value: boolean[]): boolean
export function head2(value: string[]): string
export function head2(value: Date[]): Date

export function head2(
  value: string | number[] | boolean[] | string[] | Date[]
): string | number | boolean | string | Date {
  return value[0]
}

interface ModelData {
  title: string
  value: string // string [] boolean
}
