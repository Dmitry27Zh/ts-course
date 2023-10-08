type PcBrand = {
  name: string
  country: string
  createdAt: Date
}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft'

type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand // ---- optional
}

const brandRecord: MyPcRecord = {
  apple: {
    country: 'USA',
    name: 'Apple',
    createdAt: new Date(),
  },
}

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.dell?.name)
}

type PartOfWindow = {
  [Key in 'document' | 'screen' | 'navigator']?: Window[Key]
}

const p: PartOfWindow = {
  screen: window.screen,
}
