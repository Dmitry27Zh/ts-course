const pairs: [string, string][] = [
  ['key', 'value'],
  ['key2', 'value2'],
]

const data: [string, number, boolean] = ['shh', 2, true]

// csv

const doc: [string, string, number, Date][] = []
// doc.push('name', 'lastname', 20, new Date()) ---- error
doc.push(['name', 'lastname', 20, new Date()]) // ---- no error
