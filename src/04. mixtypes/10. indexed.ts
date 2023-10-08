export {}

interface DataModel {
  id: string
  title: string
  elements: {
    header: {
      title: string
      description: string
      links: string[]
    }
    footer: {
      description: string
      links: string[]
    }
    body: [
      {
        title: string
        content: {}
      }
    ]
  }
}

type T0 = DataModel['elements']
type T1 = T0['footer']

type SomeTuple = [number, string, boolean, ...string[]]
const arr: SomeTuple = [2, '2', false]

type T2 = SomeTuple[0]

const sizes = ['small', 'medium', 'large'] as const
type T3 = (typeof sizes)[0] // ---- small
type T4 = (typeof sizes)[number] // ---- 'small' | 'medium' | 'large' union
