import { useNavigate } from "react-router-dom"

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

export const getInstructionSliderData = () => {
  return [
    {
      id: 1,
      imgUrl: 'https://uploads.livepure.com/page/15/feaca5a4ce60c0510ae9c78dafaf1e8d.png',
      title: `STEP 1: C'ENCIA PURE FOAM CLEANSER`,
      textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
    },
    {
      id: 2,
      imgUrl: 'https://uploads.livepure.com/page/15/75d8056eca977ac909357e78db91453c.png',
      title: `STEP 2: C'ENCIA PURE TONER`,
      textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
    },
    {
      id: 3,
      imgUrl: 'https://uploads.livepure.com/page/15/3720c0c045b1026e3102d06fa0c3f384.png',
      title: `STEP 3: C'ENCIA PURE MASK`,
      textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
    },
    {
      id: 4,
      imgUrl: 'https://stg-uploads.puremeka.com/page/15/41ddbf694f769e470ade868a244df6a6.png?v=1697428408',
      title: `STEP 4: C'ENCIA PURE IMULSION`,
      textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
    },
    {
      id: 5,
      imgUrl: 'https://uploads.livepure.com/page/659/f9d68b740ab34b4021022805929413ea.png?v=2023103004',
      title: `STEP 5: C'ENCIA PURE FOAM CREAM`,
      textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
    },
    {
      id: 6,
      imgUrl: 'https://uploads.livepure.com/page/659/ddd3c55fb6a8fafb95b200376d8eb570.png?v=2023103004',
      title: `STEP 6: C'ENCIA PURE PERFUMED BODY MIST`,
      textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`
    },
  ]
}



export const getProductData = () => {

  const handleBuy = (id) => {
    console.log(id, 'awaiting payment')
  }
  const rawProductsData = [
    {
      pid: 10021,
      imgUrl: 'https://uploads.livepure.com/page/15/feaca5a4ce60c0510ae9c78dafaf1e8d.png',
      name: 'PURE Foam Cleanser',
      retailPrice: 17.99,
      preferredPrice: 14.99,
      pageLink: './cleanser'
    },
    {
      pid: 10022,
      imgUrl: 'https://uploads.livepure.com/page/15/75d8056eca977ac909357e78db91453c.png',
      name: 'PURE Toaner',
      retailPrice: 15.99,
      preferredPrice: 12.99,
      pageLink: './toaner'
    },
    {
      pid: 10023,
      imgUrl: 'https://uploads.livepure.com/page/15/3720c0c045b1026e3102d06fa0c3f384.png',
      name: 'PURE Mask',
      retailPrice: 45.99,
      preferredPrice: 34.99,
      pageLink: './mask'
    },
    {
      pid: 10024,
      imgUrl: 'https://stg-uploads.puremeka.com/page/15/41ddbf694f769e470ade868a244df6a6.png?v=1697428408',
      name: 'PURE Imulsion',
      retailPrice: 38.99,
      preferredPrice: 32.99,
      pageLink: './emulsion'
    },
    {
      pid: 10025,
      imgUrl: 'https://uploads.livepure.com/page/659/f9d68b740ab34b4021022805929413ea.png?v=2023103004',
      name: 'PURE Cream',
      retailPrice: 87.99,
      preferredPrice: 70.00,
      pageLink: './cream'
    },
    {
      pid: 10026,
      imgUrl: 'https://uploads.livepure.com/page/659/ddd3c55fb6a8fafb95b200376d8eb570.png?v=2023103004',
      name: 'PURE Body Mist',
      retailPrice: 10.99,
      preferredPrice: 8.99,
      pageLink: './bodymist'
    },
  ]

  return rawProductsData.map(item => ({...item, buyHandler: () => handleBuy(item.pid), cartHandler: () => handleCart(item.pid)})
  )

}