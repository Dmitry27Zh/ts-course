export {}

type Style = 'none' | 'dotted' | 'dashed' | 'solid'
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White'

type BorderStyle = `${Style} ${Uncapitalize<Color>}`
const borderStyle: BorderStyle = 'solid red'
const borderStyle2: BorderStyle = 'dashed white'
