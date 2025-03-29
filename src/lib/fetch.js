import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/CartContext";

export const getFeatureData = () => {
  return [
    {
      id: 1,
      title: 'Vegan',
      content: 'In adipisicing tempor tempor aute exercitation proident culpa Lorem excepteur nulla.'
    },
    {
      id: 2,
      title: 'Sustainable',
      content: 'Fugiat consequat exercitation do ad commodo duis minim excepteur consequat?'
    },
    {
      id: 3,
      title: 'Natural',
      content: 'Lorem ullamco deserunt commodo duis minim excepteur consequat anim ad cillum mollit ex reprehenderit.'
    },
    {
      id: 4,
      title: 'Clinically Tested',
      content: 'Sint quis laborum eu voluptate aliquip commodo laboris Lorem dolore irure magna.'
    },
  ]
}

export const getSingleFeatureData = () => {
  const navigate = useNavigate();
  return [
    {
      id: 1,
      imgUrl: 'https://uploads.livepure.com/page/15/1651a07ae69586f9151cdf3e5c940fb1.png',
      title: `Formulated By K-Beauty Experts`,
      content: 'Reprehenderit Lorem reprehenderit aliqua incididunt amet laboris Lorem ad adipisicing culpa ipsum est culpa.',
      clickHandler: () => {
        navigate('/shop')
      }
    },
    {
      id: 2,
      imgUrl: 'https://uploads.livepure.com/page/15/76da84bfdb18a497a468fac20c17d66d.png',
      title: `No Chemical & Cruelty Free`,
      content: 'Reprehenderit Lorem reprehenderit aliqua incididunt amet laboris Lorem ad adipisicing culpa ipsum est culpa.',
      clickHandler: () => {
        navigate('/shop')
      }
    },
  ]
}

export const getShowCaseData = () => {
  return [
    {
      id: 1,
      imgUrl: '/pr1.png',
      textContent: 'Wanna Smell Like Raspberries?'
    },
    {
      id: 2,
      imgUrl: '/pr4.png',
      textContent: 'Smells Like Christmas in a Bottle'
    },
  ]
}


export const getProductData = () => {

  const handleBuy = (id) => {
    console.log(id, 'awaiting payment')
  }


  const keyIngredientsList = [
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
        imgUrl: 'https://uploads.livepure.com/page/651/06550cbfc7035c21c81eddd459464c37.png?v=1697470601',
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
  ]

  const rawProductsData = [
    {
      pid: 10021,
      imgUrl: 'https://uploads.livepure.com/page/15/feaca5a4ce60c0510ae9c78dafaf1e8d.png',
      name: 'PURE Foam Cleanser',
      retailPrice: 17.99,
      preferredPrice: 14.99,
      pageLink: '/shop/cleanser',
      sliderData: {
        id: 1,
        imgUrl: 'https://uploads.livepure.com/page/15/feaca5a4ce60c0510ae9c78dafaf1e8d.png',
        title: `STEP 1: C'ENCIA PURE FOAM CLEANSER`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`,
      },
      productPageData: {
        keyIngredientsCode: [101, 102, 103, 105, 106],
        mainBenifits : {
          imgUrl: 'https://uploads.livepure.com/page/651/2ab0e2129b5b4eac106a82d3fe89723b.png?v=1697472657',
          contents: [
            "Protects the skin barrier during cleansing to minimize moisture loss",
            "Gentle formula cleanses clearly and thoroughly without irritating the skin",
            "The use of a natural surfactant does not dry out your skin after cleansing and leaves it feeling moisturized",
            "A soft, creamy formulation gives a massage effect when applied to your skin",
            "Suitable for all skin types, regardless of age",
          ]
        },
        howToUse: {
          imgUrl: 'https://uploads.livepure.com/page/651/9f5e78f20ff43cc0af40fe077e107e1e.png?v=1697472657',
          contents: [
            "  When washing your face, take a reasonable amount onto your hand and make rich foam.",
            "   Gently massage your skin to cleanse and thoroughly rinse off with lukewarm water. Use twice daily.",
          ]
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map(item => keyIngredientsList.find(dbItem => dbItem.id == item))
        }
      }
    },
    {
      pid: 10022,
      imgUrl: 'https://uploads.livepure.com/page/15/75d8056eca977ac909357e78db91453c.png',
      name: 'PURE Toaner',
      retailPrice: 15.99,
      preferredPrice: 12.99,
      pageLink: '/shop/toaner',
      sliderData: {
        id: 2,
        imgUrl: 'https://uploads.livepure.com/page/15/75d8056eca977ac909357e78db91453c.png',
        title: `STEP 2: C'ENCIA PURE TONER`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
      },
      productPageData: {
        keyIngredientsCode: [112, 110, 103, 107, 108],
        mainBenifits : {
          imgUrl: 'https://uploads.livepure.com/page/652/61eefc7fe517eadf00ebecaf4ebe8468.png?v=1697529343',
          contents: [
            "Instantly creates a moisture film to protect the skin barrier and reduce moisture evaporation",
            "Moisturizes the skin with a variety of natural ingredients to soothe and hydrate the skin",
            "A low-viscosity, water-based toner that leaves skin refreshed and instantly draws moisture into the skin, leaving it soft and resilient",
            "Formulated with panthenol to soothe skin after cleansing",
            "Suitable for all skin types, regardless of age",
          ]
        },
        howToUse: {
          imgUrl: 'https://uploads.livepure.com/page/652/d9c62dde6d03af973a89d1ad7bc7d98e.png?v=1697529343',
          contents: [
            "  After cleansing your face, pump a reasonable onto the palm of your hands and evenly apply",
            "   Gently dab to be absorbed by skin.",
          ]
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map(item => keyIngredientsList.find(dbItem => dbItem.id == item))
        }
      }
    },
    {
      pid: 10023,
      imgUrl: 'https://uploads.livepure.com/page/15/3720c0c045b1026e3102d06fa0c3f384.png',
      name: 'PURE Mask',
      retailPrice: 45.99,
      preferredPrice: 34.99,
      pageLink: '/shop/mask',
      sliderData: {
        id: 3,
        imgUrl: 'https://uploads.livepure.com/page/15/3720c0c045b1026e3102d06fa0c3f384.png',
        title: `STEP 3: C'ENCIA PURE MASK`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
      },
      productPageData: {
        keyIngredientsCode: [104, 109, 103, 111, 101],
        mainBenifits : {
          imgUrl: 'https://uploads.livepure.com/page/684/2d3b36abd562a972404019043f54cc5e.png',
          contents: [
            "Helps address skin damage and signs of aging",
            "Simple, comfortable, and convenient skincare",
            "Targets root causes of skin damage",
            "Deeply moisturizes, calms, and rejuvenates",
          ]
        },
        howToUse: {
          imgUrl: 'https://uploads.livepure.com/page/684/ed327ccae0c8225e77491f02a646fe8e.png',
          contents: [
            "  Apply the sheet evenly over your face.",
            "   After 10-20 minutes, remove the sheet and pat gently to absorb the remaining essence.",
          ]
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map(item => keyIngredientsList.find(dbItem => dbItem.id == item))
        }
      }
    },
    {
      pid: 10024,
      imgUrl: 'https://stg-uploads.puremeka.com/page/15/41ddbf694f769e470ade868a244df6a6.png?v=1697428408',
      name: 'PURE Imulsion',
      retailPrice: 38.99,
      preferredPrice: 32.99,
      pageLink: '/shop/emulsion',
      sliderData: {
        id: 4,
        imgUrl: 'https://stg-uploads.puremeka.com/page/15/41ddbf694f769e470ade868a244df6a6.png?v=1697428408',
        title: `STEP 4: C'ENCIA PURE IMULSION`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
      },
      productPageData: {
        keyIngredientsCode: [101, 102, 103, 105, 106],
        mainBenifits : {
          imgUrl: 'https://uploads.livepure.com/page/651/2ab0e2129b5b4eac106a82d3fe89723b.png?v=1697472657',
          contents: [
            "Protects the skin barrier during cleansing to minimize moisture loss",
            "Gentle formula cleanses clearly and thoroughly without irritating the skin",
            "The use of a natural surfactant does not dry out your skin after cleansing and leaves it feeling moisturized",
            "A soft, creamy formulation gives a massage effect when applied to your skin",
            "Suitable for all skin types, regardless of age",
          ]
        },
        howToUse: {
          imgUrl: 'https://uploads.livepure.com/page/651/9f5e78f20ff43cc0af40fe077e107e1e.png?v=1697472657',
          contents: [
            "  When washing your face, take a reasonable amount onto your hand and make rich foam.",
            "   Gently massage your skin to cleanse and thoroughly rinse off with lukewarm water. Use twice daily.",
          ]
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map(item => keyIngredientsList.find(dbItem => dbItem.id == item))
        }
      }
    },
    {
      pid: 10025,
      imgUrl: 'https://uploads.livepure.com/page/659/f9d68b740ab34b4021022805929413ea.png?v=2023103004',
      name: 'PURE Cream',
      retailPrice: 87.99,
      preferredPrice: 70.00,
      pageLink: '/shop/cream',
      sliderData: {
        id: 5,
        imgUrl: 'https://uploads.livepure.com/page/659/f9d68b740ab34b4021022805929413ea.png?v=2023103004',
        title: `STEP 5: C'ENCIA PURE FOAM CREAM`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
      },
      productPageData: {
        keyIngredientsCode: [104, 109, 103, 111, 101],
        mainBenifits : {
          imgUrl: 'https://uploads.livepure.com/page/684/2d3b36abd562a972404019043f54cc5e.png',
          contents: [
            "Helps address skin damage and signs of aging",
            "Simple, comfortable, and convenient skincare",
            "Targets root causes of skin damage",
            "Deeply moisturizes, calms, and rejuvenates",
          ]
        },
        howToUse: {
          imgUrl: 'https://uploads.livepure.com/page/684/ed327ccae0c8225e77491f02a646fe8e.png',
          contents: [
            "  Apply the sheet evenly over your face.",
            "   After 10-20 minutes, remove the sheet and pat gently to absorb the remaining essence.",
          ]
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map(item => keyIngredientsList.find(dbItem => dbItem.id == item))
        }
      }
    },
    {
      pid: 10026,
      imgUrl: 'https://uploads.livepure.com/page/659/ddd3c55fb6a8fafb95b200376d8eb570.png?v=2023103004',
      name: 'PURE Body Mist',
      retailPrice: 10.99,
      preferredPrice: 8.99,
      pageLink: '/shop/bodymist',
      sliderData: {
        id: 6,
        imgUrl: 'https://uploads.livepure.com/page/659/ddd3c55fb6a8fafb95b200376d8eb570.png?v=2023103004',
        title: `STEP 6: C'ENCIA PURE PERFUMED BODY MIST`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
      },
      productPageData: {
        keyIngredientsCode: [101, 102, 103, 105, 106],
        mainBenifits : {
          imgUrl: 'https://uploads.livepure.com/page/651/2ab0e2129b5b4eac106a82d3fe89723b.png?v=1697472657',
          contents: [
            "Protects the skin barrier during cleansing to minimize moisture loss",
            "Gentle formula cleanses clearly and thoroughly without irritating the skin",
            "The use of a natural surfactant does not dry out your skin after cleansing and leaves it feeling moisturized",
            "A soft, creamy formulation gives a massage effect when applied to your skin",
            "Suitable for all skin types, regardless of age",
          ]
        },
        howToUse: {
          imgUrl: 'https://uploads.livepure.com/page/651/9f5e78f20ff43cc0af40fe077e107e1e.png?v=1697472657',
          contents: [
            "  When washing your face, take a reasonable amount onto your hand and make rich foam.",
            "   Gently massage your skin to cleanse and thoroughly rinse off with lukewarm water. Use twice daily.",
          ]
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map(item => keyIngredientsList.find(dbItem => dbItem.id == item))
        }
      }
    },
  ]

  return rawProductsData;
}