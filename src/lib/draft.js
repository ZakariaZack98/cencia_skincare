const keyIngredientsList = [
  {
    id: 1,
    imgUrl: 'https://uploads.livepure.com/page/651/274023bcee81fba25a31bd406fc57b23.png?v=1697467597',
    name: 'Peptide Complex',
    textContent: 'Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.'
  },
  {
    id: 101,
    imgUrl: 'https://uploads.livepure.com/page/651/274023bcee81fba25a31bd406fc57b23.png?v=1697467597',
    name: 'Peptide Complex',
    textContent: 'Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.'
  },
  {
    id: 102,
    imgUrl: 'https://uploads.livepure.com/page/651/6aa4ecfdc988612188e29d45f03151b9.png?v=1697536485',
    name: 'Niacinamide',
    textContent: 'Tempor fugiat est ex et ut anim magna officia proident sit adipisicing.'
  },
  {
    id: 103,
    imgUrl: 'https://uploads.livepure.com/page/651/274023bcee81fba25a31bd406fc57b23.png?v=1697467597',
    name: 'Lycilium Fruit Extract',
    textContent: 'Ea exercitation quis veniam ex laborum ad non laborum ad pariatur adipisicing.'
  },
  {
    id: 104,
    imgUrl: 'https://uploads.livepure.com/page/651/288eab67dfcdbfe8aa50b8d1357170b8.png?v=1697470112',
    name: 'Camelia Sinensin Leaf Extract',
    textContent: 'Non quis consectetur amet ea consectetur voluptate voluptate occaecat aliquip esse enim incididunt.'
  },
  {
    id: 105,
    imgUrl: 'https://uploads.livepure.com/page/651/8f316e03f670dd49404e1f9affac5822.png?v=1697470112',
    name: 'Honey Extract',
    textContent: 'Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.'
  },
  {
    id: 106,
    imgUrl: 'https://uploads.livepure.com/page/651/1bf98a5f8b791d19aef6262d0e2f5b25.png?v=1697470112',
    name: 'Rosemary Leaf Extract',
    textContent: 'Ipsum do eu magna veniam ut ea nisi consequat pariatur aliquip eiusmod.'
  },
  {
    id: 107,
    imgUrl: 'https://uploads.livepure.com/page/651/c401ab9ee5a50c3d19be1a2caca35957.png?v=1697536485',
    name: 'Panthenol',
    textContent: 'Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.'
  },
  {
    id: 108,
    imgUrl: 'https://uploads.livepure.com/page/684/b2dc08421e169ebd0c18aa70fba57dce.png',
    name: 'Centella Asiatica Extract',
    textContent: 'Elit tempor eiusmod laboris sunt do aute commodo anim quis quis consectetur ut laborum aliquip.'
  },
  {
    id: 109,
    imgUrl: 'https://uploads.livepure.com/page/684/3bd982e47e090f4ec0b78970a5c0b162.png',
    name: 'Hydrolyzed Collagen',
    textContent: 'Voluptate dolor ea tempor commodo adipisicing minim elit nulla anim dolor exercitation quis.'
  },
  {
    id: 110,
    imgUrl: 'https://uploads.livepure.com/page/684/39f33f05f65f72b080dc0ffb3c4867e1.png',
    name: 'Rosa Damascena Flower Extract',
    textContent: 'Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.'
  },
  {
    id: 111,
    imgUrl: 'https://uploads.livepure.com/page/684/47f374ed2e121b391350030cb5c5f1af.png',
    name: 'Aloe Vera Extract',
    textContent: 'Ipsum do eu magna veniam ut ea nisi consequat pariatur aliquip eiusmod.'
  },
  {
    id: 112,
    imgUrl: 'https://uploads.livepure.com/page/651/1bf98a5f8b791d19aef6262d0e2f5b25.png?v=1697470112',
    name: 'Rosemary Leaf Extract',
    textContent: 'Consectetur exercitation qui cupidatat sunt proident.'
  },
  {
    id: 113,
    imgUrl: 'https://uploads.livepure.com/page/684/434a6b3cd24d4dc4c9cec6faa9749efd.png',
    name: 'Trehalos',
    textContent: 'Nulla proident et laborum nisi proident ullamco Lorem eiusmod eu veniam quis.'
  },
];

const product = {
  keyIngredientsCode: [101, 102, 103, 105, 106],
  getProductIngredients() {
    return this.keyIngredientsCode.map(item => keyIngredientsList.find(dbItem => dbItem.id == item))
  }
}

const res = product.getProductIngredients();

console.log(res);