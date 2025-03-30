import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export const getFeatureData = () => {
  return [
    {
      id: 1,
      title: "Vegan",
      content: "In adipisicing tempor tempor aute exercitation proident culpa Lorem excepteur nulla.",
    },
    {
      id: 2,
      title: "Sustainable",
      content: "Fugiat consequat exercitation do ad commodo duis minim excepteur consequat?",
    },
    {
      id: 3,
      title: "Natural",
      content: "Lorem ullamco deserunt commodo duis minim excepteur consequat anim ad cillum mollit ex reprehenderit.",
    },
    {
      id: 4,
      title: "Clinically Tested",
      content: "Sint quis laborum eu voluptate aliquip commodo laboris Lorem dolore irure magna.",
    },
  ];
};

export const getSingleFeatureData = () => {
  const navigate = useNavigate();
  return [
    {
      id: 1,
      imgUrl: "https://uploads.livepure.com/page/15/1651a07ae69586f9151cdf3e5c940fb1.png",
      title: `Formulated By K-Beauty Experts`,
      content:
        "Reprehenderit Lorem reprehenderit aliqua incididunt amet laboris Lorem ad adipisicing culpa ipsum est culpa.",
      clickHandler: () => {
        navigate("/shop");
      },
    },
    {
      id: 2,
      imgUrl: "https://uploads.livepure.com/page/15/76da84bfdb18a497a468fac20c17d66d.png",
      title: `No Chemical & Cruelty Free`,
      content:
        "Reprehenderit Lorem reprehenderit aliqua incididunt amet laboris Lorem ad adipisicing culpa ipsum est culpa.",
      clickHandler: () => {
        navigate("/shop");
      },
    },
  ];
};

export const getShowCaseData = () => {
  return [
    {
      id: 1,
      imgUrl: "/pr1.png",
      textContent: "Wanna Smell Like Raspberries?",
      pageLink: "/shop/bodymist",
    },
    {
      id: 2,
      imgUrl: "/pr4.png",
      textContent: "Smells Like Christmas in a Bottle",
      pageLink: "/comingsoon",
    },
  ];
};

export const getProductData = () => {
  const handleBuy = (id) => {
    console.log(id, "awaiting payment");
  };

  const keyIngredientsList = [
    {
      id: 101,
      imgUrl: "https://uploads.livepure.com/page/651/274023bcee81fba25a31bd406fc57b23.png?v=1697467597",
      name: "Peptide Complex",
      textContent: "Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.",
    },
    {
      id: 102,
      imgUrl: "https://uploads.livepure.com/page/651/6aa4ecfdc988612188e29d45f03151b9.png?v=1697536485",
      name: "Niacinamide",
      textContent: "Tempor fugiat est ex et ut anim magna officia proident sit adipisicing.",
    },
    {
      id: 103,
      imgUrl: "https://uploads.livepure.com/page/651/06550cbfc7035c21c81eddd459464c37.png?v=1697470601",
      name: "Lycilium Fruit Extract",
      textContent: "Ea exercitation quis veniam ex laborum ad non laborum ad pariatur adipisicing.",
    },
    {
      id: 104,
      imgUrl: "https://uploads.livepure.com/page/651/288eab67dfcdbfe8aa50b8d1357170b8.png?v=1697470112",
      name: "Camelia Sinensin Leaf Extract",
      textContent:
        "Non quis consectetur amet ea consectetur voluptate voluptate occaecat aliquip esse enim incididunt.",
    },
    {
      id: 105,
      imgUrl: "https://uploads.livepure.com/page/651/8f316e03f670dd49404e1f9affac5822.png?v=1697470112",
      name: "Honey Extract",
      textContent: "Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.",
    },
    {
      id: 106,
      imgUrl: "https://uploads.livepure.com/page/651/1bf98a5f8b791d19aef6262d0e2f5b25.png?v=1697470112",
      name: "Rosemary Leaf Extract",
      textContent: "Ipsum do eu magna veniam ut ea nisi consequat pariatur aliquip eiusmod.",
    },
    {
      id: 107,
      imgUrl: "https://uploads.livepure.com/page/651/c401ab9ee5a50c3d19be1a2caca35957.png?v=1697536485",
      name: "Panthenol",
      textContent: "Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.",
    },
    {
      id: 108,
      imgUrl: "https://uploads.livepure.com/page/684/b2dc08421e169ebd0c18aa70fba57dce.png",
      name: "Centella Asiatica Extract",
      textContent: "Elit tempor eiusmod laboris sunt do aute commodo anim quis quis consectetur ut laborum aliquip.",
    },
    {
      id: 109,
      imgUrl: "https://uploads.livepure.com/page/684/3bd982e47e090f4ec0b78970a5c0b162.png",
      name: "Hydrolyzed Collagen",
      textContent: "Voluptate dolor ea tempor commodo adipisicing minim elit nulla anim dolor exercitation quis.",
    },
    {
      id: 110,
      imgUrl: "https://uploads.livepure.com/page/684/39f33f05f65f72b080dc0ffb3c4867e1.png",
      name: "Rosa Damascena Flower Extract",
      textContent: "Velit dolor pariatur voluptate dolor ullamco non eu voluptate nulla do tempor fugiat laboris.",
    },
    {
      id: 111,
      imgUrl: "https://uploads.livepure.com/page/684/47f374ed2e121b391350030cb5c5f1af.png",
      name: "Aloe Vera Extract",
      textContent: "Ipsum do eu magna veniam ut ea nisi consequat pariatur aliquip eiusmod.",
    },
    {
      id: 112,
      imgUrl: "https://uploads.livepure.com/page/651/1bf98a5f8b791d19aef6262d0e2f5b25.png?v=1697470112",
      name: "Rosemary Leaf Extract",
      textContent: "Consectetur exercitation qui cupidatat sunt proident.",
    },
    {
      id: 113,
      imgUrl: "https://uploads.livepure.com/page/684/434a6b3cd24d4dc4c9cec6faa9749efd.png",
      name: "Trehalos",
      textContent: "Nulla proident et laborum nisi proident ullamco Lorem eiusmod eu veniam quis.",
    },
  ];

  const rawProductsData = [
    {
      pid: 10021,
      imgUrl: "https://uploads.livepure.com/page/15/feaca5a4ce60c0510ae9c78dafaf1e8d.png",
      name: "PURE Foam Cleanser",
      retailPrice: 17.99,
      preferredPrice: 14.99,
      pageLink: "/shop/cleanser",
      sliderData: {
        id: 1,

        imgUrl: "https://uploads.livepure.com/page/15/feaca5a4ce60c0510ae9c78dafaf1e8d.png",
        title: `STEP 1: C'ENCIA PURE FOAM CLEANSER`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`,
      },
      productPageData: {
        keyIngredientsCode: [101, 102, 103, 105, 106],
        mainBenifits: {
          imgUrl: "https://uploads.livepure.com/page/651/2ab0e2129b5b4eac106a82d3fe89723b.png?v=1697472657",
          contents: [
            "Protects the skin barrier during cleansing to minimize moisture loss",
            "Gentle formula cleanses clearly and thoroughly without irritating the skin",
            "The use of a natural surfactant does not dry out your skin after cleansing and leaves it feeling moisturized",
            "A soft, creamy formulation gives a massage effect when applied to your skin",
            "Suitable for all skin types, regardless of age",
          ],
        },
        howToUse: {
          imgUrl: "https://uploads.livepure.com/page/651/9f5e78f20ff43cc0af40fe077e107e1e.png?v=1697472657",
          contents: [
            "  When washing your face, take a reasonable amount onto your hand and make rich foam.",
            "   Gently massage your skin to cleanse and thoroughly rinse off with lukewarm water. Use twice daily.",
          ],
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map((item) => keyIngredientsList.find((dbItem) => dbItem.id == item));
        },
      },
    },
    {
      pid: 10022,
      imgUrl: "https://uploads.livepure.com/page/15/75d8056eca977ac909357e78db91453c.png",
      name: "PURE Toaner",
      retailPrice: 15.99,
      preferredPrice: 12.99,
      pageLink: "/shop/toaner",
      sliderData: {
        id: 2,
        imgUrl: "https://uploads.livepure.com/page/15/75d8056eca977ac909357e78db91453c.png",
        title: `STEP 2: C'ENCIA PURE TONER`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`,
      },
      productPageData: {
        keyIngredientsCode: [112, 110, 103, 107, 108],
        mainBenifits: {
          imgUrl: "https://uploads.livepure.com/page/652/61eefc7fe517eadf00ebecaf4ebe8468.png?v=1697529343",
          contents: [
            "Instantly creates a moisture film to protect the skin barrier and reduce moisture evaporation",
            "Moisturizes the skin with a variety of natural ingredients to soothe and hydrate the skin",
            "A low-viscosity, water-based toner that leaves skin refreshed and instantly draws moisture into the skin, leaving it soft and resilient",
            "Formulated with panthenol to soothe skin after cleansing",
            "Suitable for all skin types, regardless of age",
          ],
        },
        howToUse: {
          imgUrl: "https://uploads.livepure.com/page/652/d9c62dde6d03af973a89d1ad7bc7d98e.png?v=1697529343",
          contents: [
            "  After cleansing your face, pump a reasonable onto the palm of your hands and evenly apply",
            "   Gently dab to be absorbed by skin.",
          ],
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map((item) => keyIngredientsList.find((dbItem) => dbItem.id == item));
        },
      },
    },
    {
      pid: 10023,
      imgUrl: "https://uploads.livepure.com/page/15/3720c0c045b1026e3102d06fa0c3f384.png",
      name: "PURE Mask",
      retailPrice: 45.99,
      preferredPrice: 34.99,
      pageLink: "/shop/mask",
      sliderData: {
        id: 3,
        imgUrl: "https://uploads.livepure.com/page/15/3720c0c045b1026e3102d06fa0c3f384.png",
        title: `STEP 3: C'ENCIA PURE MASK`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`,
      },
      productPageData: {
        keyIngredientsCode: [104, 109, 103, 111, 101],
        mainBenifits: {
          imgUrl: "https://uploads.livepure.com/page/684/2d3b36abd562a972404019043f54cc5e.png",
          contents: [
            "Helps address skin damage and signs of aging",
            "Simple, comfortable, and convenient skincare",
            "Targets root causes of skin damage",
            "Deeply moisturizes, calms, and rejuvenates",
          ],
        },
        howToUse: {
          imgUrl: "https://uploads.livepure.com/page/684/ed327ccae0c8225e77491f02a646fe8e.png",
          contents: [
            "  Apply the sheet evenly over your face.",
            "   After 10-20 minutes, remove the sheet and pat gently to absorb the remaining essence.",
          ],
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map((item) => keyIngredientsList.find((dbItem) => dbItem.id == item));
        },
      },
    },
    {
      pid: 10024,
      imgUrl: "https://stg-uploads.puremeka.com/page/15/41ddbf694f769e470ade868a244df6a6.png?v=1697428408",
      name: "PURE Imulsion",
      retailPrice: 38.99,
      preferredPrice: 32.99,
      pageLink: "/shop/emulsion",
      sliderData: {
        id: 4,
        imgUrl: "https://stg-uploads.puremeka.com/page/15/41ddbf694f769e470ade868a244df6a6.png?v=1697428408",
        title: `STEP 4: C'ENCIA PURE IMULSION`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`,
      },
      productPageData: {
        keyIngredientsCode: [101, 102, 103, 105, 106],
        mainBenifits: {
          imgUrl: "https://uploads.livepure.com/page/651/2ab0e2129b5b4eac106a82d3fe89723b.png?v=1697472657",
          contents: [
            "Protects the skin barrier during cleansing to minimize moisture loss",
            "Gentle formula cleanses clearly and thoroughly without irritating the skin",
            "The use of a natural surfactant does not dry out your skin after cleansing and leaves it feeling moisturized",
            "A soft, creamy formulation gives a massage effect when applied to your skin",
            "Suitable for all skin types, regardless of age",
          ],
        },
        howToUse: {
          imgUrl: "https://uploads.livepure.com/page/651/9f5e78f20ff43cc0af40fe077e107e1e.png?v=1697472657",
          contents: [
            "  When washing your face, take a reasonable amount onto your hand and make rich foam.",
            "   Gently massage your skin to cleanse and thoroughly rinse off with lukewarm water. Use twice daily.",
          ],
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map((item) => keyIngredientsList.find((dbItem) => dbItem.id == item));
        },
      },
    },
    {
      pid: 10025,
      imgUrl: "https://uploads.livepure.com/page/659/f9d68b740ab34b4021022805929413ea.png?v=2023103004",
      name: "PURE Cream",
      retailPrice: 87.99,
      preferredPrice: 70.0,
      pageLink: "/shop/cream",
      sliderData: {
        id: 5,
        imgUrl: "https://uploads.livepure.com/page/659/f9d68b740ab34b4021022805929413ea.png?v=2023103004",
        title: `STEP 5: C'ENCIA PURE FOAM CREAM`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`,
      },
      productPageData: {
        keyIngredientsCode: [104, 109, 103, 111, 101],
        mainBenifits: {
          imgUrl: "https://uploads.livepure.com/page/684/2d3b36abd562a972404019043f54cc5e.png",
          contents: [
            "Helps address skin damage and signs of aging",
            "Simple, comfortable, and convenient skincare",
            "Targets root causes of skin damage",
            "Deeply moisturizes, calms, and rejuvenates",
          ],
        },
        howToUse: {
          imgUrl: "https://uploads.livepure.com/page/684/ed327ccae0c8225e77491f02a646fe8e.png",
          contents: [
            "  Apply the sheet evenly over your face.",
            "   After 10-20 minutes, remove the sheet and pat gently to absorb the remaining essence.",
          ],
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map((item) => keyIngredientsList.find((dbItem) => dbItem.id == item));
        },
      },
    },
    {
      pid: 10026,
      imgUrl: "https://uploads.livepure.com/page/659/ddd3c55fb6a8fafb95b200376d8eb570.png?v=2023103004",
      name: "PURE Body Mist",
      retailPrice: 10.99,
      preferredPrice: 8.99,
      pageLink: "/shop/bodymist",
      sliderData: {
        id: 6,
        imgUrl: "https://uploads.livepure.com/page/659/ddd3c55fb6a8fafb95b200376d8eb570.png?v=2023103004",
        title: `STEP 6: C'ENCIA PURE PERFUMED BODY MIST`,
        textContent: `Consectetur eu consequat ad ullamco anim qui fugiat dolor elit excepteur sit Lorem. Nisi qui pariatur non Lorem adipisicing ad dolore exercitation magna sit dolore fugiat adipisicing.`,
      },
      productPageData: {
        keyIngredientsCode: [101, 102, 103, 105, 106],
        mainBenifits: {
          imgUrl: "https://uploads.livepure.com/page/651/2ab0e2129b5b4eac106a82d3fe89723b.png?v=1697472657",
          contents: [
            "Protects the skin barrier during cleansing to minimize moisture loss",
            "Gentle formula cleanses clearly and thoroughly without irritating the skin",
            "The use of a natural surfactant does not dry out your skin after cleansing and leaves it feeling moisturized",
            "A soft, creamy formulation gives a massage effect when applied to your skin",
            "Suitable for all skin types, regardless of age",
          ],
        },
        howToUse: {
          imgUrl: "https://uploads.livepure.com/page/651/9f5e78f20ff43cc0af40fe077e107e1e.png?v=1697472657",
          contents: [
            "  When washing your face, take a reasonable amount onto your hand and make rich foam.",
            "   Gently massage your skin to cleanse and thoroughly rinse off with lukewarm water. Use twice daily.",
          ],
        },
        getProductIngredients() {
          return this.keyIngredientsCode.map((item) => keyIngredientsList.find((dbItem) => dbItem.id == item));
        },
      },
    },
  ];

  return rawProductsData;
};

export const getBlogData = () => {
  return [
    {
      id: 1,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/NEW-YSL-loveshine-plumping-lipgloss-oil-loveshine-1080x1620.jpg",
      category: "trending",
      auther: "Sophia Carter",
      publishedAt: "10 Mar, 2025",
      title: "Discover the New YSL Loveshine Lip Oil Collection",
      summery: "YSL introduces a stunning new lip oil collection with vibrant shades and a glossy finish.",
      tags: ['tips', 'ysl', 'review'],
      imgLinkCollections: [
          "https://thebeautylookbook.com/wp-content/uploads/2025/03/YSL-loveshine-plumping-lip-oil-gloss-1080x1620.jpg",
          "https://thebeautylookbook.com/wp-content/uploads/2025/03/YSL-Loveshine-Plumping-Lip-Oil-Gloss-2-Lucky-Moonstone-1080x1620.jpg",
          "https://thebeautylookbook.com/wp-content/uploads/2025/03/YSL-Loveshine-Plumping-Lip-Oil-Gloss-8-Purple-Dream-1080x1620.jpg",
          "https://thebeautylookbook.com/wp-content/uploads/2025/03/YSL-New-Candy-Glaze-Loveshine-shades-ss-1080x1620.jpg",
        ],
        mainContent: `YSL Beauty has some new lip launches for spring! As a huge fan of YSL lip colors I was excited to try the new Loveshine Plumping Lip Oil Gloss ($40 each). They’ve also added some new shades of the Loveshine Lip Oil Stick ($45 each) and Candy Glaze Lip Gloss Stick ($42). After putting to these to the test I have some hits and misses. [img] I received four of the new YSL Loveshine Plumping Lip Oil Gloss as press samples. The gloss is smooth and non-sticky with stunning colors. These have beautiful packaging with a plush applicator. Pigment is 10/10 on point with perfect coverage and a nice glossy finish. These have Spicy Ginger and Pepper Oils and they have a noticeable spicy gingery scent. Plumping effect is very strong and noticeable within minutes. On me there’s a medium level for a plumping sting but the tingle is INTENSE on my lips with a slight numbing heated sensation.
  
        They’re not as painful as the Fenty Gloss Bomb Heat, Charlotte Tilbury Plumpgasm Gloss or Maybelline Lifter Plump Gloss, but the tingle is still very strong and I found them too strong for my sensitive lips. On a tingle scale of 1 to 10 (with 10 being the most painful) I’d rate the YSL tingle level 8.5. [img] If your lips can handle the tingle, I do think the colors and finish are exceptionally beautiful. For me I have tried these on a few different days and I’ve decided these unfortunately are too strong for me. These launch at Sephora on 3/28 (on the app) and 3/29 online. [img] I’m always excited for new shades of the YSL tinted balms. There are two new shades of the Candy Glaze which is my favorite formula from YSL. It’s on the thicker side but in a good way so the colors adhere well to the lips and they stay put longer than other tinted balms. They added 44 Nude Lavalliere to the lineup which is a pretty cool toned pink and 16 Watermelon High which is a warm rose. I love the colors and finish.
  
        YSL also added new shades of the Loveshine Lip Oil Stick in 213 Pink Trip and 214 Wet Guava. Both are beautiful soft pink neutrals but since they are sheer they both look very similar on my pigmented lips. I pulled a few other pinkish neutrals I have in the same formula. While they look different swatched on the arm, on my lips they look so similar. I think I have a slight preference for Wet Guava if I had to pick just one. Both formulas/shades are all out now at Sephora. [img] Overall love the new Candy Glaze shades. I think the new Loveshines are pretty and will probably show up better on most of you. My natural lips are on the darker side so sheer shades don’t always show up on my lips. As much as I love the colors and finish, I think the new Loveshine Plumping Lip Oil Glosses are a pass for me mainly because I can’t handle the tingle`,
    },
    {
      id: 2,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/Chanel-Camelia-Futura-Collection-Spring2025-520x400.jpg",
      category: "trending",
      auther: "Emma Johnson",
      publishedAt: "12 Mar, 2025",
      title: "Chanel Camelia Futura Collection – A Spring Must-Have",
      summery:
        "Chanel's Camelia Futura Collection brings elegance and sophistication to your spring look.",
    },
    {
      id: 3,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/21-Days-Beauty-Ulta-Sale-BEAUTYLOOKBOOK-520x400.jpg",
      category: "trending",
      auther: "Olivia Brown",
      publishedAt: "15 Mar, 2025",
      title: "Ulta's 21 Days of Beauty – Deals You Can't Miss",
      summery:
        "Explore the best deals and steals from Ulta's 21 Days of Beauty event this spring.",
    },
    {
      id: 4,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/NEW-YSL-loveshine-plumping-lipgloss-oil-loveshine-1080x1620.jpg",
      category: "trending",
      auther: "Isabella Davis",
      publishedAt: "18 Mar, 2025",
      title: "YSL Candy Glaze Shades – A Sweet Treat for Your Lips",
      summery:
        "YSL's Candy Glaze shades offer a perfect blend of color and hydration for your lips.",
    },
    {
      id: 5,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/Chanel-Camelia-Futura-Collection-Spring2025-520x400.jpg",
      category: "trending",
      auther: "Mia Wilson",
      publishedAt: "20 Mar, 2025",
      title: "Spring Beauty Trends with Chanel's Latest Collection",
      summery:
        "Stay ahead of the trends with Chanel's latest spring beauty collection.",
    },
    {
      id: 6,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/21-Days-Beauty-Ulta-Sale-BEAUTYLOOKBOOK-520x400.jpg",
      category: "trending",
      auther: "Amelia Martinez",
      publishedAt: "22 Mar, 2025",
      title: "Ulta's Beauty Sale – Top Picks for This Season",
      summery:
        "Don't miss out on Ulta's beauty sale – here are the top picks for this season.",
    },
    {
      id: 7,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/NEW-YSL-loveshine-plumping-lipgloss-oil-loveshine-1080x1620.jpg",
      category: "latest",
      auther: "Charlotte Garcia",
      publishedAt: "25 Mar, 2025",
      title: "YSL's New Lip Oil – A Game Changer for Hydration",
      summery:
        "YSL's new lip oil is here to revolutionize hydration with its unique formula.",
    },
    {
      id: 8,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/Chanel-Camelia-Futura-Collection-Spring2025-520x400.jpg",
      category: "latest",
      auther: "Harper Lee",
      publishedAt: "27 Mar, 2025",
      title: "Chanel's Spring Collection – A Closer Look",
      summery:
        "Dive into Chanel's spring collection and discover the beauty essentials for the season.",
    },
    {
      id: 9,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/21-Days-Beauty-Ulta-Sale-BEAUTYLOOKBOOK-520x400.jpg",
      category: "latest",
      auther: "Evelyn White",
      publishedAt: "29 Mar, 2025",
      title: "Ulta's Beauty Event – What You Need to Know",
      summery:
        "Get all the details on Ulta's beauty event and the must-have products on sale.",
    },
    {
      id: 10,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/NEW-YSL-loveshine-plumping-lipgloss-oil-loveshine-1080x1620.jpg",
      category: "latest",
      auther: "Abigail Harris",
      publishedAt: "30 Mar, 2025",
      title: "YSL's Candy Glaze – A Sweet Addition to Your Collection",
      summery:
        "Add a touch of sweetness to your collection with YSL's Candy Glaze shades.",
    },
    {
      id: 11,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/NEW-YSL-loveshine-plumping-lipgloss-oil-loveshine-1080x1620.jpg",
      category: "latest",
      auther: "Charlotte Garcia",
      publishedAt: "25 Mar, 2025",
      title: "YSL's New Lip Oil – A Game Changer for Hydration",
      summery:
        "YSL's new lip oil is here to revolutionize hydration with its unique formula.",
    },
    {
      id: 12,
      imgUrl:
        "https://thebeautylookbook.com/wp-content/uploads/2025/03/Chanel-Camelia-Futura-Collection-Spring2025-520x400.jpg",
      category: "latest",
      auther: "Harper Lee",
      publishedAt: "27 Mar, 2025",
      title: "Chanel's Spring Collection – A Closer Look",
      summery:
        "Dive into Chanel's spring collection and discover the beauty essentials for the season.",
    },
  ];
};
